import instance from "./axios"; // axios 인스턴스 가져오기
import requests from "./request"; // 요청 URL

export const fetchTopRated = async () => {
  // top rate 비동기 처리
  const response = await instance.get(requests.fetchTopRated); // get 요청
  return response.data.results; // results 반환
};

export const fetchRomanceMovies = async () => {
  // romance 비동기 처리
  const response = await instance.get(requests.fetchRomanceMovies); // get 요청
  return response.data.results; // results 반환
};

export const fetchFindMovie = async (movieId) => {
  // movieId로 영화 상세 정보 비동기 처리
  try {
    // 잘못된 접근을 했을 경우
    const response = await instance.get(
      `${requests.fetchFindMovie}${movieId}?`,
    ); // get 요청

    if (!response) {
      throw new Error("영화를 찾을 수 없습니다.");
    }

    return response.data; // 데이터 반환
  } catch (error) {
    console.error("잘못된 id값이에요", error);
    throw new Error("영화를 찾을 수 없습니다.");
  }
};
