import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // Hooks (de estado)

  function aumentar() {
      setCount(count + 1)  
  }
  function diminuir() {
      setCount(count - 1)
  }
  function zerar() {
     setCount(0)
  }

  return (
    <>
      <div>
        <h1>Exemplo de React</h1>
      </div>
      
      <div className="card">
        {/*
          //Exemplo utilizando o Hook, porém chamado o arrow function do JS
          // -------------------------------------------------------------------
          // --- () => setCount((count) => count + 1) 
          // --- () => setCount(count + 1)
          // -------------------------------------------------------------------
          <button onClick={() => setCount((count) => count + 1)}>
            Valor Atual: {count}
          </button>
        */}
      
        <button onClick={aumentar}>
          Aumentar (+)
        </button>

        <button onClick={diminuir} className='button'>
          Diminuir(-)
        </button>
        <button onClick={zerar} className='button'>
          Zerar
        </button>

        <h3>Valor atual: {count}</h3>
      </div>
    </>
  )
}

export default App
