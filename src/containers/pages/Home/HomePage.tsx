import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendingMovies, MovieType } from 'api/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieType[]>([]);
  const location = useLocation();

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const movies = await getTrendingMovies();

        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    getMoviesList().then();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} location={location} />
    </>
  );
};

export default HomePage;
