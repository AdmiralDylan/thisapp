import React, { Component } from 'react';
import './App.css';
import { Footer } from './Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Home extends Component {

    render() {
        return (
          <div className="Layout">
        
            <header className="Layout-header">
              <div className="Layout-image"></div>
              <h1 className="Layout-title">Photo App</h1>
            </header>
          </div>
      );
    }
}

