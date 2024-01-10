import React, { useState } from 'react';
import './App.css';
import BarraHeramientas from './componentes/BarraHeramientas.js';
import TemaContext from './contextos/TemaContext';
import IdiomaContext from './contextos/IdiomaContext';
import temas from './mock-temas';
import SelectorTema from './componentes/SelectorTema';
import SelectorIdioma from './componentes/SelectorIdioma';

function App() {

  const ES="es";

  // Usamos este estado para que cuando cambiemos el tema se renderice de nuevo el componente
  const [temaElegido, setTemaElegido] = useState(temas.light);
  const [idiomaElegido, setIdiomaElegido] = useState(ES);

  function manejarSeleccionTema(valor)  {

    // En función del valor seleccionado, actualizamos el tema elegido
    setTemaElegido(valor==="1"?temas.light:temas.dark);
  }

  function manejarSeleccionIdioma(valor)  {

    // En función del valor seleccionado, actualizamos el tema elegido
    setIdiomaElegido(valor);
  }  

  return (
    <div>
      <SelectorIdioma idioma={idiomaElegido}  manejarSeleccion={manejarSeleccionIdioma}></SelectorIdioma>
      <IdiomaContext.Provider value={idiomaElegido}>
        <SelectorTema tema={1} manejarSeleccion={manejarSeleccionTema} ></SelectorTema>
        {/*Definimos el proveedor del contexto.*/}
        <TemaContext.Provider value={temaElegido}>
          <BarraHeramientas></BarraHeramientas>
        </TemaContext.Provider>
      </IdiomaContext.Provider>
    </div>
  );
}

export default App;
