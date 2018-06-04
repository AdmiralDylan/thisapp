import React, { Component } from 'react';
import './App.css';
import { Footer } from './Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav } from "./Nav";

class Header extends React.Component { 
    render() {
        return (
            
                

      <div className="Layout">
        <header className="Layout-header">
          <div className="Layout-image"></div>
          <h1 className="Layout-title">Photo App</h1>
          <h2>{this.props.head}</h2>
        </header>
      </div>
      );
    }
}

Header.defaultProps = {
    head: "page"
}

export default Header;