import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../componentes/Header'

const Veiculos = () => {
  const [veiculos, setVeiculos] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/veiculos')
      .then((response) => setVeiculos(response.data))
      .catch((error) => console.error('Erro ao carregar veiculos:', error))
  }, [])

  const deletarVeiculo = (id) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir este veículo?')
    if (confirmacao) {
      axios.delete(`http://127.0.0.1:8000/api/veiculos/${id}`)
        .then(() => setVeiculos(veiculos.filter((veiculo) => veiculo.id_veiculo !== id)))
        .catch((error) => console.error('Erro ao deletar o veículo:', error))
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
            <span className="fs-5 fw-bold">VEÍCULOS</span>
            <Link to="/veiculos/novo" className="btn btn-sm btn-success">Novo Veículo</Link>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Ano</th>
                  <th>Cor</th>
                  <th className="text-end">Ações</th>
                </tr>
              </thead>
              <tbody>
                {veiculos.map((objVeiculo) => (
                  <tr key={objVeiculo.id_veiculo}>
                    <td>{objVeiculo.marca}</td>
                    <td>{objVeiculo.modelo}</td>
                    <td>{objVeiculo.ano}</td>
                    <td>{objVeiculo.cor}</td>
                    <td className="text-end">
                      <Link to={`/veiculos/editar/${objVeiculo.id_veiculo}`} className="btn btn-warning btn-sm me-2">Editar</Link>
                      <button onClick={() => deletarVeiculo(objVeiculo.id_veiculo)} className="btn btn-danger btn-sm">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Veiculos;
