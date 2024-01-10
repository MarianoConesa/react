import React, { useState } from 'react'

const FrutaForm = (props) => {

    // Con este hook gestionaremos el elemento a insertar
    const [nuevaFruta, setNuevaFruta] = useState(""); 
    
    // Con este hook gestionaremos el elemento a borrar
    const [borraFruta, delborraFruta] = useState("");

    function asignarFruta(event){
        
        setNuevaFruta(event.target.value);
    }
    function borrarFruta(event){

        delborraFruta(event.target.value);
    }
    
    function manejarInsercion(event){

        // Evitamos el componrtamiento por defecto del onSubmmit del formulario
        event.preventDefault();

        if (nuevaFruta ==="") alert ("Debes introducir un nombre para la fruta");

        else {
            // A través de la función que recibe el componente como props, devolvemos la nueva fruta
            // al componente padre para que lo añada a la lista de frutas
            props.manejarInsercion(nuevaFruta);

            // Reseteamos el campo de inserción del formulario al estado inicial
            setNuevaFruta("");
        }
    }

    function manejarBorrado(event){

        // Evitamos el componrtamiento por defecto del onSubmmit del formulario
        event.preventDefault();

        // Solo borramos si el elemento insertado es menor o igual que el número de 
        // elementos de la lista
        if (props.elementos===0) alert ("No hay elementos en la lista");
        else if (borraFruta === "") alert ("Debes introducir un número de fruta a borrar");
        else if (props.elementos >= +borraFruta)

            // A través de la función que recibe el componente como props, devolvemos el id de la fruta 
            // a borrar al componente padre para que lo elimine de la lista de frutas. Le envíamos
            // uno menos ya que el array empieza por 0 y la lista por 1.
            props.manejarBorrado(+borraFruta-1);

        else alert ("Ese elemento no existe en la lista");

         // Reseteamos el campo de borrado del formulario al estado inicial
        delborraFruta("");
    }

    return (
        <div>
            <form id="formulario" onSubmit={manejarInsercion}>
                    <label>Escribe la fruta que quieres añadir</label> 
                    <input id="añadir" type="text" onChange={asignarFruta} value={nuevaFruta}></input><br></br>
                    <button>Añadir Fruta</button>
            </form>
            <form id="formulario" onSubmit={manejarBorrado}>
                    <label>Escribe el número de la fruta a eliminar</label> 
                    <input id="eliminar" type="text" onChange={borrarFruta} value={borraFruta}></input><br></br>
                    <button>Eliminar Fruta</button>
            </form>
        </div>
    )
}

export default FrutaForm;