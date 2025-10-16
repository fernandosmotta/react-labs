import { useState, useEffect } from "react";
import axios from "axios"

export default function LivroList() {

    // Regras de Negocio
    const [livros, setLivros] = useState([])

    ayns

    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h4>Livros no catálogo</h4>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Página</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Clean Code</td>
                            <td>450</td>
                            <td>Conhecimento</td>
                            <td>Livro que fala sobre arquitetura Limpa</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Clean Code</td>
                            <td>450</td>
                            <td>Conhecimento</td>
                            <td>Livro que fala sobre arquitetura Limpa</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}