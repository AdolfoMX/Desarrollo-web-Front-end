import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function Compra() {
    const [vehiculos, setVehiculos] = useState([])

    useEffect(() => {
        obtenerVehiculos()
    }, [])

    const obtenerVehiculos = async () => {
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/listar_vehiculos/',
            {
                headers: { 'autorizacion': token }
            })
        setVehiculos(respuesta.data)
    }

    const buscarma = async (e) => {
        if (e.target.value === '') {
            return obtenerVehiculos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/buscar_vehiculo/' + buscar, {
            headers: { 'autorizacion': token }
        })
        setVehiculos(respuesta.data)
    }
    const buscarmo = async (e) => {
        if (e.target.value === '') {
            return obtenerVehiculos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/buscar_vehiculo_mo/' + buscar, {
            headers: { 'autorizacion': token }
        })
        setVehiculos(respuesta.data)
    }
    const buscaran = async (e) => {
        if (e.target.value === '') {
            return obtenerVehiculos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/buscar_vehiculo_an/' + buscar, {
            headers: { 'autorizacion': token }
        })
        setVehiculos(respuesta.data)
    }
    const buscarcol = async (e) => {
        if (e.target.value === '') {
            return obtenerVehiculos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/buscar_vehiculo_col/' + buscar, {
            headers: { 'autorizacion': token }
        })
        setVehiculos(respuesta.data)
    }
    const buscarkilm = async (e) => {
        if (e.target.value === '') {
            return obtenerVehiculos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/buscar_vehiculo_kilm/' + buscar, {
            headers: { 'autorizacion': token }
        })
        setVehiculos(respuesta.data)
    }
    const buscarkilma = async (e) => {
        if (e.target.value === '') {
            return obtenerVehiculos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/buscar_vehiculo_kilma/' + buscar, {
            headers: { 'autorizacion': token }
        })
        setVehiculos(respuesta.data)
    }
    const buscartras = async (e) => {
        if (e.target.value === '') {
            return obtenerVehiculos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/buscar_vehiculo_tras/' + buscar, {
            headers: { 'autorizacion': token }
        })
        setVehiculos(respuesta.data)
    }
    const buscarprm = async (e) => {
        if (e.target.value === '') {
            return obtenerVehiculos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/buscar_vehiculo_prm/' + buscar, {
            headers: { 'autorizacion': token }
        })
        setVehiculos(respuesta.data)
    }
    const buscarprma = async (e) => {
        if (e.target.value === '') {
            return obtenerVehiculos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/vehiculos/buscar_vehiculo_prma/' + buscar, {
            headers: { 'autorizacion': token }
        })
        setVehiculos(respuesta.data)
    }

    return (
        <div>
            <header className=" bg-primary text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2><i className="fas fa-car"></i> Vehiculos</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/*Barra de busqueda*/}
            <nav className="navbar py-4">
                <div className="container">

                    <div className="col-md-3 ">
                        <h5>Filtros</h5>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 " type="search"
                                placeholder="Marca..." arial-label="Search" onChange={(e) => buscarma(e)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Modelo..." arial-label="Search" onChange={(e) => buscarmo(e)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Año..." arial-label="Search" onChange={(e) => buscaran(e)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Color..." arial-label="Search" onChange={(e) => buscarcol(e)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Kilometraje Min..." arial-label="Search" onChange={(e) => buscarkilm(e)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Kilometraje Max..." arial-label="Search" onChange={(e) => buscarkilma(e)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Transmision..." arial-label="Search" onChange={(e) => buscartras(e)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control  mt-2" type="search"
                                placeholder="Precio Min..." arial-label="Search" onChange={(e) => buscarprm(e)} />
                            <div class="input-group-prepend">
                                <span class="input-group-text mt-2">.000</span>
                                <span class="input-group-text  mt-2">$</span>
                            </div>
                        </div>
                        <div className="input-group">
                            <input className="form-control  mt-2" type="search"
                                placeholder="Precio Max..." arial-label="Search" onChange={(e) => buscarprma(e)} />
                            <div class="input-group-prepend">
                                <span class="input-group-text mt-2">.000</span>
                                <span class="input-group-text  mt-2">$</span>
                            </div>
                        </div>
                        <button className="btn btn-warning mr-1 mt-2"
                            onClick={() => obtenerVehiculos()}>Volver</button>
                    </div>
                </div>
            </nav>

            {/*Mostrar vehiculos*/}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Vehiculos registrados</h4>
                                </div>
                                <table className="table table-responsive-lg table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Año</th>
                                            <th>Color</th>
                                            <th>Kilometraje</th>
                                            <th>Transmision</th>
                                            <th>Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            vehiculos.map((vehiculo, i) => (
                                                <tr key={vehiculo._id}>
                                                    <td>{i + 1}</td>
                                                    <td>{vehiculo.marca}</td>
                                                    <td>{vehiculo.modelo}</td>
                                                    <td>{vehiculo.anio}</td>
                                                    <td>{vehiculo.color}</td>
                                                    <td>{vehiculo.kilometraje}</td>
                                                    <td>{vehiculo.transmision}</td>
                                                    <td>{vehiculo.precio}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Compra