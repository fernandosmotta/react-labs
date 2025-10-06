# ⚛️ Rect-Labs — Guia de Estudo e Referência React

Este documento serve como base de estudo e consulta para configuração e entendimento dos principais conceitos do **React.js** e do ecossistema que o envolve.

Aqui estão reunidos os comandos, bibliotecas e links essenciais para iniciar e compreender a estrutura de um projeto React moderno.

---

## Introdução

O **React.js** é uma biblioteca JavaScript desenvolvida pelo **Facebook (Meta)** para criação de interfaces de usuário interativas e reativas.

Ele é baseado em **componentes** reutilizáveis e é amplamente usado para o desenvolvimento de **Single Page Applications (SPAs)**.

📚 **Documentação oficial do React:**

https://pt-br.react.dev/

---

## Ambiente e Instalação

### 🔹 Node.js e npm

O React depende do **Node.js** (ambiente de execução JavaScript) e do **npm** (gerenciador de pacotes).

### Verificar se estão instalados:

node -v
npm -v
Instalação:
Windows/Mac: <https://nodejs.org/>

Linux (Debian/Ubuntu):

bash
Copiar código
sudo apt update
sudo apt install nodejs npm
📘 Documentação oficial do npm:
<https://www.npmjs.com/>

⚡ Criando um projeto React com Vite
O Vite é uma ferramenta moderna que substitui o create-react-app, oferecendo:

Build muito mais rápido

Hot Reload eficiente

Integração simples com ES Modules

Comando para criar o projeto:
bash
Copiar código
npm create vite@latest nome-do-projeto
Durante a criação, selecione:

Framework: React

Variant: JavaScript ou TypeScript

Em seguida:

bash
Copiar código
cd nome-do-projeto
npm install
npm run dev
💡 npm run dev executa o servidor local e exibe o endereço da aplicação.

📘 Documentação oficial do Vite:
<https://vitejs.dev/>

🔧 Estrutura inicial do projeto
Ao criar um projeto com Vite, você terá:

pgsql
Copiar código
nome-do-projeto/
 ├─ node_modules/
 ├─ public/
 ├─ src/
 │   ├─ App.jsx
 │   ├─ main.jsx
 │   └─ index.css
 ├─ package.json
 └─ vite.config.js
Principais arquivos:

main.jsx: ponto de entrada do React

App.jsx: componente raiz da aplicação

package.json: lista dependências e scripts do projeto

💅 Adicionando o Bootstrap
O Bootstrap é usado para estilização rápida e responsiva.

Instalação:
bash
Copiar código
npm install bootstrap
Importação no projeto:
No arquivo main.jsx:

jsx
Copiar código
import 'bootstrap/dist/css/bootstrap.min.css'
📘 Documentação oficial do Bootstrap:
<https://getbootstrap.com/>

🧱 JSX (JavaScript XML)
O JSX é uma extensão de sintaxe do JavaScript que permite escrever HTML dentro do código JS.
Ele deixa o React mais declarativo e fácil de ler, tornando a criação de componentes muito mais intuitiva.

📘 Documentação JSX (React):
<https://pt-br.react.dev/learn/writing-markup-with-jsx>

🧠 Hooks
Hooks são funções especiais que permitem “ligar” recursos do React a componentes funcionais.

Principais Hooks:
useState: controla estados internos do componente (valores dinâmicos).

useEffect: executa efeitos colaterais (chamadas de API, manipulação de dados, etc).

📘 Documentação oficial dos Hooks:
<https://pt-br.react.dev/reference/react>

🧭 React Router DOM
O React Router DOM é a biblioteca responsável pela navegação entre páginas em aplicações React sem recarregar a página inteira.

Instalação:
bash
Copiar código
npm install react-router-dom
Com o React Router você cria rotas, links e navegação dinâmica.

📘 Documentação oficial:
<https://reactrouter.com/>

🔒 StrictMode
O StrictMode é um componente interno do React que ajuda a identificar potenciais problemas durante o desenvolvimento.

Ele não altera o comportamento da aplicação, apenas alerta sobre:

Código legado ou depreciado

Funções não seguras

Uso incorreto de Hooks

📘 Documentação do StrictMode:
<https://pt-br.react.dev/reference/react/StrictMode>

🧩 React DOM
O React DOM conecta o React ao DOM real do navegador.
A partir do React 18, utiliza-se a API createRoot (substituindo ReactDOM.render).

Instalação (caso não venha com o projeto):
bash
Copiar código
npm install react-dom
📘 Documentação oficial do ReactDOM:
<https://pt-br.react.dev/reference/react-dom>

🔨 Build e Deploy no GitHub Pages
Gerar a build:
bash
Copiar código
npm run build
Publicar no GitHub Pages:
Crie o repositório no GitHub

Edite o package.json adicionando:

json
Copiar código
"homepage": "https://SEU_USUARIO.github.io/NOME_DO_PROJETO",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
Instale a dependência:

bash
Copiar código
npm install --save-dev gh-pages
Execute o deploy:

bash
Copiar código
npm run deploy
📘 Documentação do GitHub Pages:
<https://docs.github.com/pt/pages>

💡 Comandos Git básicos
bash
Copiar código
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin git@github.com:SEU_USUARIO/SEU_REPO.git
git push -u origin main
📘 Documentação Git:
<https://git-scm.com/doc>

🔗 Recursos de Estudo
React — Documentação oficial:
<https://pt-br.react.dev/>

Vite — Documentação:
<https://vitejs.dev/>

Bootstrap — Documentação:
<https://getbootstrap.com/>

React Router — Documentação:
<https://reactrouter.com/>

npm — Documentação:
<https://www.npmjs.com/>

Universidade Livre (Ciência da Computação):
<https://github.com/Universidade-Livre/ciencia-da-computacao>

Banco de Atividades (Luís Ribeiro):
<https://luisribeiro1.github.io/banco-de-atividades>

🎯 Resumo Geral
Conceito	Descrição
Node.js / npm	Ambiente e gerenciador de pacotes para executar e instalar dependências
Vite	Ferramenta moderna para criação e build de projetos React
JSX	Extensão de sintaxe que mistura HTML e JavaScript
Hooks	Funções que gerenciam estado e efeitos nos componentes
StrictMode	Identifica erros e más práticas durante o desenvolvimento
React Router DOM	Sistema de rotas e navegação SPA                                                
Bootstrap	Framework CSS para estilização rápida
Git / GitHub Pages	Versionamento e publicação de projetos no GitHub