import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
