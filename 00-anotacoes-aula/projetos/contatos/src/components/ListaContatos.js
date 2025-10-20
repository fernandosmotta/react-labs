// src/components/ListaContatos.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from "react-icons/bs"
import { BsPencilSquare } from "react-icons/bs"

function ListaContatos() {
  const [contatos, setContatos] = useState([])

  useEffect(() => {
    axios.get('https://limeiraweb.com.br/api/index.php')
      .then(response => {
        setContatos(response.data)
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os contatos!', error)
      })
  }, [])

  const excluirContato = (id) => {
    const confirmacao = window.confirm("Tem certeza que deseja excluir este contato?")
    if (confirmacao) {
      axios.delete(`https://limeiraweb.com.br/api/index.php/${id}`)
        .then(() => {
          setContatos(contatos.filter(contato => contato.idContato !== id))
        })
        .catch(error => {
          console.error('Houve um erro ao excluir o contato!', error);
        })
    }
  }

  return (
    <div className="container mt-3">
      <h2>Lista de Contatos</h2>
      <Link to="/contato" className="btn btn-primary mb-2">Adicionar Contato</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>WhatsApp</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contatos.map(contato => (
            <tr key={contato.idContato}>
              <td>{contato.idContato}</td>
              <td>{contato.nome}</td>
              <td>{contato.idade}</td>
              <td>{contato.email}</td>
              <td>{contato.whatsapp}</td>
              <td>{contato.status == "1" ? 'Ativo' : 'Inativo'}</td>
              <td>
                <Link to={`/contato/${contato.idContato}`} className="btn btn-warning"><BsPencilSquare /></Link> &nbsp;
                <button onClick={() => excluirContato(contato.idContato)} className="btn btn-danger"><BsFillTrashFill /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaContatos;
