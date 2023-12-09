import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast, MovieCastType } from 'api/moviesAPI';
import defaultImg from 'static/images/defaultIcon.png';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState<MovieCastType[]>([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castRes = await getMovieCast(movieId || '');

        setCastList(castRes);
      } catch (error) {
        console.error(error);
      }
    };

    getCast().then();
  }, [movieId]);

  return (
    <>
      {castList?.length && (
        <ul>
          {castList.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : `${defaultImg}`
                }
                width={100}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
