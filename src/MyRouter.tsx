import React from 'react';
import './App.css';
// import logo from './logo.svg';
import { useState } from 'react/cjs/react.development';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Login from './Login';
import Menu from './Menu';
import About from './About';
import Nav from './Nav';
import Home from './Home';

interface Props {
  
}

const MyRouter: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const history = useHistory();

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

export default MyRouter;
