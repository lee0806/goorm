import React from "react";
import Image from "next/image";
import { fetchTopRated } from "@/api/movie";
import { useQuery } from "@tanstack/react-query";
import "./topRatedData.css";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function TopRatedData({ title }: { title: string }) {
  const {
    data: topRatedData, // top rate 데이터
    isLoading: isTopRatedLoading, // 로딩일때
    isError: isTopRatedError, // 에러가 나왔을 때
  } = useQuery<Movie[]>({
    queryKey: ["topRatedMovies"], // 고유 키
    queryFn: fetchTopRated, // 동작 함수 (api를 요청해 데이터를 불러옴)
  });

  if (isTopRatedLoading) {
    return <div>Loading...</div>;
  }

  if (isTopRatedError) {
    return <div>Error</div>;
  }

  return (
    <div className="content-card-section">
      <div className="title-describe">{title}</div>
      <div className="movie-card">
        {topRatedData?.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
