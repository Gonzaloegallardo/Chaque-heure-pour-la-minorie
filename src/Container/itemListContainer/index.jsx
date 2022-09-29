import React, { useEffect, useState } from 'react';
import './styles.css';

import ItemList from '../../components/itemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";


const ItemListContainer = ({greeting}) => {
console.log(db)
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams();



    useEffect(() => {
        (async () => {
        
          //obtenemos productos Firestore
            try {
    
            const q = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : query(collection(db, "products"));
    
            const querySnapshot = await getDocs(q);
            const productosFirebase = [];
    
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
                productosFirebase.push({id: doc.id, ...doc.data()})
            });
    
            setProductos(productosFirebase);
        } catch (error) {
            console.log(error);
        }
        })();
    
    }, [categoryId]);

    console.log(productos)

    return (
    <div className='item-list-container'>
        <ItemList products={productos}/>

    </div>
)
}

export default ItemListContainer;