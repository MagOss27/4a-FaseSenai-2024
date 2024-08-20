import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TelaAtendimento from './TelaAtendimento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesignTelaFarmacia />} />
        <Route path="/retirar-senha" element={<TelaAtendimento />} />
      </Routes>
    </Router>
  );
}

function DesignTelaFarmacia() {
  return (
    <>
      <Header />
      <Body />
    </>
  )

}

function Header() {

  //instalar npm install react-router-dom para a navegação de tela
  const navigate = useNavigate();
  return (
    <header>

      <div className="divHeaderCima">
        Bem-vindo à Farmárcia, sua nova aliada em cuidados com a saúde!
      </div>
      <div className="divHeaderMeio">
        <img src="./images/logoFarmacia.png" alt="Logo" className="logo" />
        <input
          type="text"
          placeholder="Escreva o que você está buscando?:)"
          className="search-input"
        />
        <button><i className="fas fa-store"></i> Nossas Lojas</button>
        <button><i className="fas fa-box"></i> Meus Pedidos</button>
        <button onClick={() => navigate('/retirar-senha')}><i class="fas fa-id-card"></i> Retirar Senha de Atendimento</button>
      </div>
      <div className="divHeaderBaixo">
        <button className='buttonHeaderBaixo'> <i className='fa-solid fa-bars'></i> Todas as Categorias</button>
        <button className='buttonHeaderBaixo'>Medicamentos</button>
        <button className='buttonHeaderBaixo'>Dormocosméticos</button>
        <button className='buttonHeaderBaixo'>Mamãe e Bebês</button>
        <button className='buttonHeaderBaixo'>Higiene Pessoal</button>
        <button className='buttonHeaderBaixo'>Serviços e Vacinas</button>
        <button className='buttonHeaderBaixo'>Conveniência</button>
        <button className='buttonHeaderBaixo'>Ofertas</button>
      </div>
    </header>
  );
}

function Body() {
  return (
    <main className='mainCima'>
      <div className="cimaTexto">
        <div className="imageFarmacia">
            <img src="./images/imagemGrande.png" alt="ImagemProjeto" />
        </div>
        <div>
          Esta é a nova identidade visual da farmácia, agora renomeada para "Farmárcia". Após a decisão de meu tio Mário de mudar de ramo e vender sua farmácia para investir em armários aéreos, a farmácia passou por uma reformulação completa. A nova marca reflete um compromisso renovado com o bem-estar e a saúde da comunidade.        </div>
      </div>

      <div className="meioTexto">
        <div className="imageFarmacia">
          <img src="./images/farmarciaPlaca.png" alt="ImagemProjeto" />
        </div>
        <div>
          A placa da nova "Farmárcia" não apenas anuncia a mudança de direção e o novo nome, mas também simboliza a expansão do legado familiar. Com a abertura de 30 novas lojas em diferentes bairros, a "Farmárcia" mantém a essência de cuidado e tradição herdada da antiga farmácia do tio Mário. Cada loja foi cuidadosamente planejada para atender as necessidades da comunidade local, garantindo que todos os clientes, antigos e novos, se sintam bem-vindos.</div>
      </div>

      <div className="baixoTexto">
        <div className="imageFarmacia">
          <img src="./images/farmarciaCamiseta.png" alt="ImagemProjeto" />
        </div>
        <div>
          A camiseta personalizada com a nova logomarca da "Farmárcia" representa o compromisso da farmácia com a nova identidade e a proximidade com a comunidade. Esta imagem reflete o esforço para manter a farmácia moderna, acessível e próxima de seus clientes, mesmo com a mudança de direção.        </div>
      </div>
      <button className='buttonWhats' onClick={() => window.location.href = 'https://www.linkedin.com/in/magnus-oss-6b018a297/'}>
        <img src="./images/whatsImagem.jfif" alt="WhatsApp" />
      </button>

    </main>
  );
}

export default App;
