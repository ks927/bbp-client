import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../logo.svg';

interface Props {
  
}

const Home: React.FC<Props> = () => {
    const history = useHistory();

    const onClick = () => {
      history.push("/login");
    }
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to Bran's Plans</p>
            <p>
                <a className="App-link" onClick={onClick}>Login</a> to Pick Your Meals
            </p>
            <p>
                Or <a className="App-link" onClick={onClick}>Create an Account</a> to get started...
            </p>
            <p>{`hello ${process.env.REACT_APP_NAME}, current environment=${process.env.REACT_APP_ENV} test`}</p>
        </div>
    )
}

export default Home;
