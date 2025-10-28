import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import './../App.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export default function ContatoList() {

    // Regra de Negócio
    const [contatos, setContatos] = useState([]);

    
    const excluirContato = async (id) => {
        await withReactContent(Swal).fire({
                title: "Deseja realmente excluir?",
                text: "Você não poderá reverter isso!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim",
                cancelButtonText: "Não",
            }).then( async (res) => {
            if (res.isConfirmed) {
                await api.delete(`/contatos/${id}`);
                carregarContatos();
            }
        });
    }
    

    const carregarContatos = async () => {
        const res = await api.get("/contatos");

        const listaOrdenada = res.data.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
        });

        setContatos(listaOrdenada);
    };

    useEffect(() => { carregarContatos(); }, []);



    const contatosAgrupados = contatos.reduce((grupos, contato) => {
        const primeiraLetra = contato.nome.charAt(0).toUpperCase();
        if (!grupos[primeiraLetra]) {
            grupos[primeiraLetra] = [];
        }

        grupos[primeiraLetra].push(contato);
        return grupos;
    }, {});



    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h4>Contatos</h4>
            </div>

            <div className="card-body">
                {Object.keys(contatosAgrupados).sort().map((letra) => (
                    <div key={letra} className="mb-4">
                        <h2 className="border-bottom pb-2 mb-3">{letra}</h2>
                        <div className="list-group">
                            {contatosAgrupados[letra].map((contato) => (
                                <div key={contato.id} className="list-group-item">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h5 className="mb-1">{contato.nome}</h5>
                                            <p className="mb-1">{contato.email}</p>
                                            <small>{contato.whatsapp}</small>
                                        </div>
                                        <div>
                                            <Link to={`/editar/${contato.id}`} className="btn btn-primary btn-sm me-2">Editar</Link>
                                            <button className="btn btn-danger btn-sm" onClick={() => excluirContato(contato.id)}>Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}