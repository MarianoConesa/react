import { useState } from "react";

const SelectorIdioma = (props) => {    

    const [idiomaSeleccionado, setIdiomaSeleccionado] = useState(props.idioma);

    function asignarIdioma(event){

        // A través de la función que recibe el componente como props, devolvemos el idioma seleccionado
        // al componente padre para que lo modifique en el contexto y llegue a todos los consumidores 
        // de dicho
        props.manejarSeleccion(event.target.value);        
        setIdiomaSeleccionado(event.target.value);
    }

    console.log(idiomaSeleccionado);
    return (

        <select id="paises" value={props.idioma} onChange={asignarIdioma}>
            <option value="es">Spain </option>
            <option value="gb">United Kingdom</option>
            <option value="fr">France</option>
        </select> 
    )


}

export default SelectorIdioma;