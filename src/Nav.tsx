import React from 'react';
import './App.css';
import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

interface Props {
  
}

const Nav: React.FC<Props> = () => {
  const [name, setName] = useState('');

  return (
    <div>
        <ul className="nav">
            <Link to="/menu">
                <li className="nav-items">Meals</li>
            </Link>
            <Link to="/about">
                <li className="nav-items">About</li>
            </Link>
            <Link to="/login">
                <li className="nav-items">Login</li>
            </Link>

        </ul>
    </div>
  );
}

export default Nav;
