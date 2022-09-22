import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'


const Item = ({product}) => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/detail/${product.id}`)
        
    }
    return (

        <div className="card mx-auto col-md-10 col-10 mt-5">
            <div className="card-body text-center mx-auto">
                <div className='cvp'>
                    <img src={product.imagen} width ="200em" height="300em" alt="" />

                    <h5 className="card-title font-weight-bold">{product.nombre}</h5>
                    <p className="card-text">${product.precio}</p>
                    <p className="btn details px-auto" onClick={handleNavigate}>Ver detalles </p>
                </div>
            </div>
        </div>


                
    )
}

export default Item