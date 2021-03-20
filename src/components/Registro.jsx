import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function Registro() {
    const [nombre, setNombre] = useState(' ')
    const [correo, setCorreo] = useState(' ')
    const [contrasena, setContrasena] = useState(' ')

    const registro=async(e)=>{
        e.preventDefault()
        const usuario={nombre,correo,contrasena}
        const respuesta=await axios.post('http://localhost:4000/usuario/crear',usuario)
        const mensaje=respuesta.data.mensaje
        if(mensaje!=='Bienvenido'){
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
              })
        }else{
            const token=respuesta.data.token
            const nombre=respuesta.data.nombre
            const idusuario=respuesta.data.id
            sessionStorage.setItem('token',token)
            sessionStorage.setItem('nombre',nombre)
            sessionStorage.setItem('idusuario',idusuario)
            window.location.href='/'
        }

    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="container text-center fa-4x">
                            <i className='fas fa-user-plus'></i>
                        </div>
                        <div className="card-header text-center">
                            <h4>Regsitro de usuario</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={registro}>
                            <div className="form-group">
                                    <input type="text" className="form-control" autoFocus required placeholder="Nombre" onChange=
                                        {e => setNombre(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control"  required placeholder="Correo" onChange=
                                        {e => setCorreo(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" required placeholder="Contraseña" onChange=
                                        {e => setContrasena(e.target.value)} />
                                </div>
                                <input type="submit" className="btn btn-primary btn-block" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
