import { useState } from 'react';
import './App.css'
import FrutaAddForm from "./componentes/FrutaAddForm";
import FrutaEraseForm from './componentes/FrutaEraseForm';
import frutas from "./mock-frutas";

function App() {

  const [listaFrutas, setListaFrutas] = useState(frutas);

  function mostrarNotas(fruta){
    return <li>{fruta}</li>
  }

  function manejarAdd(nuevaFruta){
    setListaFrutas([...listaFrutas, nuevaFruta]);
  }

  function manejarEliminar(indice){
    console.log(indice);
    let listaAux = listaFrutas.filter(function(element){
      if (element !== listaFrutas[indice]){
        return element;
      }
    })

    setListaFrutas(listaAux);
    console.table(listaFrutas);
  }

  return (
    <div>
      <h2>Frutas</h2>
      <ol>
        {listaFrutas.map(mostrarNotas)}
      </ol>
      <FrutaAddForm manejarAdd = {manejarAdd}></FrutaAddForm>
      <FrutaEraseForm manejarEliminar = {manejarEliminar} listSize = {listaFrutas.length}></FrutaEraseForm>
    </div>
      )
}

export default App
