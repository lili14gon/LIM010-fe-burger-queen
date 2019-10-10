import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDCm5JWgQ3Vm4X2a7Q7ZCz6aqOp1gHcTzI",
    authDomain: "burger-queen-react-bls.firebaseapp.com",
    databaseURL: "https://burger-queen-react-bls.firebaseio.com",
    projectId: "burger-queen-react-bls",
    storageBucket: "burger-queen-react-bls.appspot.com",
    messagingSenderId: "658478814346",
    appId: "1:658478814346:web:f4bf5219e89878fd114973"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
