
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
        //Desarrollo del decrement
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    //Montaje del componente
    useEffect(()=> {
        //El array de dependencias vacío implica que el callback se ejecutará cuando se MONTA el componente por UNICA vez.
        console.log("Se montó el ItemCount");
    }, []);

    //La función callback dentro del useEffect se ejecutará cuando se MONTE el componente, y cuando se ACTUALICE el valor del count
    useEffect(()=> {
        console.log("Se actualiza el estado!")
    }, [count]);
return(
    <div class="contenedor">
                    <p class="contar" id="contar">0</p>

    <div class="botones">
        <button class="incr" onClick={handleAdd} ><span class="material-icons-round">add</span></button>
        <button class="decr" onClick={handleDecrement}><span class="material-icons-round">remove</span></button>
    </div>
    </div>
)
}

export default ItemCount;