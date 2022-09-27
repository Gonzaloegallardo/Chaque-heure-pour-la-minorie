import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({compra}) => {
    const{removeItem}=useCart()
    return (
    <div  style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'100%'}}>
                <img src={compra.imagen} alt={compra.nombre} styte={{width:'10rem'}}/>
                <span>{compra.nombre}</span>
                <span>${compra.precio}</span>
                <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
    </div>
    )
}

export default CartItem