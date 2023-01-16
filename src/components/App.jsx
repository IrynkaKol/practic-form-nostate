import { Component } from 'react';
import {GlobalStyle} from './App.styled'
import {LoginForm} from './LoginForm/LoginForm'

export class App extends Component {
  render() {
  return (
    <GlobalStyle>
      <LoginForm />
    </GlobalStyle>
  );
};
}