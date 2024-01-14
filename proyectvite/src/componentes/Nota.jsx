const Nota = (props) =>{

    function esImportante(nota){
        if (nota.importante === true){
            return <span className="notaImportante">(importante)</span>
        }
    }

    return(
        <div className="nota">
            <li>
                <p>{props.nota.contenido}{esImportante(props.nota)}</p>
                <p>{props.nota.fecha}</p>
            </li>
        </div>
    )
}

export default Nota;

/*App.jsx

import { useState } from 'react';
import './App.css'
import Nota from "./componentes/Nota";
import notas from "./mock-notas";

function App() {
  
  const [mostrarImportantes, setMostrarImportantes] = useState(false);

  function mostrarNotas(nota){
    return <Nota key={nota.id} nota = {nota}></Nota>
  }

  function botonImportantes(){
    setMostrarImportantes(mostrarImportantes ? false : true);
  }

  function filtrarImportantes(nota){
    if (mostrarImportantes && nota.importante === true){
      return nota;
    }else if (!mostrarImportantes){
      return nota;
    }
  }

  return (
    <div>
      <button onClick={botonImportantes}>{mostrarImportantes ? "Mostrar todo" : "Mostrar importantes"}</button>
      <ul>
        {notas.filter(filtrarImportantes).map(mostrarNotas)}
      </ul>
    </div>
      )
}

export default App

*/

/* App.css
.notaImportante {
  color : red;
}
*/