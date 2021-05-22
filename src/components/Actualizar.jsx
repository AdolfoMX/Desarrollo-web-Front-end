import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Actualizar(props) {

    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [anio, setAnio] = useState('')
    const [color, setColor] = useState('')
    const [kilometraje, setKilo] = useState('')
    const [transmision, setTransm] = useState('')
    const [precio, setPrecio] = useState('')


    useEffect(()=>{
        obtenerVehiculos()
        // eslint-disable-next-line
    },[]) 
    
    const obtenerVehiculos = async () => {
        const id=props.match.params.id
        const token=sessionStorage.getItem('token')
        const respuesta=await Axios.get('/vehiculos/listar_vehiculos_id/'+id,{
            headers:{'autorizacion':token}
        })
        setMarca(respuesta.data.marca)
        setModelo(respuesta.data.modelo)
        setAnio(respuesta.data.anio)
        setColor(respuesta.data.color)
        setKilo(respuesta.data.kilometraje)
        setTransm(respuesta.data.transmision)
        setPrecio(respuesta.data.precio)
    }

    const actualizar=async(e)=>{
        e.preventDefault()
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const vehiculo={
            marca,
            modelo,
            anio,
            color,
            kilometraje,
            transmision,
            precio
        }
        const respuesta=await Axios.put('/vehiculos/actualizar_vehiculo/'+id,vehiculo,{
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

    return (
        <div className="container col-md-6 mt-4">
                <div className="card">
                    <div className="card-header">
                            <h3>Editar</h3>
                        
                        <div className="card-body">
                            <form onSubmit={actualizar}>
                                <div className="form-group">
                                    <label>Marca</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setMarca(e.target.value)} value={marca}/>
                                </div>
                                <div className="form-group">
                                    <label>Modelo</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setModelo(e.target.value)} value={modelo}/>
                                </div>
                                <div className="form-group">
                                    <label>Año</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setAnio(e.target.value)} value={anio}/>
                                </div>
                                <div className="form-group">
                                    <label>Color</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setColor(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Kilometraje</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setKilo(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Transmision</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setTransm(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Precio</label>
                                    <input type='text' className='form-control' required
                                   onChange={e => setPrecio(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <button className='btn btn-warning' type='submit'>Actualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}