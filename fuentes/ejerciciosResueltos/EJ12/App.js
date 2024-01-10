import { useEffect, useState } from 'react';
import './App.css';
import Post from './componentes/Post.js'
import AjaxLoader from './componentes/AjaxLoader.js';
import { getAllPosts } from './servicios/posts/getAllPosts';

function App() {

  // Estado con la lista de post que recuperamos de la REST API
  const [listaPost, setListaPost] = useState([]);

  // Estado para controlar si estamos cargando los datos o hemos finalizado
  // de cargarlos
  const [buscando, setBuscando] = useState(false);

  function obtenerPosts(){

      //Marcamos que estamos buscando los datos
      setBuscando(true);

      // Usamos el servicio de obtención de posts que hemos creado
      getAllPosts().then(posts => {

          //Cargamos los post en el estado del componente
          setListaPost(posts);

          //Indicamos que hemos terminado de cargar los datos
          setBuscando(false);

        });                    
  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez
  useEffect(obtenerPosts, []);

  // Función encargada de llamar al componente Post con el post
  // que recibe como parámetro implícito de la función map
  function muestraPost(post) {  

    return <Post  key={post.id} post={post}></Post>;
  }
  return (
    <div>
      <div id="divPost">
        <h1>Post</h1>
        {buscando ? <AjaxLoader></AjaxLoader> 
                  :  <ul>                        
                      {listaPost.map(muestraPost)}
                    </ul>
        }
        
      </div>
    </div>
    );
}
export default App;


