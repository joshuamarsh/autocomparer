import React from 'react';
import './styles/main.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Componenets
import { AppHeader } from './components/AppHeader';
import { Home } from './components/Home';
import { AdvertsResults } from './components/AdvertsResults';

function App() {
  return (
    <div className="App">
      <AppHeader />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/results" exact component={AdvertsResults} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
