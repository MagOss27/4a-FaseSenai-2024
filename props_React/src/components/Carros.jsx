function Carros(props) {
    
    let { carro } = props;
    return (
        <div>
            <h2>Modelo: {carro.modelo}</h2>
            <p>Ano: {carro.ano}</p>
            <p>Gênero: {carro.genero}</p>
            <p>ID: {carro.id}</p>
        </div>
    );
}

export default Carros;
