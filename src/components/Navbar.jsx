import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const [menu,setMenu]=useState(false)
    
    useEffect(() => {
        if(sessionStorage.getItem('token')){
            setMenu(true)
        }
    }, [])

    const salir = () => {
        sessionStorage.clear()
        window.location.href = '/'
    }
    return (
        <nav className="navbar navbar-expand-md px-md-3" style={{backgroundColor: "black"}}>
            <Link className="navbar-brand" to="/">
                <div>
                    <app-svg Linkpp-svg display="flex" width="5.5rem" xsheight="24px" xswidth="88px">
                        <div style={{ display: "flex", height: "auto", width: "5.5rem", fill: "white" }}>
                            <svg viewBox="0 0 7774 2048">
                                <path d="M7296.82.052L6752.798 1024l544.022 1023.948h477.424L7239.034 1024 7774.244.052zm-1130.746 0v1705.534L5275.298.052 4205.476 2047.954h470.514l599.916-1147.71 254.406 487.47h-254.406l-178.412 341.108h611.236l166.464 319.132h726.816V.052h-435.96zm-1767.734 0l-599.916 1147.71L3199.138.052h-470.514l1069.822 2047.902L4868.268.052H4398.39zm-2076.172 0l-892.04 1707.424L1072.7 1024 1607.91.052h-477.424L586.464 1024l544.022 1023.948h593.006l166.464-319.132h611.236l-178.412-341.108h-254.406l254.406-487.47 598.678 1147.71h470.514L2322.15.046zM-.244 2047.952h435.33V.05H-.244z"></path>
                            </svg>
                        </div>
                    </app-svg>
                </div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="btn btn-primary" style={{width: "13rem", margin: "1rem"}} to="/compra_un_auto">Comprar un auto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-primary" style={{width: "13rem", margin: "1rem"}} to="/">Aplicar a crédito</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-primary" style={{width: "13rem", margin: "1rem"}} to="/vende_tu_auto">Cambia o vende tu auto</Link>
                    </li>
                </ul>
            </div>
            {
                menu?
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link" to="/index">
                        <i className='fas fa-user'></i> 
                        Bienvenido {sessionStorage.getItem('nombre')}</Link>
                    <Link className="nav-link" to="/" onClick={() => salir()}>
                        <i className='fas fa-user-times'></i> Salir </Link>
                   
                </div>
            </div>
            :
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <Link className="nav-link" to="/iniciar">
                        <i className='fas fa-user'></i> 
                        Iniciar </Link>
                        <Link className="nav-link" to="/registrar">
                            <i className='fas fa-user-plus'></i> Registrar</Link>
                    </div>
                </div>}
        </nav>
    );
}

export default Navbar