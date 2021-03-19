/**
 * TODO: router, login, profile page, meal history, personal meal history
 * TODO: Material-UI
 */

import React from 'react';
import './App.css';
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom';
import MyRouter from './MyRouter';

interface Props {
}

const App: React.FC<Props> = (props: Props) => {

  return (
    <div className="App">
      <MyRouter />
        {/* <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Bran's Plans</p>
          <p>
            <a className="App-link" onClick={onClick}>Login</a> to Pick Your Meals
          </p>
          <p>
            Or <a className="App-link" onClick={onClick}>Create an Account</a> Already
          </p> */}
    </div>
  );
}

export default App;
