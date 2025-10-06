// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function RapidApi() {
//   const [lista, setLista] = useState([])

//   const options = {
//     method: 'GET',
//     url: 'https://airports19.p.rapidapi.com/airport/code',
//     params: {q: 'VOMM'},
//     headers: {
//       'x-rapidapi-key': '1ea52f944emshef06e35ecf30dc9p140418jsn6a200e01cd6d',
//       'x-rapidapi-host': 'airports19.p.rapidapi.com'
//     }
//   };

//   useEffect(() => {
//     try {
//         const response = axios.request(options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
//   }, [])

//   return (
//     <div className="container mt-3">
//       <h2>Lista de Usuários</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Gênero</th>
//             <th>Nome</th>
//             <th>Localização</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {usuarios.map((usuario, index) => (
//             <tr key={index}>
//               <td>{usuario.gender}</td>
//               <td>{usuario.name.title} {usuario.name.first} {usuario.name.last}</td>
//               <td>{usuario.location.street.name}, {usuario.location.street.number}</td>
//             </tr>
//           ))} */}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default RapidApi
