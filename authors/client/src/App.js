import React from 'react';
import { Router } from '@reach/router';
import CreateAuthor from './components/CreateAuthor';
import AuthorsList from './components/AuthorsList';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <div style={{marginLeft: "21px"}} className="container pt-3">
        <h1>Favorite authors</h1>
      </div>
      <Router>
        <CreateAuthor path="/new" />
        <AuthorsList path="/" />
        <EditAuthor path="/edit/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
