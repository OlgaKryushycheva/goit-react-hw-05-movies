import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom/dist';
import { fetchMovieDetails } from 'servises/movie-service';
import GoBack from 'components/goBack/GoBack';
import { MovieInfo, MoviePage, Info } from './MovieDetails.styled';

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

  const { title, release_date, vote_average, genres, overview } = movie;
  const releaseYear = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);

  return (
    <>
      <MoviePage>
        <GoBack />
        <MovieInfo>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Poster"
            width="200px"
            height="300px"
          />

          <Info>
            <h2>
              {title} ({releaseYear})
            </h2>
            <p>User score {userScore}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          </Info>
        </MovieInfo>

        <h5>Additional infirmation</h5>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </MoviePage>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet movie={title} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
