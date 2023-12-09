import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';

const Home = lazy(() => import('containers/pages/Home'));
const Movies = lazy(() => import('containers/pages/Movies'));
const MovieDetails = lazy(() => import('containers/pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

const routing = () => (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="movies" element={<Movies />} />
    <Route path="movies/:movieId" element={<MovieDetails />}>
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);

export default routing;
