import { useState } from 'react';
import './App.css';
import Nota from './componentes/Nota'
import notas from './mock-notas';

function App() {

  // Creamos un estado asociado al botón para ver si mostramos todas las notas
  // o solo las importantes. Inicialmente mostraremos todas las notas (true)
  const [mostrarTodos, setmostrarTodos] = useState(true);  
  
  // Función encargada de cambiar el estado del hook creado para mostrar o no mostrar
  // todas las notas. Hacemos un toogle del booleano, si es true lo ponemos a false y
  // viceversa.
  function manejarMostarNotas() {

    setmostrarTodos(!mostrarTodos);
    
  }

  // Función encargada de llamar al componente Nota con la nota
  // que recibe como parámetro implícito de la función map
  function muestraNotas(nota) {  

    return <Nota  key={nota.id} nota={nota}></Nota>;
    
  }

  // Función encargada de filtrar la nota que recibe como parámetro
  // implícito en función del valor del estado "mostarTodos"
  function filtrarNotas(nota) {

    if (mostrarTodos) return true;
    else return nota.importante===true;

  }

  return (
    <div>
      <h1>Notas</h1>
      <button onClick={manejarMostarNotas}>{mostrarTodos ? "Mostar importantes" : "MostrarTodos"}</button>
      <ul>
      {notas.filter(filtrarNotas)
            .map(muestraNotas)}
      </ul>
    </div>
    );
}
export default App;





