import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from '../../../firebase';

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(maybeUser => {
      
      if (maybeUser !== null) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, googleAuthProvider)
        .then(credetnials => setUser(credetnials.user))
        .catch(err => console.error(err));
    });

    return unsub;
  }, [auth]);

  return user !== null ? <>{user.displayName}</> : <>loading...</>;
};
