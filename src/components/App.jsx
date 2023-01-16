import { Component } from 'react';
import {GlobalStyle} from './App.styled'
//import {LoginForm} from './LoginForm/LoginForm'
import {LoginFormFormik } from './LoginFormFormik/LoginFormFormik'
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';

export class App extends Component {
  render() {
  return (
    <GlobalStyle>
      {/*<LoginForm />*/}
      <LoginFormFormik />

      <ProductReviewForm />
    </GlobalStyle>
  );
};
}