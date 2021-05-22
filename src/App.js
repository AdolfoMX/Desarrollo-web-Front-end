import React from 'react'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Formulario from './components/Formulario.jsx';
import Index from './components/Index.jsx';
import Registro from './components/Registro';
import Login from './components/Login';
import Actualizar from './components/Actualizar.jsx';
import Compra from './components/Compra.jsx';
import Tabla from './components/Tabla.jsx';
import Portada from './components/Portada.js';

const estaLogeado=()=>{
  const token=sessionStorage.getItem('token')
  if(token){
    return true
  }else{
    return false
  }
}

const Myroute=(props)=>{
  return estaLogeado()? <Route {...props}/>: <Redirect to='/' />
}

const Publicroute=(props)=>{
  return estaLogeado()? <Redirect to='/index' />:<Route {...props}/>
}

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route path='/' exact component={Portada}/>
        <Route path='/vende_tu_auto' exact component={Formulario}/>
        <Myroute path='/index' exact component={Index}/>
        <Publicroute path='/registrar' exact component={Registro}/>
        <Publicroute path='/iniciar' exact component={Login}/>
        <Myroute path='/editar/:id' exact component={Actualizar}/>
        <Route path='/compra_un_auto' exact component={Compra}/>
        <Route path='/tabla' exact component={Tabla}/>
      </Router>
    </div>
  );
}

export default App;