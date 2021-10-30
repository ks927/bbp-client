import React from 'react';
import '../assets/App.css';
import { Link } from 'react-router-dom';

interface Props {
  
}

const Nav: React.FC<Props> = () => {
  return (
    <div>
        <ul className="nav">
            <Link to="/">
                <li className="nav-items">Home</li>
            </Link>
            <Link to="/menu">
                <li className="nav-items">Menu</li>
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
