import { useState, useEffect } from "react";

export default function TarefasSimples() {

    // Aqui a regra de negocio
    const [listaDeTarefas, setListaDeTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    function adicionarTarefa() {
        setListaDeTarefas([...novaTarefa])
    }

    return (
        <>
            <div className="container">
                <div className="mt-5 bg-primary text-light p-1 rounded">
                    <h1 className="mb-3 mt-3">Tarefas Simples</h1>
                </div>
            </div>

            <div className="container mt-4">
                <div className="input-group mb-3">
                    <input type="text" 
                           className="form-control" 
                           placeholder="Digite a nova tarefa"
                           value={novaTarefa} 
                           onChange={(e) => setNovaTarefa(e.target.value)}
                    />

                    <button className="btn btn-primary" 
                            onClick={adicionarTarefa}>
                        Adicionar
                    </button>
                </div>


                <ul className="list-group text-start mt-2">

                    {listaDeTarefas.length == 0 && (
                        <li className="list-group-item text-center text-muted">Nenhuma tarefa adicionada</li>
                    )}


                    {listaDeTarefas.map((tarefa, index) => (
                        <li className="list-group-item">{tarefa}</li>
                    ))}
                </ul>
                
            </div>
        </>
    )
}