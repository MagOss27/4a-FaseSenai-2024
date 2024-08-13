import { useState } from 'react';
import './App.css'

function App() {

  // useState inicializado corretamente com valor inicial 0
  const [contador, setContador] = useState(0);
  let cont = 0;

  function tratarClique() {
    cont++;
    alert('cont: ' + cont)
  }

  function incrementarState() {
    setContador(contador + 1);
  }

  return (
    <>
      <h1>Poeta</h1>
      <p>Soneto de Fidelidade
        De tudo, ao meu amor serei atento
        Antes, e com tal zelo, e sempre, e tanto
        Que mesmo em face do maior encanto
        Dele se encante mais meu pensamento.

        Quero vivê-lo em cada vão momento
        E em seu louvor hei de espalhar meu canto
        E rir meu riso e derramar meu pranto
        Ao seu pesar ou seu contentamento.

        E assim, quando mais tarde me procure
        Quem sabe a morte, angústia de quem vive.</p>

      <button onClick={tratarClique}>Clique</button>
      <div>
        {cont}
      </div>
      <button onClick={incrementarState}>Incrementar State</button>
      <div>
        {contador}
      </div>
    </>
  )
}

export default App;
