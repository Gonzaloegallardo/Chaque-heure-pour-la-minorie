import ItemCount from "../itemCount/itemCount"
import React, {useState } from "react"
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";


const ItemDetail = ({product}) => {
    const[count, setCount]= useState(1)
    const [compra, setCompra]= useState(false)
    const {title,  price, stock, image, id}= product
    const navegar = useNavigate()
    const{addItem, addItem2}=useCart()

const [qty,] = useState(1)

const onAdd = () => {
    const purchase = {
    id,
    title,
    price,
    stock, 
    image   ,
    quantity:count
    }
    setCompra(true)
    addItem(purchase)
    addItem2(product,count)
}





console.log(qty)
return (


<div className='row mt-2'>
        
        <div className="card mx-auto col-md-3 col-10 mt-5">
            <div className="card-body text-center mx-auto">
                <div className='cvp'>
                <img src={product.image} width ="200em" height="300em" alt="" />
                    <h5 className="card-title font-weight-bold">{product.title}</h5>
                    <p className="card-text">${product.price}</p>

                    <p> stock: {product.stock}</p>
                
                    { !compra 
        ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
        : <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <button className="btn btn-warning" onClick={()=>navegar('/')}>Seguir Comprando</button>
            <button className="btn btn-info" onClick={()=>navegar('/cart')}>Ir al carrito</button>
            </div>}
                </div>
            </div>
        </div>
        </div>
        
)
}
export default ItemDetail