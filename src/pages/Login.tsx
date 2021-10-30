import React from 'react';
import '../assets/App.css';
import { useState } from 'react/cjs/react.development';

interface Props {
  
}

const Login: React.FC<Props> = () => {
  const [name, setName] = useState('');

  const onClick = async (): Promise<void> => {
    fetch('http://localhost:8080/login').then((res) => {
      return res.json()
    }).then((data) => {
      setName(data.data[0].name);
    });
  }
  
  return (
    <div className="App">
        <p>
          Login page
        </p>
    </div>
  );
}

export default Login;
