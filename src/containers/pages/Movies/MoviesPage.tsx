import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import MoviesList from 'components/MoviesList';
import { getMoviesByName, MovieType } from 'api/moviesAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const location = useLocation();

  const updateQueryString = (query: string) => {
    const queryParams = query !== '' ? { query } : undefined;
    setSearchParams(queryParams);
  };

  useEffect(() => {
    if (!movieName) return;

    const getMovie = async () => {
      try {
        const moviesRes = await getMoviesByName(movieName);
        console.log(moviesRes);
        setMovies(moviesRes);
      } catch (e) {
        console.error(e);
      }
    };

    getMovie().then();
  }, [movieName]);

  return (
    <>
      <Formik
        initialValues={{ query: movieName }}
        onSubmit={({ query }, { setSubmitting, resetForm }) => {
          updateQueryString(query);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="query" />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </Form>
        )}
      </Formik>
      <MoviesList movies={movies} location={location} />
    </>
  );
};

export default MoviesPage;
