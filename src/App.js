// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic to handle login, set loggedIn to true
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic to handle logout, set loggedIn to false
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard loggedIn={loggedIn} onLogout={handleLogout} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
