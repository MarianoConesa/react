import React, { useState } from 'react'

const Semaforo = (props) => {

    // Creo un Hook que recibe un objeto con los tres valores
    const [contadores, setContadores] = useState({ valorRojo     : 0,
                                                   valorAmarillo : 0,
                                                   valorVerde    : 0});

    // Funciones que incrementan el valor correspondiente del hook
    function incrementarRojo() {
        setContadores({...contadores,                            // El resto de valores se quedan igual
                      valorRojo: contadores.valorRojo + 1});     // Incremento el valorRojo
    }
    function incrementarAmarillo() {
        setContadores({...contadores,
                    valorAmarillo: contadores.valorAmarillo + 1});
    }
    function incrementarVerde() {
        setContadores({...contadores,
                       valorVerde: contadores.valorVerde + 1});
    }

    // Cálculos solicitados a partir del valor de los hooks de estado
    const pulsacionesTotales = (contadores.valorRojo + contadores.valorAmarillo + contadores.valorVerde);
    const porRojo = (contadores.valorRojo/pulsacionesTotales)*100;
    const porAmarillo = (contadores.valorAmarillo/pulsacionesTotales)*100;
    const porVerde = (contadores.valorVerde/pulsacionesTotales)*100;

    // Parte del componente que se renderiza por pantalla
    return (
        <div>

            <button className="rojo"
                    onClick={incrementarRojo}> Rojo </button>
            <button className="amarillo"             
                    onClick={incrementarAmarillo}> Amarillo </button>
            <button className="verde" 
                    onClick={incrementarVerde}> Verde </button>

            <p>Pulsaciones Rojo: {contadores.valorRojo}</p>
            <p>Pulsaciones Amarillo: {contadores.valorAmarillo}</p>
            <p>Pulsaciones Verde: {contadores.valorVerde}</p>

            <p>Total pulsaciones: {pulsacionesTotales}</p>
            <p>% Rojo: { isNaN(porRojo) ? 0 : porRojo }%</p>
            <p>% Amarillo: { isNaN(porAmarillo) ? 0 : porAmarillo }%</p>
            <p>% Verde: { isNaN(porVerde) ? 0 : porVerde }%</p>
        </div>
    )
}

export default Semaforo;