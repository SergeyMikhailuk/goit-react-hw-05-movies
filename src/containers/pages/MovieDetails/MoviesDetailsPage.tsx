import { Suspense, useEffect, useRef, useState } from 'react';
import { Link as DefaultLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails, MovieDetailsType } from 'api/moviesAPI';
import defaultImg from 'static/images/defaultIcon.png';

import { MovieWrapper, Link, AdditionalWrapper } from './MoviesDetailsPage.styled';

const MoviesDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType>();
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    if (movieDetails) return;

    const getMovie = async () => {
      try {
        const movie = await getMovieDetails(movieId || '');

        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    getMovie().then();
  }, [movieId, movieDetails]);

  return (
    <>
      <Link to={backLink.current}>{'<- Go back'}</Link>
      {movieDetails && (
        <MovieWrapper>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `${defaultImg}`
            }
            alt={movieDetails.title}
            width={300}
          />
          <div>
            <h2>{movieDetails.title}</h2>
            <p>{'User Score: ' + Math.round(movieDetails.vote_average * 10) + '%'}</p>

            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>

            <h3>Genres</h3>
            {movieDetails.genres.map((genre, index) => (
              <span key={genre.id}>
                {genre.name}
                <span>{index !== movieDetails.genres.length - 1 ? ', ' : ''}</span>
              </span>
            ))}
          </div>
        </MovieWrapper>
      )}
      <AdditionalWrapper>
        <p>Additional information</p>
        <ul>
          <li>
            <DefaultLink to={'cast'}>Cast</DefaultLink>
          </li>
          <li>
            <DefaultLink to={'reviews'}>Reviews</DefaultLink>
          </li>
        </ul>
      </AdditionalWrapper>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetailsPage;
