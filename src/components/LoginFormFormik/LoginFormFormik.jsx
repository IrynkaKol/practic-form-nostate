import React from 'react';
import { Field, Formik, Form } from 'formik';
//import { Input } from './LoginFormFormil.styled';
import {Input} from '@emotion/react'

const initialValues = {
  login: '',
  password: '',
}; // передаем prop initialValues

const Input = styled.Field`
font-size: 80px;
color: red;
`

export const LoginFormFormik = () => {
  const hendleSubmit = (values, { resetForm }) => {
    console.log(values);
    //console.log(actions)
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
