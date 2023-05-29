import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { GoBackLink } from './GoBack.styled';

const GoBack = () => {
  const location = useLocation();
  const goBackLocationPef = useRef(location.state?.from ?? '/');

  return (
    <GoBackLink to={goBackLocationPef.current}>
      <BsArrowLeft />
      Go back
    </GoBackLink>
  );
};

export default GoBack;
