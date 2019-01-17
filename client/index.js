import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route  } from 'react-router-dom';

import App from './App';
import Signin from './components/authentication/Signin';

ReactDOM.render(
  <Router>
    <div>
        <Route path="/" exact component={App} />
        <Route path="/signin" exact component={Signin} />
    </div>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
