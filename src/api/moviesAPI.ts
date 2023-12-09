import axios from 'axios';

const API_KEY = '782d86e0b2ff3bbb0b829582439018d5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const getTrendingMovies = async () => {
  const res = await axios.get<{ results: MovieType[] }>(`trending/movie/day`, params);
  return res.data.results;
};
export const getMoviesByName = async (movieName: string) => {
  const res = await axios.get<{ results: MovieType[] }>(`/search/movie?query=${movieName}`, params);
  return res.data.results;
};
export type MovieType = {
  id: number;
  title: string;
};

export const getMovieDetails = async (movieId: string) => {
  const res = await axios.get<MovieDetailsType>(`/movie/${movieId}`, params);
  return res.data;
};
export type MovieDetailsType = {
  genres: {
    id: number;
    name: string;
  }[];
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
};

export const getMovieCast = async (movieId: string) => {
  const res = await axios.get<{ cast: MovieCastType[] }>(`movie/${movieId}/credits?`, params);
  return res.data.cast;
};
export type MovieCastType = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
};

export const getMovieReviews = async (movieId: string) => {
  const res = await axios.get<{ results: MovieReviewsType[] }>(`movie/${movieId}/reviews?`, params);
  return res.data.results;
};
export type MovieReviewsType = {
  author: string;
  content: string;
  id: string;
};
