import { useState } from "react";

const FrutaAddForm = (props) =>{
    
    const NUEVAFRUTA = "nuevafruta";

    const [nuevaFruta, setNuevaFruta] = useState("");

    function recogerDatos(evt){

        if(evt.target.id === "nuevafruta"){
            setNuevaFruta(evt.target.value);
        }
        
    }

    function manejarFormulario(evt){
        
        evt.preventDefault();


        props.manejarAdd(nuevaFruta);

        setNuevaFruta("");
    }

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
          <label>Escribe una fruta para añadirla</label><br/>
          <input id={NUEVAFRUTA} type="text" onChange={recogerDatos} value={nuevaFruta}></input>
          <button>Añadir fruta</button>
        </form>
    )
}

export default FrutaAddForm;