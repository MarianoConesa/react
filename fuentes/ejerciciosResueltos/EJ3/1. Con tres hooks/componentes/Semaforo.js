import React, { useState } from 'react'

const Semaforo = (props) => {

    // Creo un Hook para asociado a cada pulsación del botón
    const [valorRojo, setRojo] = useState(0);
    const [valorAmarillo, setAmarillo] = useState(0);
    const [valorVerde, setVerde] = useState(0);

    // Funciones que incrementan el hook correspondiente
    function incrementarRojo() {
        setRojo(valorRojo + 1);
    }
    function incrementarAmarillo() {
        setAmarillo(valorAmarillo + 1);
    }
    function incrementarVerde() {
        setVerde(valorVerde + 1);
    }

    // Cálculos solicitados a partir del valor de los hooks de estado
    const pulsacionesTotales = (valorRojo + valorAmarillo + valorVerde);
    const porRojo = (valorRojo/pulsacionesTotales)*100;
    const porAmarillo = (valorAmarillo/pulsacionesTotales)*100;
    const porVerde = (valorVerde/pulsacionesTotales)*100;

    // Parte del componente que se renderiza por pantalla
    return (
        <div>

            <button className="rojo"
                    onClick={incrementarRojo}> Rojo </button>
            <button className="amarillo"             
                    onClick={incrementarAmarillo}> Amarillo </button>
            <button className="verde" 
                    onClick={incrementarVerde}> Verde </button>

            <p>Pulsaciones Rojo: {valorRojo}</p>
            <p>Pulsaciones Amarillo: {valorAmarillo}</p>
            <p>Pulsaciones Verde: {valorVerde}</p>

            <p>Total pulsaciones: {pulsacionesTotales}</p>
            <p>% Rojo: { isNaN(porRojo) ? 0 : porRojo }%</p>
            <p>% Amarillo: { isNaN(porAmarillo) ? 0 : porAmarillo }%</p>
            <p>% Verde: { isNaN(porVerde) ? 0 : porVerde }%</p>
        </div>
    )


}

export default Semaforo;