import './App.css';
import Avatar from './componentes/Avatar'
import Nombre from './componentes/Nombre'
import Nick from './componentes/Nick'
import Cuando from './componentes/Cuando'
import Mensaje from './componentes/Mensaje'
import Botonera from'./componentes/Botonera'

function App() {
  const tweet = 'Comenzamos con React en el módulo de Desarrollo web en entorno cliente. 2ª Evaluación';
  const nombre = 'Víctor M. Garrido';
  const nick   ='@vgc02g';
  const cuando = '3h ago ';

  return (
    <div>
    <div className="tweet">
            <Avatar></Avatar>
            <div className="content">
              <span className="author" >
                <Nombre nombre = {nombre}></Nombre>
                <Nick nick={nick}></Nick>
                <Cuando cuando={cuando}></Cuando>
              </span>
              <Mensaje tweet = {tweet}></Mensaje>
              <Botonera></Botonera>           
            </div>                
    </div>
    </div>
  );
}

export default App;
