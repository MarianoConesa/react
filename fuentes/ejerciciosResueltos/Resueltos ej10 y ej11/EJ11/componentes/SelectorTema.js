import React, {useContext} from "react";
import {useState} from "react";
import IdiomaContext from "../contextos/IdiomaContext";
import idiomas from "../mock-idiomas";

const SelectorTema = (props) => {             

    const TEMA1 = "tema1";
    const TEMA2 = "tema2";

    // Usamos el contexto.
    const idioma = useContext(IdiomaContext);  

    const [temaSeleccionado, setTemaSeleccionado] = useState(props.tema);

    function asignarTema(event){

        // A través de la función que recibe el componente como props, devolvemos el tema seleccionado
        // al componente padre para que lo modifique en el contexto y llegue a todos los consumidores 
        // de dicho
        props.manejarSeleccion(event.target.value);        
        setTemaSeleccionado(event.target.value);

    }

    return (
        <div  onChange={asignarTema} >
            <input id={TEMA1} type="radio" value={1} name="tema" defaultChecked={temaSeleccionado===1}/> {idiomas[idioma].tema.op1}
            <input id={TEMA2} type="radio" value={2} name="tema" defaultChecked={temaSeleccionado===2}/> {idiomas[idioma].tema.op2}
        </div>
    )
}
export default SelectorTema;