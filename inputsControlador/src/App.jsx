import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputNome, setInputNome] = useState('')
  const [inputIdade, setInputIdade] = useState('')
  const [usuarios, setUsuarios] = useState([])

  function mudouNome(event) {
    setInputNome(event.target.value)
  }

  function mudouIdade(event) {
    setInputIdade(event.target.value)
  }

  function cadastrarUsuario() {
    console.log(inputNome)
    console.log(inputIdade)
    let usuario = {
      nome: inputNome,
      idade: inputIdade
    }
    console.log(usuario)
    setUsuarios([...usuarios, usuario])//*** */
  }

  [{nome: 'Um', idade: '1'}], [{nome: 'Dois', idade: '2'}]

  return (
    <>
      <h1 className='titulo'>Inputs controlados</h1>

      <div className="inputContainer">
        <label htmlFor="inpNome">Nome: </label>
        <input
          value={inputNome}
          onChange={mudouNome}
          id='inpNome' type="text" />
      </div>

      <div className="inputContainer">
        <label htmlFor="inpIdade">Idade: </label>
        <input
          value={inputIdade}
          onChange={mudouIdade}
          id='inpIdade' type="number" />
      </div>

      <button onClick={cadastrarUsuario}>Cadastrar</button>

      <div>
        <p>
          Nome digitado: {inputNome}
        </p>
        <p>
          Idade digitada: {inputIdade}
        </p>
        <p>
          Usuarios:{usuarios.map((usuario, index) => (
           <div key={index}>
             <p>{usuario.nome}</p>
             <p>{usuario.idade}</p>
           </div>
          ))}
        </p>
      </div>

    </>
  )
}

export default App