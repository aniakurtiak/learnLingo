import {signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase';
import { BtnGoogleSvg, BtnSubmitGoogle } from 'components/Modal/Modal.styled';

export const AuthProvider = ({close}) => {

  function handleSubmitwithGoogle() {
    signInWithPopup(auth, googleAuthProvider)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('User login successfully:', user);
        close();
      })
      .catch(err => {
        console.log("SORRY, COULDN'T FIND YOUR ACCOUNT:", err.message);
      });
  }

  return (
    <BtnSubmitGoogle onClick={handleSubmitwithGoogle}>
    <BtnGoogleSvg alt="Google" />
    Continue with Google
  </BtnSubmitGoogle>
  )
};


