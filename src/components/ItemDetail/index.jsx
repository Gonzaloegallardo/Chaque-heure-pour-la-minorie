import ItemCount from "../itemCount/itemCount"
import React, {useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Shop } from "../Context";

const ItemDetail = ({product}) => {
    const navigate = useNavigate();

const [qty, setQty] = useState(0)
const {addItem} = useContext(Shop);

const addCart = (quantity) =>{

    setQty(quantity);

};

const handleFinish = ()=>{
    const productToSave = {...product, quantity: qty}
    addItem(productToSave)
    navigate ('/cart');
    
}
console.log(qty)
return (


<div className='row mt-2'>
        
        <div className="card mx-auto col-md-3 col-10 mt-5">
            <div className="card-body text-center mx-auto">
                <div className='cvp'>
                <img src={product.imagen} width ="200em" height="300em" alt="" />
                    <h5 className="card-title font-weight-bold">{product.nombre}</h5>
                    <p className="card-text">${product.precio}</p>
                    <button  className="btn cart px-auto">Añadir al carrito</button>
                    <p> stock: {product.stock}</p>
                
                    { !qty ? ( <ItemCount stock={product.stock} initial={1} onAdd={addCart}/>) : (<button onClick={handleFinish}> finalizar la compra</button>)}
                </div>
            </div>
        </div>
        </div>
        
)
}
export default ItemDetail