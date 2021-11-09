import React from 'react';
import './App.css';
import './Components/Loginpage.css';
import Signuppage from './Components/Signuppage';
import Loginpage from './Components/Loginpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      
        
      

      <Switch>
        <Route
          exact path="/"
          render={() => <Loginpage/>}
        />
        <Route
          exact path="/Signup"
          render={() => <Signuppage />}
        />

      </Switch>
    </Router>

     
   
  );
}

export default App;
