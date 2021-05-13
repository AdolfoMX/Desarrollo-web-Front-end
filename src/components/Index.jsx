import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import Swal from 'sweetalert2'

function Index() {

    const [vehiculos, setVehiculos] = useState([])

    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [anio, setAnio] = useState('')

    useEffect(() => {
        obtenerVehiculos()
    },[])

    const obtenerVehiculos = async () => {
        const token=sessionStorage.getItem('token')
        const respuesta=await Axios.get('/vehiculos/listar_vehiculos/',
        {
            headers:{'autorizacion':token}
        })
        setVehiculos(respuesta.data)
    }
    
    
    const guardar=async(e)=>{
        e.preventDefault()
        const vehiculo={marca,modelo,anio}
        const token=sessionStorage.getItem('token')
        const respuesta=await Axios.post('/vehiculos/crear_vehiculo',vehiculo,{
            headers:{'autorizacion':token}
        })
        const mensaje=respuesta.data.mensaje 
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: mensaje,
            showConfirmButton: true
          })
        window.location.href='/index'
    }

    const eliminar=async(id)=>{
        const token=sessionStorage.getItem('token')
        const respuesta=await Axios.delete('/vehiculos/eliminar_vehiculo/'+id,{
            headers:{'autorizacion':token}
        })
        const mensaje=respuesta.data.mensaje 
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: mensaje,
            showConfirmButton: true
          })
          obtenerVehiculos()
    }

    const buscar=async(e)=>{
        if(e.target.value===''){
            return  obtenerVehiculos()
        }
        const buscar=e.target.value
        const token=sessionStorage.getItem('token')
        const respuesta=await Axios.get('/vehiculos/buscar_vehiculo/'+buscar,{
            headers:{'autorizacion':token}
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
                    <div className="col-md-3">
                        <Link to="#" className="btn btn-primary btn-block" data-toggle="modal" 
                        data-target='#addVehiculo'> <i className="fas fa-plus"></i> Agregar vehiculo
                        </Link>
                    </div>
                    <div className="col-md-5 ml-auto">
                        <div className="input-group">
                            <input className="form-control mr-sm-2" type="search" 
                            placeholder="Buscar..." arial-label="Search" onChange={(e)=>buscar(e)}/>
                        </div>
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
                                    <h4>Vehiculos de {sessionStorage.getItem('nombre')}</h4>
                                </div>
                                <table className="table table-responsive-lg table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Año</th>
                                            <th className="text-center">Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            vehiculos.map((vehiculo,i)=>(
                                                <tr key={vehiculo._id}>
                                                    <td>{i+1}</td>
                                                    <td>{vehiculo.marca}</td>
                                                    <td>{vehiculo.modelo}</td>
                                                    <td>{vehiculo.anio}</td>
                                                    <td className="text-center">
                                                        <button className="btn btn-warning mr-1"
                                                        onClick={()=>eliminar(vehiculo._id)}
                                                        >Eliminar</button>
                                                        <Link className="btn btn-danger mr-1" to=
                                                        {'/editar/'+vehiculo._id}>Editar</Link>
                                                    </td>
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
            {/*MODAL*/}
            <div className="modal fade" id='addVehiculo'>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text white">
                            <h5 className='modal-title'>Add Vehiculo</h5>
                            <button className='close' data-dismiss='modal'>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={guardar}>
                                <div className="form-group">
                                    <label>Marca</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setMarca(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Modelo</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setModelo(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Año</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setAnio(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <button className='btn btn-primary' type='submit'>Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}



export default Index