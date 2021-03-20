import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Formulario from './components/Formulario';
import Login from './components/Login';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Route path='/' exact component={Login}/>
    </Router>
    
  );
}

export default App;
