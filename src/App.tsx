import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";



import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <Link style={{margin:'10px'}} to="/signup">SignUp</Link>
        </div>

        <Switch>
          <Route  path="/signup">
            <SignUp/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
