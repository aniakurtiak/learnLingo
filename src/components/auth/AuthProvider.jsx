import {signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase';
import { BtnGoogleSvg, BtnSubmitGoogle } from 'components/Modal/Modal.styled';
import toast from 'react-hot-toast';

export const AuthProvider = ({close}) => {

  function handleSubmitwithGoogle() {
    signInWithPopup(auth, googleAuthProvider)
      .then(userCredential => {
        close();
      })
      .catch(err => {
        toast.error(" SORRY, COULDN'T FIND YOUR ACCOUNT")
      });
  }

  return (
    <BtnSubmitGoogle onClick={handleSubmitwithGoogle}>
    <BtnGoogleSvg alt="Google" />
    Continue with Google
  </BtnSubmitGoogle>
  )
};


