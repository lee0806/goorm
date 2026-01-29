import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="main-container">
      <h1>로그인 정보를 입력해주세요.</h1>
      <input
        className="input-email"
        type="text"
        placeholder="이메일을 입력해주세요"
      />
      <button className="login-button">로그인할게요</button>
    </div>
  );
}
