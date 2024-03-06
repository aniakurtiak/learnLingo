import { useEffect, useState } from 'react';
import { AuthNavOut } from './AuthNavOut/AuthNavOut';
import { AuthNavIn } from './AuthNavIn/AuthNavIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

export const Navigation = ({ onClickLogin, onClickRegister, authUser }) => {
  // const [authUser, setAuthUset] = useState(auth.currentUser);

  const currentUserId = authUser ? authUser.uid : null;
console.log(currentUserId);

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, user => {
  //     if (user) {
  //       setAuthUset(user);
  //     } 
  //     else {
  //       setAuthUset(null);
  //     }
  //   });
  //   return () => {
  //     listen();
  //   };
  // }, []);


  return  authUser ? (
        <AuthNavOut/>
      ) : (
        <AuthNavIn
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
        />
      )
};
