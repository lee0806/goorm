"use client";
import React from "react";
import { useParams } from "next/navigation";
import { fetchFindMovie } from "@/api/movie";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import "./movieId.css";

type MovieDetail = {
  // 영화 상세 정보 타입
  title: string;
  overview: string;
  poster_path: string;
  genres: { id: number; name: string }[];
};

export default function Movie() {
  const params = useParams(); // URL 파라미터
  const movieId = params.id; // 에서 가져온 id를 저장

  const {
    data: movieData,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useQuery<MovieDetail>({
    queryKey: ["findMovie", movieId], // 고유 키
    queryFn: () => fetchFindMovie(movieId as string), // api를 요청해 영화 id에 따른 영화 데이터를 가져옴
  });

  console.log(movieData);

  if (isMovieLoading) {
    return <div>Loading...</div>;
  }

  if (isMovieError || !movieData) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="movie-des-container">
        <h1 className="movie-des-title">{movieData.title}</h1>
        <Image
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt={movieData.title}
          width={500}
          height={800}
          style={{ borderRadius: "15px" }}
        />
        <main className="movie-des-main">
          <section>
            <div className="movie-overview">
              <div className="movie-overview-title">줄거리</div>
              <div className="movie-overview-section">{movieData.overview}</div>
            </div>
          </section>
          <section>
            <div className="movie-genres">
              <div className="movie-overview-title">장르</div>
              <div className="genres-items">
                {movieData.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
