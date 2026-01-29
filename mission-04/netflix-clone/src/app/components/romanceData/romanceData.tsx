import React from "react";
import Image from "next/image";
import { fetchRomanceMovies } from "@/api/movie";
import { useQuery } from "@tanstack/react-query";
import "./romanceData.css";
import { useRouter } from "next/navigation";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function RomanceData({ title }: { title: string }) {
  const router = useRouter();
  const {
    data: romanceData, // romance 데이터
    isLoading: isRomanceLoading, // 로딩일때
    isError: isRomanceError, // 에러가 나왔을 때
  } = useQuery<Movie[]>({
    queryKey: ["romanceMovies"], // 고유 키
    queryFn: fetchRomanceMovies, // 동작 함수 (api를 요청해 데이터를 불러옴)
  });

  console.log(romanceData);

  if (isRomanceLoading) {
    return <div>Loading...</div>;
  }

  if (isRomanceError) {
    return <div>Error</div>;
  }

  return (
    <div className="content-card-section">
      <div className="title-describe">{title}</div>
      <div className="movie-card">
        {romanceData?.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            onClick={() => router.push(`/movie/${movie.id}`)}
          >
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
