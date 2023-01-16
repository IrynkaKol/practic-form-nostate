import { Component } from 'react';
import {GlobalStyle} from './App.styled'
//import {LoginForm} from './LoginForm/LoginForm'
import {LoginFormFormik } from './LoginFormFormik/LoginFormFormik'

export class App extends Component {
  render() {
  return (
    <GlobalStyle>
      {/*<LoginForm />*/}
      <LoginFormFormik />
    </GlobalStyle>
  );
};
}