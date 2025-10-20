// src/components/AdicionarEditarContato.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AdicionarEditarContato() {
  const [contato, setContato] = useState({
    nome: '',
    idade: '',
    email: '',
    whatsapp: '',
    status: false
  })
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`https://limeiraweb.com.br/api/index.php/${id}`)
        .then(response => {
          setContato(response.data)
        })
        .catch(error => {
          console.error('Erro ao buscar os dados do contato!', error);
        });
    }

  }, [id]);
 

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    //const { name, value } = e.target;
    
    setContato(prevState => ({
      ...prevState,
      // [name]: value
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const valorStatus = contato.status == false ? 0 : 1
    const formData = {
      "nome": contato.nome,
      "idade": contato.idade,
      "email": contato.email,
      "whatsapp": contato.whatsapp,
      "status": valorStatus
    }
    console.log(formData)

    const method = id ? 'put' : 'post';
    const url = `https://limeiraweb.com.br/api/index.php${id ? `/${id}` : ''}`;
    console.log(formData)

    axios[method](url, formData)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao submeter o formulário!', error);
      });
  };

  return (
    <div className="container mt-3">
      <h2>{id ? 'Editar Contato' : 'Adicionar Contato'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={contato.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="idade" className="form-label">Idade</label>
          <input
            type="number"
            className="form-control"
            id="idade"
            name="idade"
            value={contato.idade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={contato.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
          <input
            type="text"
            className="form-control"
            id="whatsapp"
            name="whatsapp"
            value={contato.whatsapp}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="status"
            name="status"
            checked={contato.status == "0" ? false : true}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="status">Ativo</label>
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Atualizar' : 'Criar'}</button>
      </form>
    </div>
  );
}

export default AdicionarEditarContato;
