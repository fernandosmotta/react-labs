import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserRandom() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(response => {
        console.log(response.data.results)
        setUsuarios(response.data.results)
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os usuarios!', error)
      })
  }, [])

  return (
    <div className="container mt-3">
      <h2>Lista de Usuários</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Gênero</th>
            <th>Nome</th>
            <th>Localização</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.gender}</td>
              <td>{usuario.name.title} {usuario.name.first} {usuario.name.last}</td>
              <td>{usuario.location.street.name}, {usuario.location.street.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserRandom;
