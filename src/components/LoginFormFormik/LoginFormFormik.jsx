import React from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
//import { Input } from './LoginFormFormil.styled';
//import styled from '@emotion/styled'
//import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string.required(),
  password: yup.string.min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
}; // передаем prop initialValues

/*const Input = styled(Field)`
  color: #2a2a2a;
`;*/

export const LoginFormFormik = () => {
  const hendleSubmit = (values, { resetForm }) => {
    console.log(values);
    //console.log(actions)
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={hendleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" />
          <ErrorMessage name="login" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
