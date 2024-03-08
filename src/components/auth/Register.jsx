import {
  BtnSubmit,
  ErrMsg,
  FieldStyle,
  FormStyle,
  Text,
  Title,
} from 'components/Modal/Modal.styled';
import { auth} from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { AuthProvider } from './AuthProvider';
import toast from 'react-hot-toast';

export const Register = ({close}) => {
  const [nameEntered, setNameEntered] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);

  const handleSubmit = values => {
    const {email, password } = values;

    createUserWithEmailAndPassword(auth,  email, password)
      .then(userCredential => {
        close();
      })
      .catch(err => {
        toast.error(" Sorry, Something went wrong! Try agani later!")
      });
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
  });

  return (
    <div>
      <Title>Registration</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Text>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <FormStyle>
            <FieldStyle
              name="name"
              placeholder={nameEntered ? '' : 'Name'}
              onFocus={() => setNameEntered(true)}
            />
            <ErrMsg name="name" component="div" />
            <FieldStyle
              type="email"
              name="email"
              placeholder={emailEntered ? '' : 'Email'}
              onFocus={() => setEmailEntered(true)}
            />
            <ErrMsg name="email" component="div" />
            <FieldStyle
              type="password"
              name="password"
              placeholder={passwordEntered ? '' : 'Password'}
              onFocus={() => setPasswordEntered(true)}
            />
            <ErrMsg name="password" component="div" />
            <BtnSubmit type="submit">Sign up</BtnSubmit>
          </FormStyle>
        )}
      </Formik>
      <AuthProvider close={close}/>
    </div>
  );
};
