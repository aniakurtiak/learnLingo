import {
  AuthContainer,
  LogBtn,
  LogInSvg,
  NavList,
  RegBtn,
} from './AuthNav.styled';

export const AuthNav = ({onClickLogin, onClickRegister}) => {
  return (
    <AuthContainer>
      <NavList>
        <li>
          <LogBtn type='button' onClick={onClickLogin}>
            <LogInSvg alt="log in"/>
            Log in
          </LogBtn>
        </li>
        <li>
          <RegBtn type="button" onClick={onClickRegister} >Registration</RegBtn>
        </li>
      </NavList>
    </AuthContainer>
  );
};
