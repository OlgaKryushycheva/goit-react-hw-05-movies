import { HeaderStyle, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <li>
        <StyledLink to="">Home </StyledLink>
      </li>
      <li>
        <StyledLink to="movies">Movies</StyledLink>
      </li>
    </HeaderStyle>
  );
};

export default Header;
