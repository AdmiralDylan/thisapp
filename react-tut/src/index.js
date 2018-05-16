import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Login from './Login';
import { BrowserRouter, Route, Link } from 'react-router-dom'

ReactDOM.render((
<BrowserRouter>
  <App /> 
</BrowserRouter> ),
  document.getElementById('root')
);