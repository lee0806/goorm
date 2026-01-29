"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import Header from "../components/header/header";
import TopRatedData from "../components/topRatedData/topRatedData";
import RomanceData from "../components/romanceData/romanceData";
import "./main.css";

export default function Page() {
  const { email } = useAuth();
  return (
    <>
      <Header></Header>
      <div className="main-container">
        {email && (
          <div className="welcome-message">
            <span>{email}</span>
            님, 환영합니다!
          </div>
        )}

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

        <TopRatedData title="꼭 챙겨보세요! 회원님을 위한 컨텐츠" />

        <RomanceData title="언제나 사랑받는 로맨스 콘텐츠" />
      </div>
    </>
  );
}
