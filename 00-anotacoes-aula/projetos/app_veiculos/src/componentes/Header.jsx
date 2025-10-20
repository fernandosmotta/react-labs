import React from 'react';
// import '../componentes/Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-white navbar-light shadow-sm mb-5">
      <div className="container">
        <a className="navbar-brand fs-3" href="#">APP <strong>VEÍCULOS</strong></a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">

          <div className="btn-group navbar-nav ms-auto">
            <a href="/categorias" className="nav-link">CATEGORIAS</a>
            <a href="/veiculos" className="nav-link">VEÍCULOS</a>
            <a href="/site" className="nav-link">SITE</a>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header;
