import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const App = () => {
  const tweet = 'Comenzamos con React en el módulo de Desarrollo web en entorno cliente. 2ª Evaluación';
  const nombre = 'Víctor M. Garrido';
  const nick   ='@vgc02g';
  const cuando = '3h ago ';

  return (
    <div className="tweet">
          <img
            src="https://www.gravatar.com/avatar/763dcd4dad38689d57aa9d83a60bfaa5.jpg"
            className="avatar"
            alt="avatar" />
            <div className="content">
              <span className="author" >
                <span className="name" > {nombre} </span>
                <span className="handle" > {nick} </span>
                <span className="time" > {cuando} </span>
              </span>
              <div className="message" >
                {tweet}
              </div>    
              <div className="buttons" >
              <i className="fa fa-reply reply-button" />
              <i className="fa fa-retweet retweet-button" />
              <i className="fa fa-heart like-button" />
              <i className="fa fa-ellipsis-h more-options-button" />
              </div>            
            </div>                
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

