import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import './../App.css';


export default function ContatoList() {

    // Regra de Negócio
    const [contatos, setContatos] = useState([]);

    
    const excluirContato = async (id) => {
        await api.delete(`/contatos/${id}`);
        carregarContatos();
    }
    
    const carregarContatos = async () => {
        const res = await api.get("/contatos");

        const listaOrdenada = res.data.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
        });

        setContatos(listaOrdenada);
    };

    useEffect(() => { carregarContatos(); }, []);



    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h4>Contatos</h4>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr className="table-secondary">
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contatos.map((contato) => (
                        <tr key={contato.id}>
                            <td>{contato.id}</td>
                            <td>{contato.nome}</td>
                            <td>{contato.email}</td>
                            <td>{contato.whatsapp}</td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Link to={`/editar/${contato.id}`} className="btn btn-primary btn-sm me-2">Editar</Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => excluirContato(contato.id)}>Excluir</button>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}