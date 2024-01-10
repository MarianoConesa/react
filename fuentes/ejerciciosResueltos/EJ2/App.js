import './App.css';
import Parrafo from './componentes/Parrafo'
import Resumen from './componentes/Resumen'
import Titulo from './componentes/Titulo'

function App() {
  const curso = 'Desarrollo web en entorno cliente. 2ª Evaluación';
  const parte1 = 'Fundamentos de React';
  const ejercicios1 = 10;
  const parte2 = 'React avanzado';
  const ejercicios2 = 7;
  const parte3 = 'Otros frameworks';
  const ejercicios3 = 14;
  const resumen = "Numero de ejercicios" ;

  return (
    <div>
          <Titulo curso={curso}></Titulo>
          <Parrafo titulo={parte1} ejercicios={ejercicios1}></Parrafo>
          <Parrafo titulo={parte2} ejercicios={ejercicios2}></Parrafo>
          <Parrafo titulo={parte3} ejercicios={ejercicios3}></Parrafo>
          <Resumen titulo={resumen} total={ejercicios1 + ejercicios2 + ejercicios3}></Resumen>
    </div>
  );
}

export default App;
