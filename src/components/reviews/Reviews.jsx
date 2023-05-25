import { Link, useParams } from 'react-router-dom/dist';

const Reviews = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // запрос на бэк по movieId
  // })

  return <Link to="reviews">Reviews {movieId}</Link>;
};

export default Reviews;
