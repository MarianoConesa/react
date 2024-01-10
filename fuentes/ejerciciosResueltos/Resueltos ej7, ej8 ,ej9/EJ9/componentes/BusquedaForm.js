import React, { useState } from 'react'

const BusquedaForm = (props)  => {


    // Identificadores de los campos del formulario, se los asignaremos al atributo id de cada campo
    const NOMBRE    = "bnombre";
    const ESTADOINICIAL = "";

    // Usamos el hook userState para gestionar el estado del componente
    const [nuevaBusqueda, setnuevaBusqueda] = useState(ESTADOINICIAL);

    function asignarContacto(event){

        setnuevaBusqueda(event.target.value);
    }

    function devolverBusqueda(){

        // A través de la función que recibe el componente como props, devolvemos el nuevo contacto
        // al componente padre para que lo añada a la agenda
        props.manejarBusqueda(nuevaBusqueda);
    }

    return (
        <div>
            <input id={NOMBRE} type="text" onChange={asignarContacto} onKeyUp={devolverBusqueda} value={nuevaBusqueda}></input><br></br>
        </div>
    )



}
export default BusquedaForm;