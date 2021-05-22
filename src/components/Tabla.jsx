import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";




const columns = [
    {
        dataField: "marca",
        text: "Marca",
        sort: true
    },
    {
        dataField: "modelo",
        text: "Modelo",
        sort: true
    },
    {
        dataField: "anio",
        text: "Anio",
        sort: true
    },
    {
        dataField: "color",
        text: "Color",
        sort: true
    },
    {
        dataField: "kilometraje",
        text: "Kilometraje",
        sort: true
    },
    {
        dataField: "transmision",
        text: "Transmision",
        sort: true
    },
    {
        dataField: "precio",
        text: "Precio",
        sort: true
    },

];




function Tabla() {

    const [vehiculos, setVehiculos] = useState([])
    const [marcab, setMarcab] = useState('')
    const [modelob, setModelob] = useState('')
    const [aniob, setAniob] = useState('')
    const [colorb, setColorb] = useState('')
    const [kilbm, setKilbm] = useState('')
    const [kilbma, setKilbma] = useState('')
    const [trasb, setTrasb] = useState('')
    const [precbm, setPrecbm] = useState('')
    const [precbma, setPrecbma] = useState('')

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
    const filtrars = async () => {
        if (marcab !== '') {
            const respuesta3 = await Axios.get('/vehiculos/buscar_vehiculo/' + marcab)
            setVehiculos(respuesta3.data)
        }
        if (modelob !== '') {
            const respuesta2 = await Axios.get('/vehiculos/buscar_vehiculo_mo/' + modelob)
            setVehiculos(respuesta2.data)
        }
        if (aniob !== '') {
            const respuesta = await Axios.get('/vehiculos/buscar_vehiculo_an/' + aniob)
            setVehiculos(respuesta.data)
        }
        if (colorb !== '') {
            const respuesta4 = await Axios.get('/vehiculos/buscar_vehiculo_col/' + colorb)
            setVehiculos(respuesta4.data)
        }
        if (kilbm !== '') {
            const respuesta5 = await Axios.get('/vehiculos/buscar_vehiculo_kilm/' + kilbm)
            setVehiculos(respuesta5.data)
        }
        if (kilbma !== '') {
            const respuesta6 = await Axios.get('/vehiculos/buscar_vehiculo_kilma/' + kilbma)
            setVehiculos(respuesta6.data)
        }
        if (trasb !== '') {
            const respuesta7 = await Axios.get('/vehiculos/buscar_vehiculo_tras/' + trasb)
            setVehiculos(respuesta7.data)
        }
        if (precbm !== '') {
            const respuesta8 = await Axios.get('/vehiculos/buscar_vehiculo_prm/' + precbm)
            setVehiculos(respuesta8.data)
        }
        if (precbma !== '') {
            const respuesta9 = await Axios.get('/vehiculos/buscar_vehiculo_prma/' + precbma)
            setVehiculos(respuesta9.data)
        }
    }

    return (
        <div className="App">
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

            <div className="container-fluid">
                <div class="row">
                    <div className="col-2 mt-2">
                        <h5>Filtros</h5>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 " type="search"
                                placeholder="Marca..." arial-label="Search" onChange={e => setMarcab(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Modelo..." arial-label="Search" onChange={e => setModelob(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Año..." arial-label="Search" onChange={e => setAniob(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Color..." arial-label="Search" onChange={e => setColorb(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Kilometraje Min..." arial-label="Search" onChange={e => setKilbm(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Kilometraje Max..." arial-label="Search" onChange={e => setKilbma(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Transmision..." arial-label="Search" onChange={e => setTrasb(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Precio Min..." arial-label="Search" onChange={e => setPrecbm(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input className="form-control mr-sm-2 mt-2" type="search"
                                placeholder="Precio Max..." arial-label="Search" onChange={e => setPrecbma(e.target.value)} />
                        </div>
                        <button className="btn btn-warning mr-1 mt-2"
                            onClick={() => filtrars()}>filtar</button>
                        <button className="btn btn-warning mr-1 mt-2"
                            onClick={() => obtenerVehiculos()}>volver</button>
                    </div>
                    <div className="col  mt-5">
                        <BootstrapTable
                            bootstrap4
                            keyField="id"
                            data={vehiculos}
                            columns={columns}
                            pagination={paginationFactory({ sizePerPage: 5 })}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}



export default Tabla