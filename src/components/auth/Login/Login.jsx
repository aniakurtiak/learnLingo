import { Formik } from 'formik';
import { BtnSubmit, ErrMsg, FieldStyle, FormStyle, Text, Title } from '../../Modal/Modal.styled';
import { useState } from 'react';
import * as Yup from 'yup';
import { AuthProvider } from 'components/auth/AuthProvider/AuthProvider';


export const Login = () => {
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
  });


  return (
    <div>
      <AuthProvider/>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema = {LoginSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <FormStyle onSubmit={handleSubmit}>
            <FieldStyle
              type="email"
              name="email"
              placeholder={emailEntered ? '' : 'Email'}
              onFocus={() => setEmailEntered(true)}
            />
              <ErrMsg name="email" component="div"/>
            <FieldStyle
              type="password"
              name="password"
              placeholder={passwordEntered ? '' : 'Password'}
              onFocus={() => setPasswordEntered(true)}
            />
              <ErrMsg name="password" component="div"/>
            <BtnSubmit type="submit">Log in</BtnSubmit>
          </FormStyle>
        )}
      </Formik>
    </div>
  );
};
