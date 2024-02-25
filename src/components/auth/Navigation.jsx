import { useEffect, useState } from 'react';
import { AuthNavOut } from './AuthNavOut/AuthNavOut';
import { AuthNav } from './AuthNav/AuthNav';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

export const Navigation = ({ onClickLogin, onClickRegister }) => {
  const [authUser, setAuthUset] = useState(auth.currentUser);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUset(user);
      } 
      else {
        setAuthUset(null);
      }
    });
    return () => {
      listen();
    };
  }, []);


  return  authUser ? (
        <AuthNavOut />
      ) : (
        <AuthNav
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
        />
      )
};
