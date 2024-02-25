import { NavLinkMenu, NavListMenu } from 'components/Layout/Layout.styled';
import {
  AuthContainer,
  LogBtn,
  LogInSvg,
  NavList,
  RegBtn,
} from './AuthNav.styled';

export const AuthNavIn = ({ onClickLogin, onClickRegister }) => {
  return (
    <>
      <NavListMenu>
        <li>
          <NavLinkMenu to="/">Home</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/teatchers">Teatchers</NavLinkMenu>
        </li>
      </NavListMenu>
      <AuthContainer>
        <NavList>
          <li>
            <LogBtn type="button" onClick={onClickLogin}>
              <LogInSvg alt="log in" />
              Log in
            </LogBtn>
          </li>
          <li>
            <RegBtn type="button" onClick={onClickRegister}>
              Registration
            </RegBtn>
          </li>
        </NavList>
      </AuthContainer>
    </>
  );
};
