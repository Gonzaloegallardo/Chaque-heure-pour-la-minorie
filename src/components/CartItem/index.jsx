import React from 'react'
import { useCart } from '../../Context/CartContext'

const CartItem = ({compra}) => {
    const{removeItem}=useCart()
    return (
    <div  style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'100%'}}>
                <img src={compra.image} alt={compra.title} style={{width:'19rem'}}/>
                <span>{compra.title}</span>
                <span>${compra.price}</span>
                <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
    </div>
    )
}

export default CartItem