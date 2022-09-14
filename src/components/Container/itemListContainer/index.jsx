import React, { useEffect, useState } from 'react';
import './styles.css';

import ItemList from '../../itemList';
import ItemCount from '../../itemCount/itemCount';



const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    useEffect(()=> {
    
        (async ()=> {
    /*const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(()=> {
        accept(products)
        }, 3000);
        })
        
        try {
            const productos = await obtenerProductos;
            setProductos(productos);
        } catch (error) {
            console.log(error);
        */
    try {
        const response = await fetch("https://631f2d4458a1c0fe9f625253.mockapi.io/api/v1/productos");
        const productos = await response.json();
        setProductos(productos);
    } catch (error) {
        console.log(error)
    }
    })()

    }, [])

    console.log(productos)
    const agregarAlCarrito = () =>{
console.log("se grego al carrito")
    }

    return (
    <div className='item-list-container'>
        <ItemList products={productos}/>

    </div>
)
}

export default ItemListContainer;