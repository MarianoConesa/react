import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


const App = () => {
  const curso = 'Desarrollo web en entorno cliente. 2ª Evaluación'
  const parte1 = 'Fundamentos de React'
  const ejercicios1 = 10
  const parte2 = 'React avanzado'
  const ejercicios2 = 7
  const parte3 = 'Otros frameworks'
  const ejercicios3 = 14

  return (
    <div>
      <h1>{curso}</h1>
      <p>
        {parte1} {ejercicios1}
      </p>
      <p>
        {parte2} {ejercicios2}
      </p>
      <p>
        {parte3} {ejercicios3}
      </p>
      <p>Numero de ejercicios {ejercicios1 + ejercicios2 + ejercicios3}</p>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

