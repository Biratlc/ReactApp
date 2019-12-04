import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyA11brTwEhXqBxf1ou6P1ygqE-DVa3Ct5U",
  authDomain: "cmps411-2019.firebaseapp.com",
  databaseURL: "https://cmps411-2019.firebaseio.com",
  projectId: "cmps411-2019",
  storageBucket: "cmps411-2019.appspot.com",
  messagingSenderId: "31679925863",
  appId: "1:31679925863:web:39f6c78b6c60a2881bcec2",
  measurementId: "G-Y6335PFFJH"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
