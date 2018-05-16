import React, { Component } from 'react';
import './App.css';
import { Nav } from './Nav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Footer } from './Footer';
import Home from './Home';
import Login from './Login';
import Main from './Main';

const App = () => (
<div>
    <Main />
    <Nav />
</div>
);


export default App;