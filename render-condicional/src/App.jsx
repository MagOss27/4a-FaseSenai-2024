import './App.css'
import AreaParaMaiores from './components/AreaParaMaiores';
import EfetueLogin from './components/EfetueLogin';
import UsuarioLogado from './components/UsuarioLogado';
import { useState } from 'react';
import Home from './pages/Home';
import Viagens from './pages/Viagens';

function App() {

  const [logado, setLogado] = useState(true);
  const [idade, setIdade] = useState(0);
  const [pagina, setPagina] = useState(<Home />);

  // Função para diminuir a idade com verificação
  const diminuirIdade = () => {
    if (idade > 0) {
      setIdade(idade - 1);
    } else {
      alert('A idade não pode ser menor que 0');
    }
  }

  return (
    <>

      <div>
        <button onClick={() => setPagina(<Home />)}> Home</button>
        <button onClick={() => setPagina(<Viagens />)}> Viagens</button>
      </div>
      {pagina}

      {/* Condicional para exibir `UsuarioLogado` ou `EfetueLogin` */}
      <div className="cardRender">
        {logado ? <UsuarioLogado /> : <EfetueLogin />}
      </div>

      <div className='cardRender'>
        <button onClick={() => setLogado(true)}>Logar</button>
        <button onClick={() => setLogado(false)}>Deslogar</button>
      </div>

      <div className='cardRender'>
        {idade >= 18 && <AreaParaMaiores />}
        <button onClick={diminuirIdade}>-</button>
        {idade}
        <button onClick={() => setIdade(idade + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
