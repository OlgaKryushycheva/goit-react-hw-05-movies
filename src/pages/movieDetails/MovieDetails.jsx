import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom/dist';
import { fetchMovieDetails } from 'servises/movie-service';
import GoBack from 'components/goBack/GoBack';
import MovieInfo from 'components/movieInfo/movieInfo';
import { MoviePage } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        if (movieId === data.id) {
          return;
        }
        setMovie(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <MoviePage>
        <GoBack />
        <MovieInfo {...movie} />
      </MoviePage>

      <Suspense fallback={<div>Loading...</div>}>
        {/* намагалася передати props на Review - не вийшло. Як це зробити?*/}
        <Outlet title={movie.title} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
