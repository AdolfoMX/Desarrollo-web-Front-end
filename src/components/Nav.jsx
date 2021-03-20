import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav() {
    const salir=()=>{
        sessionStorage.clear()
        window.location.href='/'
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Kavak</Link>
            <button className="navbar-toggler" type="button" 
            data-toggle="collapse" data-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link" to="/"> 
                    <i className='fas fa-user'></i> Bienvenido </Link>
                    <Link className="nav-link" to="/" onClick={()=>salir()}>
                        <i className='fas fa-user-times'></i> Salir </Link>
                    <Link className="nav-link" to="/registrar"><i className='fas fa-user-plus'></i> Registrar</Link>
                </div>
            </div>
        </nav>
    )
}
