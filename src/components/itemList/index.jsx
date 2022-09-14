import React from 'react'
import Item from '../item'

const ItemList = ({products}) => {
return (
    <section className='section-products'>
        <div className='container'>
        <div className='row justify-content-center text-center'>
        </div>
        <div className='row'>
        {products.map(product=>{
            return <Item key={product.id} product={product}/>
        })}

    </div>
    </div>
    </section>
)
}

export default ItemList
