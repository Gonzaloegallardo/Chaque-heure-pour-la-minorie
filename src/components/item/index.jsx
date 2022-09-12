import React from 'react'
import './styles.css'

const Item = ({product}) => {
    return (
        <div className='row'>
        <div className="card mx-auto col-md-1 col-10 mt-5">
            <div className="card-body text-center mx-auto">
                <div className='cvp'>
                    <h5 className="card-title font-weight-bold">{product.nombre}</h5>
                    <p className="card-text">${product.precio}</p>
                    <a href="#" class="btn details px-auto">Ver detalles</a><br />
                    <a href="#" class="btn cart px-auto">Añadir al carrito</a>
                </div>
            </div>
        </div>
        </div>

                
    )
}

export default Item