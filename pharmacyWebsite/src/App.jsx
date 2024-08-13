import './App.css';

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="divHeaderCima"></div>

      <div className="divHeaderMeio">
        <img src="./images/logoPanvel.png" alt="Logo" className="logo" />
        <input
          type='text'
          placeholder='Escreva o que você está buscando?:)'
          className="search-input"
        />
        <button><i className="fas fa-store"></i> Nossas Lojas</button>
        <button><i className="fas fa-box"></i> Meus Pedidos</button>
        <button><i className="fas fa-user"></i> Entre ou Cadastre-se</button>

        <button className="buttonCarrinho">
          <img src="./images/imageCarrinho.png" alt="Carrinho" />
        </button>

      </div>

      <div className="divHeaderBaixo"></div>
    </header>
  );
}

function Body() {
  return (
    <main>
      <p>Este é o conteúdo principal da página.</p>
    </main>
  );
}

export default App;
