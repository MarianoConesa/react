import { useState } from "react";

const NotaForm = (props) => {

    const NOTAINICIAL={ id          : null,
                        contenido   : "",
                        fecha       : "",
                        importante  : false}
    
    // Identificadores de los campos del formulario, se los asignaremos al atributo id
    const CONTENIDO     = "contenido";
    const FECHA         = "fecha";
    const IMPORTANTE1   = "importante1";
    const IMPORTANTE2   = "importante2";

    // Usamos el hook userState para gestionar el estado del componente
    const [nuevaNota, setNuevaNota] = useState(NOTAINICIAL);

    // Función encargada de asignar a cada campo del "nuevaNota" su valor a traves del hook
    function asignarNota(event){

        switch(event.target.id) {


            case CONTENIDO: setNuevaNota({...nuevaNota,
                                        contenido:event.target.value});
                         break;

            case FECHA: setNuevaNota({...nuevaNota,
                                           fecha:event.target.value});
                            break;
            
            case IMPORTANTE1: setNuevaNota({...nuevaNota,
                                        importante:true});
                         break;

            case IMPORTANTE2: setNuevaNota({...nuevaNota,
                                         importante:false});
                          break;
            default: break;
        }
    }

    // Función encargada de actualiar el hook de estado del componente y
    // devolver el coche creado al objeto padre
    function manejarFormulario(event) {

        // Evitamos el componrtamiento por defecto del onSubmmit del formulario
        event.preventDefault();

        // A través de la función que recibe el componente como props, devolvemos el nuevo coche
        // al componente padre para que lo añada a la lista de coches
        props.manejarAccion(nuevaNota);

        // Reseteamos los campos del formulario al estado inicial
        setNuevaNota(NOTAINICIAL);
    }
    return (
            <form id="formulario" onSubmit={manejarFormulario}>
                <p><strong>Nueva nota</strong></p>
                <label>Contenido</label> <br/>
                <input id={CONTENIDO} type="text" onChange={asignarNota} value={nuevaNota.contenido}></input><br></br>
                <label>Fecha</label> <br/>
                <input id={FECHA} type="text" onChange={asignarNota} value={nuevaNota.fecha}></input><br></br>
                <label>Importantancia</label><br/>
                <input id={IMPORTANTE1} type="radio" name="importancia" onChange={asignarNota}/>
                <label htmlFor={IMPORTANTE1}>Importante</label><br />
                <input id={IMPORTANTE2} type="radio" name="importancia" onChange={asignarNota}/>
                <label htmlFor={IMPORTANTE2}>No Importante</label><br />

                <button>Añadir Nota</button>
            </form>
    )
}

export default NotaForm;

/*App.jsx
import { useState } from 'react';
import './App.css'
import Nota from "./componentes/Nota";
import NotaForm from "./componentes/NotaForm";
import notas from "./mock-notas";

function App() {

  const [listaNotas, setListaNotas] = useState(notas);
  
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

  function manejarAccion(nuevaNota){
    nuevaNota.id = listaNotas.length + 1;
    setListaNotas([...listaNotas, nuevaNota]);
    console.log("se ha introducido una nueva nota");
    console.table(listaNotas);
    console.table(nuevaNota);
  }

  return (
    <div>
      <button onClick={botonImportantes}>{mostrarImportantes ? "Mostrar todo" : "Mostrar importantes"}</button>
      <ul>
        {listaNotas.filter(filtrarImportantes).map(mostrarNotas)}
      </ul>
      <NotaForm manejarAccion = {manejarAccion} numNotas = {listaNotas.length}></NotaForm>
    </div>
      )
}

export default App

*/

/*Mock notas
const notas = [
    {
      id: 1,
      contenido: 'HTML is easy',
      fecha: '2019-05-30T17:30:31.098Z',
      importante: true
    },
    {
      id: 2,
      contenido: 'Browser can execute only JavaScript',
      fecha: '2019-05-30T18:39:34.091Z',
      importante: false
    },
    {
      id: 3,
      contenido: 'GET and POST are the most important methods of HTTP protocol',
      fecha: '2019-05-30T19:20:14.298Z',
      importante: true
    }
  ]

  export default notas;
*/