import { useState } from "react";

const SelectorTema = (props) => {             

    const TEMA1 = "tema1";
    const TEMA2 = "tema2";

    const [temaSeleccionado, setTemaSeleccionado] = useState(props.tema);

    function asignarNota(event){

        // A través de la función que recibe el componente como props, devolvemos el tema seleccionado
        // al componente padre para que lo modifique en el contexto y llegue a todos los consumidores 
        // de dicho
        props.manejarSeleccion(event.target.value);        
        setTemaSeleccionado(event.target.value);

    }

    return (
        <div  onChange={asignarNota} >
            <input id={TEMA1} type="radio" value={1} name="tema" defaultChecked={temaSeleccionado===1}/> Claro
            <input id={TEMA2} type="radio" value={2} name="tema" defaultChecked={temaSeleccionado===2}/> Oscuro
        </div>
    )
}
export default SelectorTema;