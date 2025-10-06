// src/components/AdicionarEditarContato.js
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function AdicionarEditarContato() {
  const [contato, setContato] = useState({
    nome: '',
    idade: '',
    email: '',
    whatsapp: '',
    status: false
  });
  const [erros, setErros] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost/api/${id}`)
        .then(response => {
          setContato(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar os dados do contato!', error);
        });
    }
  }, [id]);

  const validarFormulario = () => {
    let errosTemp = {};
    if (!contato.nome) errosTemp.nome = 'O nome é obrigatório.';
    if (!contato.idade || contato.idade < 0) errosTemp.idade = 'A idade deve ser um número positivo.';
    if (!contato.email.includes('@')) errosTemp.email = 'O email deve ser válido.';
    if (!contato.whatsapp) errosTemp.whatsapp = 'O WhatsApp é obrigatório.';
    setErros(errosTemp);
    return Object.keys(errosTemp).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setContato(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Limpa os erros ao modificar o campo
    if (erros[name]) {
      setErros(prevErros => ({
        ...prevErros,
        [name]: null
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      const method = id ? 'put' : 'post';
      const url = `http://localhost/api${id ? `/${id}` : ''}`;
      
      axiosmethod
        .then(() => {
          history.push('/');
        })
        .catch(error => {
          console.error('Erro ao submeter o formulário!', error);
        });
    }
  };

  return (
    <div className="container mt-3">
      <h2>{id ? 'Editar Contato' : 'Adicionar Contato'}</h2>
      <form onSubmit={handleSubmit}>
        {/* ...outros campos do formulário... */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${erros.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={contato.email}
            onChange={handleChange}
            required
          />
          {erros.email && <div className="invalid-feedback">{erros.email}</div>}
        </div>
        {/* ...outros campos do formulário... */}
        <button type="submit" className="btn btn-primary">{id ? 'Atualizar' : 'Criar'}</button>
      </form>
    </div>
  );
}

export default AdicionarEditarContato;
