import React from 'react';

export const LoginForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const {login, password} = e.target.elements;
        console.log(e.target.elements.login)
        console.log(login.value, password.value)
    };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="login">
        Login
        <input type="text" name="login" />
      </label>
      <label htmlFor='password'>Password
      <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
