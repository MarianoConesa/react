import './App.css';
import Tema from './componentes/Tema';
import misTemas from './mock-misTemas';

function App() {

  // Por cada "tema" que le envía la función map genera un
  // componente "Tema"
  function muestraTemas(tema) {  

    return <Tema  key={tema.id} tema={tema}></Tema>
    
  }

  return (    
    <div>
      <ul>{misTemas.map(muestraTemas)} 
      </ul>
      
    </div>
    );
}
export default App;





