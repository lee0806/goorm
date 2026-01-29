"use client";
import React from "react";
import { useParams } from "next/navigation";
import { fetchFindMovie } from "@/api/movie";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import "./movieId.css";

type MovieDetail = {
  // 영화 상세 정보 타입
  original_title: string;
  overview: string;
  poster_path: string;
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

  if (isMovieLoading) {
    return <div>Loading...</div>;
  }

  if (isMovieError || !movieData) {
    return <div>Error</div>;
  }

  return (
    <>
      <div>
        <h1>영화 상세 페이지</h1>
        <Image
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt={movieData.original_title}
          width={200}
          height={300}
        />
      </div>
    </>
  );
}
