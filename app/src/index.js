import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var client_id = process.env.REACT_APP_CLIENT_ID;          // Your client id
var client_secret = process.env.REACT_APP_CLIENT_SECRET;  // Your secret
var redirect_uri = process.env.REACT_APP_REDIRECT_URI;    // Your redirect uri

console.log(client_id)
console.log(client_secret)
console.log(redirect_uri)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
