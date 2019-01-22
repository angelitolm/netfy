/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Importing Netfy Component
import Login from './components/authentication/Signin';
import Dashboard from './components/Dashboard'

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={ Login } />
      <Route path="/dashboard" exact component={ Dashboard } />
    </div>
  </Router>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
