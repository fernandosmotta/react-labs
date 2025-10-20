import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function LivroForm() {

    // Regras de Negocio


    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h1>Formulário</h1>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label for="titulo" className="fw-bold mb-1">Título:</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Digite o título do livro" />
                    </div>
                    <div className="form-group mt-3">
                        <label for="paginas" className="fw-bold mb-1">Páginas:</label>
                        <input type="number" className="form-control" id="paginas" placeholder="Digite o número de páginas" />
                    </div>
                    <div className="form-group mt-3">
                        <label for="categoria" className="fw-bold mb-1">Categoria:</label>
                        <input type="text" className="form-control" id="categoria" placeholder="Digite a categoria do livro" />
                    </div>
                    <div className="form-group mt-3">
                        <label for="descricao" className="fw-bold mb-1">Descrição:</label>
                        <textarea className="form-control" id="descricao" rows="4" placeholder="Digite a descrição do livro"></textarea>
                    </div>

                    <div className="form-group mt-4">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
} 