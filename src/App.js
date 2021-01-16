import React from 'react';
import Provider from './context/Provider';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
