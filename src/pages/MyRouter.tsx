import React from 'react';
import '../assets/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from '../nav/Nav';
import Login from './Login';
import Menu from './Menu';
import About from './About';

import Home from './Home';

interface Props {
  
}

const MyRouter: React.FC<Props> = () => {

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
