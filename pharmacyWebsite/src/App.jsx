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
        <button><i className="fas fa-user"></i> Entre ou Cadastre-se</button>
      </div>
      <div className="divHeaderBaixo">
        <button> <i className='fa-solid fa-bars'></i> Todas as Categorias</button>
        <button>Medicamentos</button>
        <button>Dormocosméticos</button>
        <button>Mamãe e Bebês</button>
        <button>Higiene Pessoal</button>
        <button>Serviços e Vacinas</button>
        <button>Conveniência</button>
        <button>Ofertas</button>
      </div>
    </header>
  );
}

function Body() {
  return (
    <main className='mainCima'>

<div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros imperdiet, consectetur eros et, eleifend leo. Suspendisse ligula sapien, suscipit eu consectetur cursus, blandit eu ligula. Vivamus sodales risus aliquam mauris volutpat fermentum. Ut scelerisque dui in elit varius ornare. Vivamus a enim leo. Donec quam nulla, pellentesque quis iaculis vel, efficitur id lacus. Phasellus metus risus, iaculis viverra facilisis quis, blandit et quam. In quis ligula ac dolor placerat consectetur sed in sem. Cras quis sollicitudin enim, id imperdiet nisl. Praesent vulputate venenatis mauris eu tincidunt. Duis ac gravida turpis.

Suspendisse at pellentesque justo, et dignissim libero. Praesent convallis vulputate ante quis interdum. Fusce accumsan sodales volutpat. Phasellus sit amet nulla in velit tempor vehicula. Donec faucibus massa in magna tristique mollis. Donec a tempor quam, id fringilla erat. Proin condimentum eros vel tellus feugiat, sit amet volutpat quam lacinia. Cras eleifend sapien vel odio faucibus, a porttitor velit commodo.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rhoncus ut libero a sagittis. Pellentesque sit amet posuere risus. Donec quis elementum sapien. Phasellus vehicula nunc sed fringilla iaculis. Phasellus ut enim a justo malesuada fringilla. Ut congue a quam eget ornare. Fusce id finibus nunc. Vivamus ullamcorper maximus augue, at viverra ex malesuada ut. Curabitur luctus erat ac elementum bibendum. Nunc tempus a nisl eget congue.</div>


<div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros imperdiet, consectetur eros et, eleifend leo. Suspendisse ligula sapien, suscipit eu consectetur cursus, blandit eu ligula. Vivamus sodales risus aliquam mauris volutpat fermentum. Ut scelerisque dui in elit varius ornare. Vivamus a enim leo. Donec quam nulla, pellentesque quis iaculis vel, efficitur id lacus. Phasellus metus risus, iaculis viverra facilisis quis, blandit et quam. In quis ligula ac dolor placerat consectetur sed in sem. Cras quis sollicitudin enim, id imperdiet nisl. Praesent vulputate venenatis mauris eu tincidunt. Duis ac gravida turpis.

Suspendisse at pellentesque justo, et dignissim libero. Praesent convallis vulputate ante quis interdum. Fusce accumsan sodales volutpat. Phasellus sit amet nulla in velit tempor vehicula. Donec faucibus massa in magna tristique mollis. Donec a tempor quam, id fringilla erat. Proin condimentum eros vel tellus feugiat, sit amet volutpat quam lacinia. Cras eleifend sapien vel odio faucibus, a porttitor velit commodo.

Orci varius n

<div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros imperdiet, consectetur eros et, eleifend leo. Suspendisse ligula sapien, suscipit eu consectetur cursus, blandit eu ligula. Vivamus sodales risus aliquam mauris volutpat fermentum. Ut scelerisque dui in elit varius ornare. Vivamus a enim leo. Donec quam nulla, pellentesque quis iaculis vel, efficitur id lacus. Phasellus metus risus, iaculis viverra facilisis quis, blandit et quam. In quis ligula ac dolor placerat consectetur sed in sem. Cras quis sollicitudin enim, id imperdiet nisl. Praesent vulputate venenatis mauris eu tincidunt. Duis ac gravida turpis.

Suspendisse at pellentesque justo, et dignissim libero. Praesent convallis vulputate ante quis interdum. Fusce accumsan sodales volutpat. Phasellus sit amet nulla in velit tempor vehicula. Donec faucibus massa in magna tristique mollis. Donec a tempor quam, id fringilla erat. Proin condimentum eros vel tellus feugiat, sit amet volutpat quam lacinia. Cras eleifend sapien vel odio faucibus, a porttitor velit commodo.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rhoncus ut libero a sagittis. Pellentesque sit amet posuere risus. Donec quis elementum sapien. Phasellus vehicula nunc sed fringilla iaculis. Phasellus ut enim a justo malesuada fringilla. Ut congue a quam eget ornare. Fusce id finibus nunc. Vivamus ullamcorper maximus augue, at viverra ex malesuada ut. Curabitur luctus erat ac elementum bibendum. Nunc tempus a nisl eget congue.</div>
atoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rhoncus ut libero a sagittis. Pellentesque sit amet posuere risus. Donec quis elementum sapien. Phasellus vehicula nunc sed fringilla iaculis. Phasellus ut enim a justo malesuada fringilla. Ut congue a quam eget ornare. Fusce id finibus nunc. Vivamus ullamcorper maximus augue, at viverra ex malesuada ut. Curabitur luctus erat ac elementum bibendum. Nunc tempus a nisl eget congue.</div>

    </main>
  );
}

export default App;
