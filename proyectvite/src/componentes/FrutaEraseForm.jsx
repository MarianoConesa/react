import { useState } from "react";

const FrutaEraseForm = (props) =>{
    
    const INDICE = 0;

    const [indiceEliminar, setIndiceEliminar] = useState(0);

    function recogerDatos(evt){
        
        const valor = parseInt(evt.target.value);
        console.log(valor);

        if(valor>0 && valor<=(props.listSize)){
            setIndiceEliminar(valor);
            console.log("se cumple");
        }
        
    }

    function manejarFormulario(evt){
        
        evt.preventDefault();


        props.manejarEliminar(indiceEliminar);

        setIndiceEliminar(0);
    }

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
          <label>Escribe un numero de fruta para eliminarla</label><br/>
          <input id={INDICE} type="number" onChange={recogerDatos}></input>
          <button>Eliminar fruta</button>
        </form>
    )
}

export default FrutaEraseForm;