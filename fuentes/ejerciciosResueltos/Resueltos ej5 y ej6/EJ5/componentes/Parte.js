const Parte = (props) => {

    return (
        <li><strong>{props.parte.name}</strong>. Ejercicios:{props.parte.exercises}</li>
    )
}

export default Parte;