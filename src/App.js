import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import Nav from './components/Nav';
import Registro from './components/Registro';

function App() {
  return (
    <Router>
      <Nav />
      <Route path='/' exact component={Login}/>
      <Route path='/registrar' exact component={Registro}/>
      <Route path='/index' exact component={Index}/>
    </Router>
    
  );
}

export default App;
