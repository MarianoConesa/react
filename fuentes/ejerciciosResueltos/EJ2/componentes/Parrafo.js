import React from 'react'

const Parrafo = (props) => {

    console.log("parafo " + props.titulo);
    return (

      <p>{props.titulo} {props.ejercicios}</p>

    )
}

export default Parrafo;