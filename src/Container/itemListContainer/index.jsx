import React, { useEffect, useState } from 'react';
import './styles.css';

import ItemList from '../../components/itemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams();



    useEffect(()=> {
    
        (async ()=> {
    try {
        if (categoryId){
            const response = await fetch("https://631f2d4458a1c0fe9f625253.mockapi.io/api/v1/productos/categoria/" + categoryId);
            const productos = await response.json();
            setProductos(productos)
        }
        else{
            const response = await fetch("https://631f2d4458a1c0fe9f625253.mockapi.io/api/v1/productos");
            const productos = await response.json();
            setProductos(productos);
        }
    } catch (error) {
        console.log(error)
    }
    })();

    }, [categoryId])

    console.log(productos)

    return (
    <div className='item-list-container'>
        <ItemList products={productos}/>

    </div>
)
}

export default ItemListContainer;