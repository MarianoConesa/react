import React, {useContext} from "react";
import TemaContext from "../contextos/TemaContext";

const BotonTema = (prop) => {

    // Usamos el contexto.
    const tema = useContext(TemaContext);

    return (
      <button style={{ background: tema.background, color: tema.foreground }}>
        {prop.etiqueta}
      </button>
    );
  }

  export default BotonTema;
  