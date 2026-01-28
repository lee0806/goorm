import instance from "./axios"; // axios 인스턴스 가져오기
import requests from "./request"; // 요청 URL 

export const fetchTopRated = async () => { // top rate 비동기 처리
  const response = await instance.get(requests.fetchTopRated); // get 요청
  return response.data.results; // results 반환
};

export const fetchRomanceMovies = async () => { // romance 비동기 처리
  const response = await instance.get(requests.fetchRomanceMovies); // get 요청
  return response.data.results; // results 반환
};
