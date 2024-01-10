import Parte from './Parte';

const Tema = (props) => {

    // Por cada "parte" que le envía la función map genera un
    // componente "Parte"
    function tratarPartes(parte) {        
        return (                
            <Parte key={parte.id} parte={parte}></Parte>
        )
    }

    /* OPCIÓN A. Devolvemos un objeto

    // Función encargada de sumar el campo exercises de cada registro
    // del array. Recibe el valor anterior y el actual y los suma y 
    // devuelve un objeto con el valor total
    function reducir (actual,anterior) {
        return {exercises: actual.exercises + anterior.exercises}
    } 

    // La función "reduce" aplicada a un array realiza la función
    // indicada (en nuestro caso la función reducir) sobre cada
    // elemento del array.
    const total = props.tema.parts.reduce(reducir);

    <p>Total de ejercicios en el curso {total.exercises}</p>

*/    
    /* OPCIÓN B. Devolvemos un número inicializando el reduce*/
    
    function reducir (total, actual) {
        
        return total + actual.exercises;
    } 

    const total = props.tema.parts.reduce(reducir,0);

    return (
        <li>{props.tema.name}
            <ol>{props.tema.parts.map(tratarPartes)}</ol>            
            <p>Total de ejercicios en el curso {total}</p>
        </li>
    )
}

export default Tema;