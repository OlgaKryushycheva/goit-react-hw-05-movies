import { Link, useLocation } from 'react-router-dom/dist';

import movies from '../../data.json';
// const movies = [
//   { id: '11', name: '1' },
//   { id: '22', name: '2' },
//   { id: '33', name: '3' },
// ];

// const data = ['1', '2', '3', '4'];

const MoviesList = () => {
  const location = useLocation();
  // console.log(location);

  return (
    <ul>
      {movies.map(movie => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          state={{ from: location }}
        >
          <li>{movie.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
