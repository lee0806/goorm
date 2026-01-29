import axios from "axios";

const instance = axios.create({
  // 인스턴스 추가
  baseURL: "https://api.themoviedb.org/3", // TMDB 기본 URL
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY, // 환경 변수에서 API 키 가져오기
    language: "ko-KR", // 한국어 설정
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API 요청에 문제가 있습니다.", error);
  },
);

export default instance; // 인스턴스 내보내기
