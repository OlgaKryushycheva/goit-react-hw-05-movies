import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/dist';
import { fetchCast } from 'servises/movie-service';
import { Item, List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!cast) return;

  return (
    <List>
      {cast.map(el => (
        <Item key={el.id}>
          <img
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                : new URL('../../images/noPhoto.png', import.meta.url)
            }
            alt="Name"
            width="75px"
            height="100px"
          />
          <p>{el.name}</p>
          <p>Character: {el.character}</p>
        </Item>
      ))}
    </List>
  );
};

export default Cast;
