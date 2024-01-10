import React, { useState } from 'react'

const NotaForm = (props) => {

    // Objeto nota en su estado inicial
    const NOTAINICIAL={id         : 0,    // ID que luego se sustituirá 
                       contenido  : "",
                       fecha      : "",
                       importante : true}
    
    // Identificadores de los campos del formulario, se los asignaremos al atributo id de cada campo
    const CONTENIDO   = "contenido";
    const FECHA       = "fecha";
    const IMPORTANTE1 = "importante1";
    const IMPORTANTE2 = "importante2";

    // Usamos el hook userState para gestionar el estado del componente
    const [nuevaNota, setNuevaNota] = useState(NOTAINICIAL);

    function asignarNota(event){

        console.log(event.target.id);
        console.log(event.target.value);

        switch(event.target.id) {

            // Si hemos modificado el contenido, actualizamos ese campo, el resto los dejamos como está
            case CONTENIDO: setNuevaNota({...nuevaNota,
                            contenido:event.target.value});
            break;

            // Si hemos modificado la fecha, actualizamos ese campo, el resto los dejamos como está
            case FECHA: setNuevaNota({...nuevaNota,
                        fecha:event.target.value});
            break;

            // Si hemos modificado la importancia a true, actualizamos ese campo, el resto los dejamos como está
            case IMPORTANTE1: setNuevaNota({...nuevaNota,
                              importante:true});
            break;
            // Si hemos modificado la importancia a false, actualizamos ese campo, el resto los dejamos como está
            case IMPORTANTE2: setNuevaNota({...nuevaNota,
                              importante:false});
break;
default: break;
        }
    }
    
    function manejarFormulario(event){

        // Evitamos el componrtamiento por defecto del onSubmmit del formulario
        event.preventDefault();

        // A través de la función que recibe el componente como props, devolvemos la nueva nota
        // al componente padre para que lo añada a la lista de notas
        props.manejarAccion(nuevaNota);

        // Reseteamos los campos del formulario al estado inicial
        setNuevaNota(NOTAINICIAL);
    }

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
                <p><strong>Nueva nota</strong></p>
                <label>Contenido</label> 
                <input id={CONTENIDO} type="text" onChange={asignarNota} value={nuevaNota.contenido}></input><br></br>
                <label>Contenido</label> 
                <input id={FECHA} type="datetime-local" onChange={asignarNota} value={nuevaNota.fecha}></input><br></br>
                <label>Contenido</label> 
                <div  onChange={asignarNota} >
                    <input id={IMPORTANTE1} type="radio" value={true} name="importante" /> Importante
                    <input id={IMPORTANTE2} type="radio" value={false} name="importante" /> No importante
                </div>
                <button>Añadir Nota</button>

        </form>

    )



}

export default NotaForm;