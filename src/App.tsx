/**
 * TODO: router, login, profile page, meal history, personal meal history
 * TODO: Material-UI
 */

import React from 'react';
import './assets/App.css';
import MyRouter from './pages/MyRouter';

interface Props {
}

const App: React.FC<Props> = (props: Props) => {

  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

export default App;
