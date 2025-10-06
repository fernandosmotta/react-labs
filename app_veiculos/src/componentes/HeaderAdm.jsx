import React from 'react';
// import '../componentes/Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-header navbar-dark mb-5">
      <div className="container">
        <a className="navbar-brand fs-3" href="#">APP <strong>VEÍCULOS</strong></a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">

          <div className="btn-group navbar-nav ms-auto">
            <a href="/categorias" className="btn btn-sm btn-outline-light">Categorias</a>
            <a href="/veiculos" className="btn btn-sm btn-outline-light">Veículos</a>
            <a href="/site" className="btn btn-sm btn-outline-light">Site</a>
            <a href="#" className="btn btn-sm btn-outline-light">Sair</a>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header;
