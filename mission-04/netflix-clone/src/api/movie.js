import instance from "./axios";
import requests from "./request";

export const fetchTopRated = () => {
  instance.get(requests.fetchTopRated);
};
