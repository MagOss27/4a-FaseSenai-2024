import Titulo from "../components/Titulo";
import Carros from "../components/Carros";
import './Portfolio.css';

function Portfolio() {

    const Carrinhos = [
        { id: Date.now() + 1, modelo: "Fusca", ano: 1969, genero: "Hatchback" },
        { id: Date.now() + 2, modelo: "Kombi", ano: 1970, genero: "Van" },
        { id: Date.now() + 3, modelo: "Opala", ano: 1971, genero: "Sedan" },
        { id: Date.now() + 4, modelo: "Brasília", ano: 1972, genero: "Hatchback" },
        { id: Date.now() + 5, modelo: "Chevette", ano: 1973, genero: "Sedan" },
        { id: Date.now() + 6, modelo: "Variant", ano: 1974, genero: "Station Wagon" },
        { id: Date.now() + 7, modelo: "Maverick", ano: 1975, genero: "Coupe" },
        { id: Date.now() + 8, modelo: "Corcel", ano: 1976, genero: "Sedan" },
        { id: Date.now() + 9, modelo: "Passat", ano: 1977, genero: "Hatchback" },
        { id: Date.now() + 10, modelo: "Gol", ano: 1978, genero: "Hatchback" },
        { id: Date.now() + 11, modelo: "Monza", ano: 1979, genero: "Sedan" },
        { id: Date.now() + 12, modelo: "Santana", ano: 1980, genero: "Sedan" },
        { id: Date.now() + 13, modelo: "Del Rey", ano: 1981, genero: "Sedan" },
        { id: Date.now() + 14, modelo: "Fiesta", ano: 1982, genero: "Hatchback" },
        { id: Date.now() + 15, modelo: "Uno", ano: 1983, genero: "Hatchback" },
        { id: Date.now() + 16, modelo: "Escort", ano: 1984, genero: "Hatchback" },
        { id: Date.now() + 17, modelo: "Parati", ano: 1985, genero: "Station Wagon" },
        { id: Date.now() + 18, modelo: "Saveiro", ano: 1986, genero: "Pickup" },
        { id: Date.now() + 19, modelo: "Voyage", ano: 1987, genero: "Sedan" },
        { id: Date.now() + 20, modelo: "Palio", ano: 1988, genero: "Hatchback" },
        { id: Date.now() + 21, modelo: "Corsa", ano: 1989, genero: "Hatchback" },
    ];

    return (
        <div>
            <Titulo texto={"Portfólio"} emogi={"👾"} />
            <p>Estamos na página de portfólio</p>

            <div className="carros">
                {Carrinhos.map((Carro) => (
                    <Carros carro={Carro} key={Carro.id} />

                ))}
            </div>
        </div>
    );
}

export default Portfolio;
