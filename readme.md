# ⚛️ Rect-Labs — Guia de Estudo e Referência (React)

Guia rápido para criar, configurar e publicar projetos **React** usando **Vite**, com notas sobre JSX, React DOM, StrictMode, Bootstrap, React Router, Tailwind, e comandos úteis de Git/npm.

---

## 1) Requisitos (Windows)

- **Node.js (LTS)** — baixe e instale: https://nodejs.org/
- **npm** (vem com o Node). Após instalar, confirme as versões:

```bash
node -v
npm -v

```

**Atualizar o npm (opcional):**

```bash
npm install -g npm

```

*(passo citado no seu tutorial para padronizar o ambiente).* 
Tutorial - projeto React

---

## 2) Criando um projeto com Vite (React)

**Passo a passo (do tutorial):** 
Tutorial - projeto React

```bash
# cria o projeto
npm create vite@latest contatos

# durante o wizard:
# - Framework: React
# - Variant: JavaScript

# entrar na pasta do projeto
cd contatos

# instalar dependências base
npm install

# instalar bibliotecas do projeto (UI + rotas)
npm install bootstrap react-router-dom

# rodar em dev
npm run dev

```

**Por que Vite?** build muito mais rápido, hot reload eficiente e integração nativa com ES Modules.

- Docs Vite: https://vitejs.dev/
- Docs React: https://pt-br.react.dev/

---

## 3) Estrutura inicial (Vite + React)

```
contatos/
 ├─ node_modules/
 ├─ public/
 ├─ src/
 │   ├─ App.jsx
 │   ├─ main.jsx
 │   └─ index.css
 ├─ package.json
 └─ vite.config.js

```

- `main.jsx`: ponto de entrada do React
- `App.jsx`: componente raiz
- `package.json`: scripts e dependências readme

---

## 4) Bootstrap (estilização rápida)

**Instalar:**

```bash
npm install bootstrap

```

**Importar no `main.jsx`:**

```jsx
import 'bootstrap/dist/css/bootstrap.min.css'

```

- Docs Bootstrap: https://getbootstrap.com/ readme

---

## 5) React Router (navegação SPA)

**Instalar:**

```bash
npm install react-router-dom

```

- Docs React Router: https://reactrouter.com/ readme

---

## 6) React DOM

Conecta o React ao DOM do navegador. No React 18 usa-se `createRoot`.

**Instalar (se necessário):**

```bash
npm install react-dom

```

- Docs React DOM: https://pt-br.react.dev/reference/react-dom readme

---

## 7) JSX (o que é)

**JSX** é uma extensão de sintaxe que permite escrever **HTML dentro do JavaScript**. Fica mais declarativo e legível (o Babel compila para `React.createElement`).

- Docs JSX: https://pt-br.react.dev/learn/writing-markup-with-jsx readme

---

## 8) StrictMode (para que serve)

Ferramenta de **desenvolvimento** que identifica potenciais problemas (uso incorreto de hooks, APIs obsoletas, efeitos com dependências erradas etc.). **Não altera** o comportamento em produção.

- Docs StrictMode: https://pt-br.react.dev/reference/react/StrictMode readme

---

## 9) Pilha de libs por tipo de projeto (do seu tutorial)

> Use conforme o contexto do app. Tutorial - projeto React
> 
- **Projeto com API / consumo HTTP**
    
    ```bash
    npm install axios react-router-dom bootstrap
    
    ```
    
    - Docs Axios: https://axios-http.com/
- **Projeto “Orçamentos” (PDF/print de tela)**
    
    ```bash
    npm install jspdf html2canvas bootstrap
    
    ```
    
    - jsPDF: https://github.com/parallax/jsPDF
    - html2canvas: https://github.com/niklasvh/html2canvas
- **Projeto com Tailwind CSS (Vite)**
    
---

## 10) Scripts úteis no `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}

```

- `npm run dev` – servidor de desenvolvimento
- `npm run build` – build de produção
- `npm run preview` – pré-visualiza a build localmente

---

## 11) Deploy no GitHub Pages (SPA com Vite)

1. Instale a lib:
    
    ```bash
    npm install --save-dev gh-pages
    
    ```
    
2. No `package.json`, adicione:
    
    ```json
    "homepage": "https://SEU_USUARIO.github.io/NOME_DO_PROJETO",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    
    ```
    
3. Publique:
    
    ```bash
    npm run deploy
    
    ```
    
- Docs GitHub Pages: https://docs.github.com/pt/pages readme

---

## 12) Git — comandos básicos (Windows)

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:SEU_USUARIO/SEU_REPO.git
git push -u origin main

```

- Docs Git: https://git-scm.com/doc readme

---

## 13) Links de referência

- React: https://pt-br.react.dev/ readme
- Vite: https://vitejs.dev/ readme
- Bootstrap: https://getbootstrap.com/ readme
- React Router: https://reactrouter.com/ readme
- npm: https://www.npmjs.com/ readme
- Axios: https://axios-http.com/ Tutorial - projeto React
- jsPDF: https://github.com/parallax/jsPDF Tutorial - projeto React
- html2canvas: https://github.com/niklasvh/html2canvas Tutorial - projeto React
