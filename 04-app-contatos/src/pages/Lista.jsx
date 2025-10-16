import { useState, useEffect } from "react";
import axios from "axios"


// banco de dados 
import contatos from "./../api/contatos";


export default function Lista() {

    // regra de negocio
    const [listaContatos, setListaContatos] = useState([])

    async function carregarContatos() {
        //const res = await axios.get(contatos)
        //setListaContatos(res.data)

        setListaContatos(contatos)
    }

    useEffect(() => { carregarContatos() }, [])


    function editarContato(id) {}

    function removerContato(id) {}



    return (
        <>
            <h1>Lista de Contato</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Whatsapp</th>
                        <th>E-mail</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                {listaContatos.map((contatos) => (
                    <tr>
                        <td>{contatos.nome}</td>
                        <td>{contatos.whatsapp}</td>
                        <td>{contatos.email}</td>
                        <td className="text-end pe-4">
                            <button className="btn btn-info btn-sm me-1" onClick={() => editarContato(tarefa.id)}>Remover</button>
                            <button className="btn btn-danger btn-sm" onClick={() => removerContato(tarefa.id)}><i className="bi bi-trash3-fill"></i></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}