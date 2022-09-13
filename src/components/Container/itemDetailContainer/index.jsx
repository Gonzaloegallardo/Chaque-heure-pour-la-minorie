import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import ItemDetail from "../../ItemDetail";
const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();

    console.log(productId);
    
    useEffect(()=> {

        const getProducts = async () => {
            try {
                const response = await fetch(`https://631f2d4458a1c0fe9f625253.mockapi.io/api/v1/productos/${productId}`);
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [productId])

    console.log(productDetail);

    return <ItemDetail product={productDetail}/>;
};

export default ItemDetailContainer;