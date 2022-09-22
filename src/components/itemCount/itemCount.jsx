
import React, {useState, useEffect} from "react";
import './styles.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert("No hay suficiente stock disponible");
        }
    }

    const handleDecrement = () => {
        if(count < stock) {
            setCount(count-1);
        }
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    useEffect(()=> {
    }, []);

    useEffect(()=> {
    }, [count]);
return(
    <div className="contenedor">
                    <p className="contar" id="contar"></p>

    <div className="botones">
    <h2>{count}</h2>
        <button className="incr" onClick={handleAdd} ><span className="material-icons-round">add</span></button>

        <button className="decr" onClick={handleDecrement}><span className="material-icons-round">remove</span></button>
        <button className="cart-button" onClick={addCart}>Agregar al carro</button>
    </div>
    </div>
)
}

export default ItemCount;