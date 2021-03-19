import React from 'react';
import './App.css';
import logo from './logo.svg';
import { useState } from 'react/cjs/react.development';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Login from './Login';
import Menu from './Menu';
import About from './About';
import Nav from './Nav';

interface Props {
  
}

const MyRouter: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const onClick = () => {
    history.push("/login");
  }

  return (
      <div>
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    </div>
  );
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
                Or <a className="App-link" onClick={onClick}>Create an Account</a> Already
            </p>
        </div>
    )
}

export default MyRouter;
