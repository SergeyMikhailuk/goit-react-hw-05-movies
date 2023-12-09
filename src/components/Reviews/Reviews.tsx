import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews, MovieReviewsType } from 'api/moviesAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<MovieReviewsType[]>([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const reviewsRes = await getMovieReviews(movieId || '');

        setReviews(reviewsRes);
      } catch (error) {
        console.error(error);
      }
    };

    getCast().then();
  }, [movieId]);

  return (
    <>
      {reviews?.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p dangerouslySetInnerHTML={{ __html: review.content }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
