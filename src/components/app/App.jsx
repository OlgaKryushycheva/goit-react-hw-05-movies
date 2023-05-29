import { Route, Routes } from 'react-router-dom/dist';
import { lazy } from 'react';

import Layout from 'components/layout/Layout';
const HomePage = lazy(() => import('pages/homePages/HomePage'));
const MovieDetails = lazy(() => import('pages/movieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('pages/moviesPages/MoviesPage'));
const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
