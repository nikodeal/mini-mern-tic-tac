import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from './routes/Home';
import Game from './routes/Game';

function App() {
  return (
    <BrowserRouter>
    <main>
      <Switch>
        <Route path="/" exact>
         <Home />
        </Route>
        <Route path="/game" exact>
        <Game />
        </Route>
        <Redirect to='/' />
      </Switch>
    </main>
  </BrowserRouter>
  );
}

export default App;
