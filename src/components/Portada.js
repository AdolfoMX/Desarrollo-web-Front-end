import React from 'react'
import baner from '../images/baner.png';
function Portada() {
    return (
        <div className="container-fluid">
            <h1>Transformando la compra y venta de autos seminuevos</h1>
                    <img src={baner} className="App-baner" alt="baner" height={325} />
                    
        </div>
    );
}
export default Portada;