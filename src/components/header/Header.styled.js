import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  gap: 15px;

  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  border-bottom: 1px solid black;
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);

  list-style: none;
  font-size: 20px;
  font-weight: 900;
`;

export const StyledLink = styled(NavLink)`
  color: #212121;
  list-style: none;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
