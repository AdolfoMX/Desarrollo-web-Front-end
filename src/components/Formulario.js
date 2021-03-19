import React, { useState } from 'react'

function Formulario() {
    const [nombre,setnombre] = useState('')
    const [apellido,setapellido] = useState('')

    return (
        <div className="container col-md-5 mt-4">
            <form>
                <h2 className="mb-3">Formulario</h2>
                <div className="mb-3">
                    <input type="text" className="form-control" required placeholder="Nombre" onChange={e=>setnombre(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" required placeholder="Apellido" onChange={e=>setapellido(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default Formulario

