import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'


const Item = ({product}) => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/detail/${product.id}`)
        
    }
    return (
        <div className='row'>
        <div className="card mx-auto col-md-1 col-10 mt-5">
            <div className="card-body text-center mx-auto">
                <div className='cvp'>
                    <h5 className="card-title font-weight-bold">{product.nombre}</h5>
                    <p className="card-text">${product.precio}</p>
                    <p class="btn details px-auto" onClick={handleNavigate}>Ver detalles </p>
                    <a href="#" class="btn cart px-auto">Añadir al carrito</a>
                </div>
            </div>
        </div>
        </div>

                
    )
}

export default Item