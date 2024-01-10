import React, { useState } from 'react';
import './App.css';
import BarraHeramientas from './componentes/BarraHeramientas.js';
import TemaContext from './contextos/TemaContext';
import temas from './mock-temas';
import SelectorTema from './componentes/SelectorTema';

function App() {

  // Usamos este estado para que cuando cambiemos el tema se renderice de nuevo el componente
  const [temaElegido, setTemaElegido] = useState(temas.light);

  function manejarSeleccion(valor)  {

    // En función del valor seleccionado, actualizamos el tema elegido
    setTemaElegido(valor==="1"?temas.light:temas.dark);

  }

  return (
    <div>
      <SelectorTema tema={1} manejarSeleccion={manejarSeleccion} ></SelectorTema>
      {/*Definimos el proveedor del contexto.*/}
      <TemaContext.Provider value={temaElegido}>
        <BarraHeramientas></BarraHeramientas>
      </TemaContext.Provider>
    </div>
  );
}

export default App;
