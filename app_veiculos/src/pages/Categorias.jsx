import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../componentes/Header'

const Categorias = () => {
  const [categorias, setCategorias] = useState([])

  // Adicione o cabeçalho de autenticação
  // const token = localStorage.getItem("token");
  const token = "0b0d4ed8546af2d420ce39d7cabcce04e9691efda5a0f7b17aa9f6a3401abbc63de618f12bf36de5";
  const authHeader = {
    headers: {
      // Authorization: `Basic ${btoa('admin@example.com:password')}`,
      Authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categorias', authHeader)
      .then((response) => setCategorias(response.data))
      .catch((error) => console.error('Erro ao carregar categorias:', error));
  }, [])

  const deletarCategoria = (id) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir esta categoria?');
    if (confirmacao) {
      axios.delete(`http://127.0.0.1:8000/api/categorias/${id}`, authHeader)
        .then(() => setCategorias(categorias.filter((categoria) => categoria.id_categoria !== id)))
        .catch((error) => console.error('Erro ao deletar categoria:', error));
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>

      <div className="container">
        <div className="card">
          <div className="card-header d-flex justify-content-between py-3">
            <span className="fs-5 fw-bold">CATEGORIAS</span>
            <Link to="/categorias/nova" className="btn btn-sm btn-success">Nova Categoria</Link>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Status</th>
                  <th className="text-end">Ações</th>
                </tr>
              </thead>
              <tbody>
                {categorias.map((categoria) => (
                  <tr key={categoria.id_categoria}>
                    <td>{categoria.id_categoria}</td>
                    <td>{categoria.nome_categoria}</td>
                    <td>{categoria.status ? 'Ativo' : 'Inativo'}</td>
                    <td className="text-end">
                      <Link to={`/categorias/editar/${categoria.id_categoria}`} className="btn btn-warning btn-sm me-2">Editar</Link>
                      <button onClick={() => deletarCategoria(categoria.id_categoria)} className="btn btn-danger btn-sm">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Categorias
