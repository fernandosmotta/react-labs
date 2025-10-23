import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import './../App.css';

export default function LivroList() {

    // Regras de Negocio
    const [livros, setLivros] = useState([])

    useEffect(() => { carregarLivros() }, []);

    async function carregarLivros() {
        const res = await api.get();
        setLivros(res.data);
    }

    async function excluirLivro(id) {
        await api.delete(id);
        carregarLivros();
    }

    
    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h4>Livros no catálogo</h4>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr className="table-secondary">
                            <th>ID</th>
                            <th>Título</th>
                            <th>Página</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                        <tr key={livro.id}>
                            <td>{livro.id}</td>
                            <td>{livro.titulo}</td>
                            <td>{livro.paginas}</td>
                            <td>{livro.categoria}</td>
                            <td>{livro.descricao}</td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Link to={`/editar/${livro.id}`} className="btn btn-primary btn-sm me-1">Editar</Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => excluirLivro(livro.id)}>Excluir</button>
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
