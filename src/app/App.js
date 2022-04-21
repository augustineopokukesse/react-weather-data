import React from 'react';
import Weather from '../features/weather/Weather';
import Login from '../features/login/Login';
import Signup from '../features/login/signup/Signup';
import '../App.css'; 
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
            <Route path='/weather'>
              <Weather />
              <Link to='/'>Log out</Link>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
    
  )
}

export default App;
