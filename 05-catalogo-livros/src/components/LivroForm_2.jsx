import { useState, useEffect, use } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api";

export default function LivroForm_2() {

    // Regras de Negocio
    const [titulo, setTitulo]       = useState("");
    const [pagina, setPagina]       = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");

    const { id }   = useParams();     // Recupera o id da URL
    const navigate = useNavigate(); // Hook para navegação programática



    const [alert, setAlert] = useState([]);

    async function salvarLivro() {
        
        const temErrosValidacao = await validarDados();

        if( temErrosValidacao ) {
            setAlert({class: 'danger', mensagem: temErrosValidacao})
            return false;
        }

        dados = {
            "titulo": titulo,
            "paginas": pagina,
            "categoria": categoria,
            "descricao": descricao
        }

        const res = await api.post(dados)
    }

    function validarDados() {
        setAlert([])
        
        if(titulo.length === 0)
            return "O campo título é obrigatório.";

        if(categoria.length === 0)
            return "O campo categoria é obrigatório.";

        if(descricao.length === 0)
            return "O campo descrição é obrigatório.";

        return false;
    }


    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h1>{id ? "Editar Livro" : "Adicionar Livro"}</h1>
            </div>
            <div className="card-body">
                
                {alert && alert.mensagem ? (
                <div className={`alert alert-${alert.class} mt-3 mb-3`}>
                    <span>{alert.mensagem}</span>
                </div>
                ) : null}

                <form onSubmit={(e) => { e.preventDefault(); salvarLivro(); }}>
                    <div className="form-group">
                        <label htmlFor="titulo" className="fw-bold mb-1">Título:</label>
                        <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6 form-group mt-3">
                            <label htmlFor="paginas" className="fw-bold mb-1">Páginas:</label>
                            <input type="number" className="form-control" id="paginas" value={pagina} onChange={(e) => setPagina(Number(e.target.value) || 0)} required />
                        </div>
                        <div className="col-md-6 form-group mt-3">
                            <label htmlFor="categoria" className="fw-bold mb-1">Categoria:</label>
                            <input type="text" className="form-control" id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
                        </div>
                    </div>
                    
                    
                    <div className="form-group mt-3">
                        <label htmlFor="descricao" className="fw-bold mb-1">Descrição:</label>
                        <textarea className="form-control" id="descricao" rows="4" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>

                    <div className="form-group mt-4">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                        <Link to="/" className="btn btn-secondary ms-2">Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
} 