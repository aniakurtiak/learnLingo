import { BtnSubmit, ErrMsg, FieldStyle, FormStyle, Text, Title } from 'components/Modal/Modal.styled';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export const Register = () => {
  const [nameEntered, setNameEntered] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);

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
        onSubmit={values => console.log(values)}
        validationSchema={RegisterSchema}
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
    </div>
  );
};
