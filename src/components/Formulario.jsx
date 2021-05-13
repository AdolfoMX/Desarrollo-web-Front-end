import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

function Formulario() {

    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [anio, setAnio] = useState('')

    const guardado=async(e)=>{
        e.preventDefault()
        const vehiculo={marca,modelo,anio}
        const respuesta=await Axios.post('/vehiculos/crear_vehiculo',vehiculo)
        const mensaje=respuesta.data.mensaje 
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: mensaje,
            showConfirmButton: true
          })
        window.location.href='/index'
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Vende tu auto</h3>
                        </div>
                        <div className="card-body">
                        <form onSubmit={guardado}>
                            <div className="form-group">
                                    <input type="text" className="form-control" autoFocus required placeholder="Marca" onChange={e => setMarca(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                    <input type="text" className="form-control" autoFocus required placeholder="Modelo" onChange={e => setModelo(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                    <input type="text" className="form-control" autoFocus required placeholder="Año" onChange={e => setAnio(e.target.value)}/>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Formulario