import React, {useContext} from "react";
import BotonTema from "./BotonTema";
import IdiomaContext from "../contextos/IdiomaContext";
import idiomas from "../mock-idiomas";


const BarraHeramientas = () => {

    // Usamos el contexto.
    const idioma = useContext(IdiomaContext);  

    return (
      <div>
        <BotonTema etiqueta={idiomas[idioma].botonera.op1}></BotonTema>
        <BotonTema etiqueta={idiomas[idioma].botonera.op2}></BotonTema>
        <BotonTema etiqueta={idiomas[idioma].botonera.op3}></BotonTema>
      </div>
    );
  }

  export default BarraHeramientas;
  