import { signOut } from 'firebase/auth';
import { auth, isCurrentUser } from '../../../firebase';
import {
  AuthContainer,
  LogBtn,
  LogInSvg,
  NavList,
  TextItem,
} from '../AuthNav/AuthNav.styled';

export const AuthNavOut = () => {
  const currentUser = auth.currentUser;
  console.log(currentUser.displayName)

const handleLogOUt = () => {
    signOut(auth)
    .then(() => console.log("success"))
    .catch((e) => console.log(e));
}    

  return (
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
  );
};
