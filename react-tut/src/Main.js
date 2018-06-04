import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
    <Route exact path='/Home' component={Home}/>
      <Route path='/Login' component={Login}/>
    </Switch>
  </main>
)

export default Main