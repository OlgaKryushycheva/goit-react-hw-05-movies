// import { MovieInfo, MoviePage, Info } from './MovieDetails.styled';
import { Link } from 'react-router-dom/dist';
import { MovieStyled, Descr } from './movieInfo.styled';

const MovieInfo = ({
  title,
  poster_path,
  release_date,
  vote_average,
  genres,
  overview,
}) => {
  const releaseYear = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const genresList = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <MovieStyled>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="Poster"
          width="200px"
          height="300px"
        />

        <Descr>
          <h2>
            {title} ({releaseYear})
          </h2>
          <p>User score {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresList}</p>
        </Descr>
      </MovieStyled>

      <h5>Additional infirmation</h5>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieInfo;
