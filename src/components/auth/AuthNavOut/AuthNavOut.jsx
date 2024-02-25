import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import {
  AuthContainer,
  LogBtn,
  LogInSvg,
  NavList,
  TextItem,
} from '../AuthNav/AuthNav.styled';
import { NavLinkMenu, NavListMenu } from 'components/Layout/Layout.styled';

export const AuthNavOut = () => {
  const currentUser = auth.currentUser;
  console.log(currentUser.displayName);

  const handleLogOUt = () => {
    signOut(auth)
      .then(() => console.log('success'))
      .catch(e => console.log(e));
  };

  return (
    <>
      <NavListMenu>
        <li>
          <NavLinkMenu to="/">Home</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/teatchers">Teatchers</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/favorites">Favorites</NavLinkMenu>
        </li>
      </NavListMenu>
      <AuthContainer>
        <NavList>
          <TextItem>{currentUser.displayName}</TextItem>
          <li>
            <LogBtn onClick={handleLogOUt}>
              Log out
              <LogInSvg alt="log out" />
            </LogBtn>
          </li>
        </NavList>
      </AuthContainer>
    </>
  );
};
