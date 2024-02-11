import { NavLink } from 'react-router-dom';
import { AuthContainer, NavList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <NavList>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
      </NavList>
    </AuthContainer>
  );
};
