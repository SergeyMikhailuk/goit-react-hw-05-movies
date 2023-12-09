import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 16px;
  border-bottom: solid 2px red;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const Link = styled(NavLink)`
  color: black;
  font-weight: 600;
  text-decoration: none;

  &.active,
  &:hover {
    color: lightsalmon;
    transition: color 250ms ease-in-out;
  }
`;
