import { useState } from 'react';

// Aqui, o componente aceita 'limite' como uma prop
function ContadorLimitado({ limiteMinimo, limiteMaximo }) {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    if (count < limiteMaximo) {
      setCount(count + 1);
    } else {
      alert(`O valor máximo é ${limiteMaximo}!`);
    }    

  };
  const diminuir = () => {
    if (count > limiteMinimo) {
      setCount(count - 1);
    } else {
      alert(`O valor mínimo é ${limiteMinimo}!`);
    }
  };
  const zerar = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={zerar}>Zerar</button>
      <p>Valor atual {count}</p>
    </div>
  );
}

export default ContadorLimitado;