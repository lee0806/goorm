"use client";

import React from "react";
import Image from "next/image";
import { fetchTopRated, fetchRomanceMovies } from "@/api/movie";
import { useQuery } from "@tanstack/react-query";
import "./main.css";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function Page() {
  const {
    data: topRatedData, // top rate 데이터
    isLoading: isTopRatedLoading, // 로딩일때
    isError: isTopRatedError, // 에러가 나왔을 때
  } = useQuery<Movie[]>({
    queryKey: ["topRatedMovies"], // 고유 키
    queryFn: fetchTopRated, // 동작 함수 (api를 요청해 데이터를 불러옴)
  });

  const {
    data: romanceData, // romance 데이터
    isLoading: isRomanceLoading, // 로딩일때
    isError: isRomanceError, // 에러가 나왔을 때
  } = useQuery<Movie[]>({
    queryKey: ["romanceMovies"], // 고유 키
    queryFn: fetchRomanceMovies, // 동작 함수 (api를 요청해 데이터를 불러옴)
  });

  if (isTopRatedLoading || isRomanceLoading) {
    // 로딩 중일 때
    return <div>Loading...</div>;
  }

  if (isTopRatedError || isRomanceError) {
    // 에러가 나왔을 때
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className="main-container">
      <h1 style={{ color: "white", fontSize: "52px", marginBottom: "10px" }}>
        TV 드라마
      </h1>
      <div className="describe">
        <div className="title-describe">
          한 편으로는 부족한 이야기가 있다. 장대한 범죄물, 정교한 의학 드라마
          그리고
        </div>
        <div className="title-describe">
          광활한 세계로 뻗어 나가는 SF까지. 끝을 보기 아쉬워도 멈출 수 없다.
        </div>
      </div>

      <div className="content-card-section">
        <div className="title-describe">
          꼭 챙겨보세요! 회원님을 위한 컨텐츠
        </div>
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
      <div className="content-card-section">
        <div className="title-describe">언제나 사랑받는 로맨스 콘텐츠</div>
        <div className="movie-card">
          {romanceData?.map((movie) => (
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
    </div>
  );
}
