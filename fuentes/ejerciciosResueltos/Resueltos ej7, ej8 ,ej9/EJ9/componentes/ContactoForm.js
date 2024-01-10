import React, { useState } from 'react'

const ContactoForm = (props) => {

    // Objeto nota en su estado inicial
    const ESTADOINICIAL={id         : 0,    // ID que luego se sustituirá 
                         nombre     : "",
                         telefono   : ""}
    
    // Identificadores de los campos del formulario, se los asignaremos al atributo id de cada campo
    const NOMBRE    = "nombre";
    const TELEFONO  = "telefono";

    // Usamos el hook userState para gestionar el estado del componente
    const [nuevaContacto, setNuevoContacto] = useState(ESTADOINICIAL);

    function asignarContacto(event){

        console.log(event.target.id);
        console.log(event.target.value);

        switch(event.target.id) {

            // Si hemos modificado el nombre, actualizamos ese campo, el resto los dejamos como está
            case NOMBRE: setNuevoContacto({...nuevaContacto,
                                           nombre:event.target.value});
            break;

            // Si hemos modificado el teléfono, actualizamos ese campo, el resto los dejamos como está
            case TELEFONO: setNuevoContacto({...nuevaContacto,
                                            telefono:event.target.value});
            break;

            default: break;
        }
    }
    
    function manejarFormulario(event){

        // Evitamos el componrtamiento por defecto del onSubmmit del formulario
        event.preventDefault();

        // A través de la función que recibe el componente como props, devolvemos el nuevo contacto
        // al componente padre para que lo añada a la agenda
        props.manejarNuevoContacto(nuevaContacto);

        // Reseteamos los campos del formulario al estado inicial
        setNuevoContacto(ESTADOINICIAL);
    }

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
                <label>Nombre</label> 
                <input id={NOMBRE} type="text" onChange={asignarContacto} value={nuevaContacto.nombre}></input><br></br>
                <label>Teléfono</label> 
                <input id={TELEFONO} type="text" onChange={asignarContacto} value={nuevaContacto.telefono}></input><br></br>
                <button>Añadir Contacto</button>

        </form>

    )
}

export default ContactoForm;