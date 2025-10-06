import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContadorLimitado from './ContadorLimitado.jsx';

function App() {
  // count: É a variável de estado que guarda o valor atual do contador (inicialmente, 0).
  // setCount: É uma função que você usa para atualizar o valor de count. Sempre que você quiser mudar o valor do estado, deve usar essa função.
  const [count, setCount] = useState(0)

  const aumentar = () => {
    setCount(count + 1)
  }
  function diminuir() {
    setCount(count - 1);
  }
  function zerar() {
    setCount(0)
  }

  return (
    <>
      <h1>Exemplos de React</h1>
      <div className="card">
        <button onClick={aumentar}>
          Aumentar
        </button>
        <button onClick={diminuir}>
          Diminuir
        </button>
        <button onClick={zerar}>
          Zerar
        </button>
        <p>Valor atual {count}</p>
      </div>
      <div>
        <h2>Limite 10</h2>
        <ContadorLimitado limiteMinimo={-10} limiteMaximo={10} />
        <h2>Limite 0 e 15</h2>
        <ContadorLimitado limiteMinimo={0} limiteMaximo={25} />
      </div>

    </>
  )
}

export default App
