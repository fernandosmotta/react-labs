
// ferramenta para detectar problemas em potencial no código. 
// Ajuda a manter a qualidade do código. 
// Detecta problemas comuns e antipadrões, como variáveis não utilizadas, funções mal definidas, problemas de estilo de código, funções obsoletas, entre outros.
import { StrictMode } from 'react'
// forma moderna e recomendada para inicializar a aplicação
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
