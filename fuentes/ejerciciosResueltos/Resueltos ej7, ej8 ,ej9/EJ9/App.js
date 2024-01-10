import { useState } from 'react';
import './App.css';
import Agenda from './componentes/Agenda.js'
import ContactoForm from './componentes/ContactoForm.js'
import BusquedaForm from './componentes/BusquedaForm.js'
import listinTelefonico from './mock-telefonos';

function App() {
  
  // Estado para almacenar la lista de contactos
  const [listaContactos, setListaContactos] = useState(listinTelefonico);

  // Estado para almacenar el criterio de búsqueda
  const [busqueda, setBusqueda] = useState("");

  // Esta función se envía al ContactoForm como prop para que nos devuelva
  // el contacto a añadir en la lista
  function manejarNuevoContacto(contacto) {

    console.log("valor componente hijo ", contacto, " lo añadimos a la lista");

    // Le asigno el ID a la nota
    contacto.id = listaContactos.length + 1;

    // Añadimos el coche a la lista de coches
    setListaContactos([...listaContactos, contacto]);

  }  

  // Esta función se le envía al BusquedaForm como propr para que nos devuelva
  // el criterio de búsqueda
  function manejarBusqueda(busqueda) {

    console.log("valor componetne hijo ", busqueda);
    setBusqueda(busqueda);
  }

  // Función encargada de llamar al componente Nota con la nota
  // que recibe como parámetro implícito de la función map
  function muestraTelefonos(entrada) {  

    return <Agenda  key={entrada.id} entrada={entrada}></Agenda>;
    
  }

  function filtrar(entrada){

    // Si el filtro de búsqueda está en el nombre de la entrada devolvemos TRUE
    // en caso contrario FALSE
    if (entrada.nombre.indexOf(busqueda) !== -1) return true;
    else return false;
  }

  return (
    <div>
        <h1>Buscar</h1>
        <BusquedaForm manejarBusqueda={manejarBusqueda}>
        </BusquedaForm>
        <h1>Nuevo contacto</h1>
        <ContactoForm manejarNuevoContacto={manejarNuevoContacto}>            
        </ContactoForm>       
        <h1>Agenda</h1>
        <ul>
        {listaContactos
            .filter(filtrar)
            .map(muestraTelefonos)}
        </ul>
    </div>
    );
}
export default App;





