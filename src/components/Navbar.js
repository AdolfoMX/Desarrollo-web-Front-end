import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black" style={{backgroundColor: "black", width: "100%", padding: "0"}}>
                <div className="container-fluid px-md-3">
                    <a className="navbar-brand" href="https://github.com">Kavak</a>
                
                    <div className="navbar-buttons d-none d-md-flex">
                        <a className="btn btn-primary" style={{width: "13rem", margin: "1rem"}} href="https://www.kavak.com/compra-de-autos">Comprar un auto</a>
                        <a className="btn btn-primary" style={{width: "13rem", margin: "1rem"}} href="https://www.kavak.com/financiamiento-de-autos">Aplicar a crédito</a>
                        <a className="btn btn-primary" style={{width: "13rem", margin: "1rem"}} href="https://www.kavak.com/vender-mi-auto">Cambia o vende tu auto</a>        
                    </div>
                
                </div>
            </nav>
        </div>
    );
}

export default Navbar