"use client";

import React from "react";
import Image from "next/image";
import instance from "../../api/axios";
import requests from "../../api/request";
import "./main.css";
import { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await instance.get(requests.fetchTopRated);
      setMovies(res.data.results);
    };
    fetchMovies();
  }, []);

  console.log(movies);
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
          {movies.map((movie) => (
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
        <div className="title-describe">
          언제나 사랑받는 로맨스 콘텐츠
        </div>
        <div className="movie-card">
          {movies.map((movie) => (
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
