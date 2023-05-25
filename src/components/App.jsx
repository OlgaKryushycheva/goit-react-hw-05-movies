import { Route, Routes } from 'react-router-dom/dist';
import { lazy } from 'react';

import Layout from './layout/Layout';

// import HomePage from 'pages/HomePage';
// import MoviesDetails from 'pages/MovieDetails';
// import MoviesPage from 'pages/MoviesPage';
// import Cast from './cast/Cast';
// import Reviews from './reviews/Revievs';

const HomePage = lazy(() => import('../pages/HomePage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const Cast = lazy(() => import('../components/cast/Cast'));
const Reviews = lazy(() => import('../components/reviews/Reviews'));

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
    </Routes>
  );
};
