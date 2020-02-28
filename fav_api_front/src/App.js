import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './App.css';
import Search from './Search.js';
import Favorites from './Favorites.js';
import Login from './Login.js';
import PrivateRoute from './PrivateRoute.js';

export default class App extends React.Component {
  state = { user: null };

  setUser = user => {
    this.setState({ user: user.body });
  }
  
  render() {
  return (
    <div className="App">
      <h1>Favorite Recipes</h1>
      <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={Search} user={this.state.user}/>
            <PrivateRoute path="/favorites" component={Favorites} user={this.state.user}/>
            <Route exact path="/login" render={(props) => 
              <Login {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

// PrivateRoute allows for users to not be able to access pages unless they are logged in