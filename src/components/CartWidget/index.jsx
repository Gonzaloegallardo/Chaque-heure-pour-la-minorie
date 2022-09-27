import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';


const CartWidget = () => {
const{cartQuantity} = useCart()
return (
    <>
<Link className='nav-link active' aria-current="page" to='/cart' >
🛒


<span className='badge rounded-pill text-bg-danger'>{cartQuantity() || ''}</span>
</Link>

</>
)
}

export default CartWidget