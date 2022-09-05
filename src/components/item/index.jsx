import React from 'react'
import './styles.css'

const Item = ({product}) => {
    return (
        <div className='row'>
        <div className='container-fluid'>
        <div className="card mx-auto col-md-3 col-10 mt-5">
            <img className='mx-auto img-thumbnail'
                src=""
                width="auto" height="auto"/>
            <div className="card-body text-center mx-auto">
                <div className='cvp'>
                    <h5 className="card-title font-weight-bold">{product.name}</h5>
                    <p className="card-text">$100</p>
                    <a href="#" className="btn details px-auto">mas detalles</a><br />
                    <a href="#" className="btn cart px-auto">Agregar al carrito</a>
                </div>
            </div>
        </div>

    </div>
    </div>
    )
}

export default Item