import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';

const App: React.FC = () => {
  const [name, setName] = useState('');

  const onClick = () => {
    fetch('http://localhost:8080/login').then((res) => {
      console.log('fetchingggg', res)
      return res.json()
    }).then((data) => {
      console.log('aadfasdfadsdaatttaaaa', data.data[0].name)
      setName(data.data[0].name);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Bran's Plans, {name}
        </p>
        <a className="App-link" onClick={onClick}>
          ok whatever
        </a>
      </header>
    </div>
  );
}

export default App;
