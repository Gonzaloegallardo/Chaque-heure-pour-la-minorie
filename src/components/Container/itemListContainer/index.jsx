import React, { useEffect, useState } from 'react';
import './styles.css';
import { products } from '../../../data/product';
import ItemList from '../../itemList';
import ItemCount from '../../itemCount';

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    useEffect(()=> {
    
    (async ()=> {
    const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(()=> {
        accept(products)
        }, 3000);
        })
        


        try {
            const productos = await obtenerProductos;
            setProductos(productos);
        } catch (error) {
            console.log(error);
        }

    })()

    }, [])

    console.log(productos)
const agregarAlCarrito = (cantidad) => {
    console.log(`se agrego la cantidad de: " ${cantidad}`)
}
    return (
    <div className='item-list-container'>
        <ItemList products={productos}/>
        <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>
    </div>
)
}

export default ItemListContainer;