import { useState } from 'react';
import './App.css';
import Fruta from './componentes/Fruta'
import FrutaForm from './componentes/FrutaForm'
import frutas from './mock-frutas';

function App() {

  // hook usado para almacenar el estado de la lista de frutas.
  const [listaFrutas, setListaFrutas] = useState(frutas);

  // Esta función se envía al componente hijo como prop para la 
  // inserción de una nueva fruta
  function manejarInsercion(fruta) {

    console.log("valor componetne hijo ", fruta, " lo añadimos a la lista");

    // Añadimos la fruta a la lista de frutas
    setListaFrutas([...listaFrutas, fruta]);

  }  

    // Esta función se envía al componente hijo como prop para el 
    // borrado de una fruta
    function manejarBorrado(id) {

      console.log("valor componetne hijo ", id, " lo eliinamos lista");
  
      // Añadimos la fruta a la lista de frutas
      setListaFrutas(listaFrutas.filter(item => item !== listaFrutas[id]));
  
    }
  // Función encargada de llamar al componente Fruta con la fruta
  // que recibe como parámetro implícito de la función map
  function muestraFruta(fruta,index) {  
    return <Fruta  key={index} fruta={fruta}></Fruta>;    
  }

  return (
    <div>
      <div id="divFrutas">
        <h1>Frutas</h1>
        <ol>
        {listaFrutas.map(muestraFruta)}
        </ol>
      </div>
      <div id="divForm">
        <FrutaForm manejarInsercion={manejarInsercion} 
                   manejarBorrado={manejarBorrado} 
                   elementos={listaFrutas.length}>            
         </FrutaForm>        
      </div>
    </div>
    );
}
export default App;





