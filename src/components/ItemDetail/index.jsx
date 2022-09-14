import ItemCount from "../itemCount/itemCount"






const ItemDetail = ({product}) => {

return (


<div className='row mt-2'>
        
        <div className="card mx-auto col-md-3 col-10 mt-5">
            <div className="card-body text-center mx-auto">
                <div className='cvp'>
                <img src={product.imagen} width ="200em" height="300em" alt="" />
                    <h5 className="card-title font-weight-bold">{product.nombre}</h5>
                    <p className="card-text">${product.precio}</p>
                    <button  className="btn cart px-auto">Añadir al carrito</button>
                    <ItemCount/>
                </div>
            </div>
        </div>
        </div>
        
)
}
export default ItemDetail