import instance from "./axios";
import requests from "./request";

export const fetchTopRated = async () => {
  const response = await instance.get(requests.fetchTopRated);
  return response.data.results;
};

export const fetchRomanceMovies = async () => {
  const response = await instance.get(requests.fetchRomanceMovies);
  return response.data.results;
};
