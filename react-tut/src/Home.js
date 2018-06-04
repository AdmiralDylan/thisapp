import React, { Component } from 'react';
import './App.css';
import { Footer } from './Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Home extends Component {

    render() {
        return (
            
          <div className="Layout">
            <h1>Welcome Home</h1>
          </div>
      );
    }
}

