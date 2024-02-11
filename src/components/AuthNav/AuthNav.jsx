import {
  AuthContainer,
  LogBtn,
  LogInSvg,
  NavList,
  RegBtn,
} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <NavList>
        <li>
          <LogBtn>
            <LogInSvg alt="log in"/>
            Log in
          </LogBtn>
        </li>
        <li>
          <RegBtn>Registration</RegBtn>
        </li>
      </NavList>
    </AuthContainer>
  );
};
