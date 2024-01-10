const Nota = (props) => {

    // Mediante un operador condicional ponemos el texto (importante). Analizamos
    // el valor del atributo importante de la nota, si es TRUE ponemos el texto "(importante)"  y si
    // es false no ponemos nada
    const importante = (props.nota.importante) ? "(importante)" : "";

    return (
        <li>
            <p>{props.nota.contenido} <span className="importante">{importante}</span></p>
            <small>{props.nota.fecha}</small>
        </li>
    )
}

export default Nota;