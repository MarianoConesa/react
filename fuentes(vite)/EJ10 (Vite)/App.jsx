import React from 'react';
import './App.css';
import BarraHeramientas from './componentes/BarraHeramientas';
import TemaContext from './contextos/TemaContext';
import temas from './mock-temas';

function App() {

  return (
    // Definimos el proveedor del contexto.
    <TemaContext.Provider value={temas.light}>
      <BarraHeramientas></BarraHeramientas>
    </TemaContext.Provider>
  );
}

export default App;
