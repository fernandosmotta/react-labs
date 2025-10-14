import { useState, useEffect } from "react";
import axios from "axios";


export default function TarefasAPI() {

    // Aqui a regra de negocio
    const [listaDeTarefas, setListaDeTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")


    /**
     * Endereço do endpoint da API
     * ----------------------------------------------------------------------------------------------------------------
     * http://limeiraweb.com.br/api/tarefas     => GET
     * http://limeiraweb.com.br/api/tarefas     => POST     => { "nome": "Tarefa de Teste", "status": "novo"}
     * http://limeiraweb.com.br/api/tarefas/27  => PUT      => { "nome": "Tarefa de Teste", "status": "novo"}
     * http://limeiraweb.com.br/api/tarefas/27  => DELETE   
     * ----------------------------------------------------------------------------------------------------------------
     */
    const API_URL = "http://limeiraweb.com.br/api/tarefas"


    /**
     * -----------------------------------------------------------
     * Funções Relacionado ao CRUD
     * -----------------------------------------------------------
     */

    // Função para leitura dos dados da API
    async function carregarTarefas() {
        const resultado = await axios.get(API_URL)
        setListaDeTarefas(resultado.data);
    };

    // Função para adicionar uma nova tarefa pela API
    async function adicionarTarefa() {
        if(novaTarefa.trim() == "") { // Caso não for digitado nada
            return
        }

        await axios.post(API_URL, { nome: novaTarefa, status: "Novo" });

        setNovaTarefa("");
        carregarTarefas();
    }

    // Função para remover uma tarefa da API
    async function removerTarefa(idTarefa) {
        await axios.delete(`${API_URL}/${idTarefa}`)
        carregarTarefas()
    }

    // Função para editar dados de uma tarefa da API
    async function editarTarefa(idTarefa, Tarefa) {
        await axios.put(`${API_URL}/${idTarefa}`, {nome: `${Tarefa} - Editado`, status: "Editado"})
        carregarTarefas()
    }


    // Será execudado no carregamento da página 
    useEffect(() => {
        carregarTarefas()
    }, []);
    // O segundo parâmetro [] indica que este código será executado apenas uma vez, quando a página for carregada


    /**
     * -----------------------------------------------------------
     * Funções Auxiliares
     * -----------------------------------------------------------
     */

    // Dispara quando clicar no botão 'ENTER' dentro do input
    function confirmaBotaoEnter(e) {
        if(e.key === 'Enter') {
            adicionarTarefa();
        }
    }




    return (
        <>
            <div className="container">
                <div className="mt-5 bg-primary text-light p-1 rounded">
                    <h1 className="mb-3 mt-3">Tarefas com acesso a API</h1>
                </div>
            </div>

            <div className="container mt-4">
                <div className="input-group mb-3">
                    <input type="text" 
                           className="form-control" 
                           placeholder="Digite a nova tarefa"
                           value={novaTarefa} 
                           onChange={(e) => setNovaTarefa(e.target.value)}
                           onKeyDown={confirmaBotaoEnter}
                    />

                    <button className="btn btn-primary" onClick={adicionarTarefa}> Adicionar</button>
                </div>


                <ul className="list-group text-start mt-2">
                    {listaDeTarefas.length == 0 && (
                        <li className="list-group-item text-center text-muted">Nenhuma tarefa adicionada</li>
                    )}

                    {listaDeTarefas.map((tarefa, index) => (
                        <li key={tarefa.id} className="list-group-item d-flex justify-content-between">
                            <div>
                                <span className="badge bg-warning text-dark me-3">{tarefa.status}</span>
                                {tarefa.nome}
                            </div>
                            
                            <div>
                                <button className="btn btn-info btn-sm me-1" onClick={() => editarTarefa(tarefa.id, tarefa.nome)}>Editar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => removerTarefa(tarefa.id)}>Remover</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}