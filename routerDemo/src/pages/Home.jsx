import { useContext } from 'react';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../contexts/GlobalContext';

function Home() {

    const { usuarioLogado, usuarios, setUsuarios } = useContext(GlobalContext)

    function adicionarUsuario() {
        let usuario = {
            id: Date.now(),
            nome: "Pes",
            email: "Pes2025@gmail.com"
        }
        setUsuarios([...usuarios,usuario])
    }

    return (
        <div>
            <Navbar />
            {usuarioLogado}
            <h1>Home do Site</h1>
            <div>
                {
                    //map da tela Home\\
                    usuarios.map((usuario) => (
                        <div key={usuario.id}>
                            <p>Nome: {usuario.nome}</p>
                            <p>E-mail: {usuario.email}</p>
                            <p>{usuario.id}</p>
                        </div>
                    ))
                }
            </div>

            <div>
                <button onClick={adicionarUsuario}>Adicionar Usuário</button>
            </div>
        </div>
    )
}

export default Home;
