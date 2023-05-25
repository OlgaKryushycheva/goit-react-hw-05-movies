import { Link, useParams } from 'react-router-dom/dist';

const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // запрос на бэк по movieId
  // })

  return <Link to="cast">Cast {movieId}</Link>;
};

export default Cast;
