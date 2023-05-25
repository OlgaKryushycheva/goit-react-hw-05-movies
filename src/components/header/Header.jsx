import { NavLink } from 'react-router-dom/dist';

// const StyledLink = styled(NavLink)`
//   color: #212121;

//   &.active {
//     color: red;
//   }
// `;

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
    </ul>
  );
};

export default Header;
