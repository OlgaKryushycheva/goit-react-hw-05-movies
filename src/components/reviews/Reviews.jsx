import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/dist';
import { fetchReview } from 'servises/movie-service';
import { Item, List } from './Reviews.styled';

// намагалася передати props на Review
// через MovieDetails, Outlet - не вийшло.
// Як це зробити

const Reviews = ({ title }) => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReview(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!reviews) return;

  if (reviews.length === 0) {
    return (
      <p>
        `We don't have any reviews for {title}. Would you like to write one?`
      </p>
    );
  }

  return (
    <List>
      {reviews.map(review => (
        <Item key={review.id}>
          <h5>Author: {review.author}</h5>
          <p>{review.content}</p>
        </Item>
      ))}
    </List>
  );
};

export default Reviews;
