import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "16dd81a9c48e022ac37ab1a286d37f0a";

export const getTrendingMovies = () => {
  return axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
};

export const fetchMovieWithId = (id) => {
  return axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
};
export const getMoviesQuery = (query) => {
  return axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
};

export const getMoviesCredits = (id) => {
  return axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
};

export const getMoviesReviews = (id) => {
  return axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
};
