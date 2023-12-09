import { Link } from 'react-router-dom';

import { MovieType } from 'api/moviesAPI';

const MoviesList = ({ movies, location }: MoviesListType) => (
  <ol>
    {!!movies?.length &&
      movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
  </ol>
);

export default MoviesList;

type MoviesListType = {
  movies: MovieType[];
  location: any;
};
