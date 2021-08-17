import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Edit from './views/Edit';
import Update from './views/Update';
import './App.css';
//this is a test 223



function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products/"/>
        <Edit path="/products/:id"/>
        <Update path="/products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
