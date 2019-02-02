import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


firebase.initializeApp({
    apiKey: "AIzaSyA0kVTCds3crVEDySiGIA644Np45a1xtc0",
    authDomain: "reactdemo-f093b.firebaseapp.com",
    databaseURL: "https://reactdemo-f093b.firebaseio.com",
    projectId: "reactdemo-f093b",
    storageBucket: "reactdemo-f093b.appspot.com",
    messagingSenderId: "1053012897993"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
