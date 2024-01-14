const Tema = (props) =>{  
    
    function mostrarTema(tema){
        return <li><p><strong>{tema.name}</strong> Ejercicios: {tema.exercises}</p></li>
    }

    const totalEjercicios = props.tema.parts.reduce(function (suma, valor) {
        return suma + valor.exercises;
      }, 0);
    
    return(
        <div className="tema">
            <li>{props.tema.name}
                <ol>
                    {props.tema.parts.map(mostrarTema)}
                <p>Total de ejercicios en el curso {totalEjercicios}</p>
                </ol>

            </li>
        </div>
    );
}
export default Tema;

/* App.jsx

import './App.css'
import Tema from "./componentes/Tema";
import misTemas from "./mock-misTemas";

function App() {
  
  function mostrarTemas(tema){
    return <Tema key={tema.id} tema = {tema}></Tema>
  }

  return (
    <div>
      <ul>
        {misTemas.map(mostrarTemas)}
      </ul>
    </div>
      )
}

export default App

*/