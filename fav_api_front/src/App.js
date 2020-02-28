import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './App.css';
import Search from './Search.js';
import Favorites from './Favorites.js';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/" component={Favorites} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}
