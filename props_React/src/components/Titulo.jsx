//rfc - cria componente completo\\
import './Titulo.css';

function Titulo(props) {
    // console.log(props)
    return (
        <div className="titulo-container">
            <h1>{props.texto} {props.emogi}</h1>
        </div>
    )
}

export default Titulo;