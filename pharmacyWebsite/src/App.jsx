//Critérios de avaliação da tela Farmarcia:

// Criou e usou um componente Header - 2 pontos ✅ 
// Criou e usou um  componente Body - 2 pontos ✅ 
// Criou o componente Logo e usou no Header - 2 pontos ✅ 
// Acrescentou uma inovação, um diferencial competitivo - 0,5 pontos ✅ 
// Respeitou integralmente a paleta de cores do cliente - 1 ponto ✅ 
// Criou pelo menos mais um componente e usou no Body - 2 pontos ✅ 
// Alterou o tittle e o favicon para o tema do projeto - 0,5 pontos ✅ 

import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TelaAtendimento from './TelaAtendimento'; // Importa o componente TelaAtendimento para uso na rota

function App() {
  return (
    // Configura o roteamento usando o Router do react-router-dom
    <Router>
      <Routes>
        {/* Rota principal "/" que renderiza o componente DesignTelaFarmacia */}
        <Route path="/" element={<DesignTelaFarmacia />} />  
        {/* Rota "/retirar-senha" que renderiza o componente TelaAtendimento */}
        <Route path="/retirar-senha" element={<TelaAtendimento />} /> 
      </Routes>
    </Router>
  );
}

function DesignTelaFarmacia() {
  return (
    <>
      {/* Renderiza o componente Header */}
      <Header />
      {/* Renderiza o componente Body */}
      <Body />
      
    </>
  );
}

function Header() {
  // Hook useNavigate do react-router-dom para navegação programática entre as telas
  const navigate = useNavigate();

  return (
    <header>
      <div className="divHeaderCima">
        {/* Mensagem de boas-vindas */}
        Bem-vindo à Farmárcia, sua nova aliada em cuidados com a saúde!
      </div>
      <div className="divHeaderMeio">
        {/* Logotipo da farmácia */}
        <img src="./images/logoFarmacia.png" alt="Logo" className="logo" />
        {/* Campo de busca */}
        <input
          type="text"
          placeholder="Escreva o que você está buscando?:)"
          className="search-input"
        />
        {/* Botões de navegação */}
        <button><i className="fas fa-store"></i> Nossas Lojas</button>
        <button><i className="fas fa-box"></i> Meus Pedidos</button>
        {/* Botão que navega para a rota "/retirar-senha" */}
        <button onClick={() => navigate('/retirar-senha')}><i className="fas fa-id-card"></i> Retirar Senha de Atendimento</button>
      </div>
      <div className="divHeaderBaixo">
        {/* Botões para navegar entre as categorias de produtos */}
        <button className='buttonHeaderBaixo'> <i className='fa-solid fa-bars'></i> Todas as Categorias</button>
        <button className='buttonHeaderBaixo'>Medicamentos</button>
        <button className='buttonHeaderBaixo'>Dermocosméticos</button>
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
      {/* Primeira seção do corpo da página */}
      <div className="cimaTexto">
        <div className="imageFarmacia">
          {/* Imagem grande que representa o novo visual da farmácia */}
          <img src="./images/imagemGrande.png" alt="ImagemProjeto" />
        </div>
        <div>
          {/* Texto explicativo sobre a nova identidade visual da farmácia */}
          Esta é a nova identidade visual da farmácia, agora renomeada para "Farmárcia". Após a decisão de meu tio Mário de mudar de ramo e vender sua farmácia para investir em armários aéreos, a farmácia passou por uma reformulação completa. A nova marca reflete um compromisso renovado com o bem-estar e a saúde da comunidade.
        </div>
      </div>

      {/* Segunda seção do corpo da página */}
      <div className="meioTexto">
        <div className="imageFarmacia">
          {/* Imagem da placa da nova Farmárcia */}
          <img src="./images/farmarciaPlaca.png" alt="ImagemProjeto" />
        </div>
        <div>
          {/* Texto explicativo sobre a expansão da farmácia */}
          A placa da nova "Farmárcia" não apenas anuncia a mudança de direção e o novo nome, mas também simboliza a expansão do legado familiar. Com a abertura de 30 novas lojas em diferentes bairros, a "Farmárcia" mantém a essência de cuidado e tradição herdada da antiga farmácia do tio Mário. Cada loja foi cuidadosamente planejada para atender as necessidades da comunidade local, garantindo que todos os clientes, antigos e novos, se sintam bem-vindos.
        </div>
      </div>

      {/* Terceira seção do corpo da página */}
      <div className="baixoTexto">
        <div className="imageFarmacia">
          {/* Imagem da camiseta personalizada com a nova logomarca da Farmárcia */}
          <img src="./images/farmarciaCamiseta.png" alt="ImagemProjeto" />
        </div>
        <div>
          {/* Texto explicativo sobre a proximidade da farmácia com a comunidade */}
          A camiseta personalizada com a nova logomarca da "Farmárcia" representa o compromisso da farmácia com a nova identidade e a proximidade com a comunidade. Esta imagem reflete o esforço para manter a farmácia moderna, acessível e próxima de seus clientes, mesmo com a mudança de direção.
        </div>
      </div>

      {/* Botão fixo de WhatsApp que redireciona para o LinkedIn */}
      <button className='buttonWhats' onClick={() => window.location.href = 'https://www.linkedin.com/in/magnus-oss-6b018a297/'}>
        <img src="./images/whatsImagem.jfif" alt="WhatsApp" />
      </button>
    </main>
  );
  
}

export default App;
