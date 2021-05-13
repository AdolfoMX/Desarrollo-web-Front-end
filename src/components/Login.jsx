import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function Login() {
    const [correo, setCorreo] = useState(' ')
    const [contrasena, setContrasena] = useState(' ')

    const login=async(e)=>{
        e.preventDefault()
        const usuario={correo,contrasena}
        const respuesta=await axios.post('/usuario/login',usuario)
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
            window.location.href='/index'
        }

    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="container text-center fa-4x">
                            <i className='fas fa-user'></i>
                        </div>
                        <div className="card-header text-center">
                            <h4>Inicio de Sesion</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="form-group">
                                    <input type="email" className="form-control" autoFocus required placeholder="Correo" onChange=
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
