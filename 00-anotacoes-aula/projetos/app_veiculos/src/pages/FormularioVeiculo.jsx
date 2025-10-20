import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../componentes/Header';

const FormularioVeiculo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [combustivel, setCombustivel] = useState('');
  const [quilometragem, setQuilometragem] = useState('');
  const [preco, setPreco] = useState('');
  const [idCategoria, setIdCategoria] = useState('');
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Carregar categorias para o select
    axios.get('http://127.0.0.1:8000/api/combo-categorias')
      .then((response) => setCategorias(response.data))
      .catch((error) => console.error('Erro ao carregar categorias:', error));

      console.log(categorias);
    // Carregar veículo se estiver editando
    if (id) {
      axios.get(`http://127.0.0.1:8000/api/veiculos/${id}`)
        .then((response) => {
          const veiculo = response.data;
          setMarca(veiculo.marca);
          setModelo(veiculo.modelo);
          setAno(veiculo.ano);
          setCor(veiculo.cor);
          setCombustivel(veiculo.combustivel);
          setQuilometragem(veiculo.quilometragem);
          setPreco(veiculo.preco);
          setIdCategoria(veiculo.id_categoria);
        })
        .catch((error) => console.error('Erro ao carregar veículo:', error));
    }
  }, [id]);

  const salvarVeiculo = (e) => {
    e.preventDefault();
    const veiculo = {
      marca,
      modelo,
      ano,
      cor,
      combustivel,
      quilometragem,
      preco,
      id_categoria: idCategoria,
    };

    if (id) {
      axios.put(`http://127.0.0.1:8000/api/veiculos/${id}`, veiculo)
        .then(() => navigate('/veiculos'))
        .catch((error) => console.error('Erro ao atualizar veículo:', error));
    } else {
      axios.post('http://127.0.0.1:8000/api/veiculos', veiculo)
        .then(() => navigate('/veiculos'))
        .catch((error) => console.error('Erro ao criar veículo:', error));
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="container">

          <div className="card">
            <div className="card-header d-flex justify-content-between py-3">
              <span className="fs-5 fw-bold">{id ? 'EDITAR VEÍCULO' : 'NOVO VEÍCULO'}</span>
            </div>
            <div className="card-body">

              <form onSubmit={salvarVeiculo}>
              <div className="row">
                <div className="mb-3 col-md-4">
                  <label htmlFor="marca" className="form-label">Marca</label>
                  <input
                    id="marca"
                    type="text"
                    className="form-control"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 col-md-4">
                  <label htmlFor="modelo" className="form-label">Modelo</label>
                  <input
                    id="modelo"
                    type="text"
                    className="form-control"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 col-md-4">
                  <label htmlFor="ano" className="form-label">Ano</label>
                  <input
                    id="ano"
                    type="number"
                    className="form-control"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 col-md-4">
                  <label htmlFor="cor" className="form-label">Cor</label>
                  <input
                    id="cor"
                    type="text"
                    className="form-control"
                    value={cor}
                    onChange={(e) => setCor(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 col-md-4">
                  <label htmlFor="combustivel" className="form-label">Combustível</label>
                  <input
                    id="combustivel"
                    type="text"
                    className="form-control"
                    value={combustivel}
                    onChange={(e) => setCombustivel(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 col-md-4">
                  <label htmlFor="quilometragem" className="form-label">Quilometragem</label>
                  <input
                    id="quilometragem"
                    type="number"
                    className="form-control"
                    value={quilometragem}
                    onChange={(e) => setQuilometragem(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 col-md-4">
                  <label htmlFor="preco" className="form-label">Preço</label>
                  <input
                    id="preco"
                    type="number"
                    step="0.01"
                    className="form-control"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 col-md-4">
                  <label htmlFor="categoria" className="form-label">Categoria</label>
                  <select
                    id="categoria"
                    className="form-select"
                    value={idCategoria}
                    onChange={(e) => setIdCategoria(e.target.value)}
                    required
                  >
                    <option value="">Selecione uma categoria</option>
                    {categorias.map((categoria) => (
                      <option key={categoria.id_categoria} value={categoria.id_categoria}>
                        {categoria.nome_categoria}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-4">
                    <button type="submit" className="btn btn-success">Salvar</button>
                    <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/veiculos')}>Cancelar</button>
                  </div>
                </div>
                
              </div>
              </form>

            </div>
          </div>

      </div>
    </div>
  );
};

export default FormularioVeiculo;
