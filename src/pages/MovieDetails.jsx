import Cast from 'components/cast/Cast';
import Reviews from 'components/reviews/Reviews';
import { Suspense } from 'react';
import { useRef } from 'react';
// import { useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom/dist';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const goBackLocationPef = useRef(location.state?.from ?? '/');
  // console.log(location);
  // console.log(goBackLocationPef);

  // useEffect(() => {
  // запрос на бэк по movieId
  // state
  // isLoading
  // error
  // })

  return (
    <>
      <div>
        <Link to={goBackLocationPef.current}>Go back</Link>

        <h2>MoviesDetails</h2>
        <p>info {movieId}</p>
        <ul>
          <li>
            <Cast />
          </li>
          <li>
            <Reviews />
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
