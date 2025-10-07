import { useState, useEffect } from "react";

export default function TarefasComStatus() {

    // Aqui a regra de negocio
    const [listaDeTarefas, setListaDeTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    // ------------------------------------------------------
    // # Leitura das tarefas do localStorage
    // ------------------------------------------------------

    /**
     * http://limeiraweb.com.br/api/tarefas     => GET
     * http://limeiraweb.com.br/api/tarefas     => POST     => { "nome": "Tarefa de Teste", "status": "novo"}
     * http://limeiraweb.com.br/api/tarefas/27  => PUT      => { "nome": "Tarefa de Teste", "status": "novo"}
     * http://limeiraweb.com.br/api/tarefas/27  => DELETE   
     */


    useEffect(() => {
        const endpoint = "http://limeiraweb.com.br/api/tarefas";

        fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }
           
            return response.json();
        })
        .then((data) => setListaDeTarefas(data))
        .catch((error) => console.error('Erro:', error));
    }, []);
    // O segundo parâmetro [] indica que este código será executado apenas uma vez, quando a página for carregada


    // ------------------------------------------------------
    // # Persistir os dados localmente
    // ------------------------------------------------------
    
    // Executar sempre que a "listaDeTarefas" for alterada.
    useEffect(() => {
        if(listaDeTarefas.length > 0) {
            /**
             * Como a listaDeTarefas é um array em JS, o JSON.stringify
             * é utilizado para converter em formato de texto (json)
             */
            localStorage.setItem("tarefasSimples", JSON.stringify(listaDeTarefas))
        }
    }, [listaDeTarefas])
    

    

    // adiciona uma nova tarefa
    function adicionarTarefa() {
        if(novaTarefa.trim() == "") { // Caso não for digitado nada
            return
        }

        setListaDeTarefas([...listaDeTarefas, novaTarefa])
        setNovaTarefa("");
    }

    // Dispara quando clicar no botão 'ENTER' dentro do input
    function confirmaBotaoEnter(e) {
        if(e.key === 'Enter') {
            adicionarTarefa();
        }
    }

    // Remove todas as tarefas da lista
    function limparTarefa() {
        setListaDeTarefas([])
    }

    // Remove apenas uma tarefa da lista
    function removerTarefa(index) {
        // Cria uma nova lista sem a tarefa que está no indice recebido
        const listaAtualizada = listaDeTarefas.filter((tarefa, i) => {
            return i != index
        });
        
        // adiciona o estado com a nova lista
        setListaDeTarefas(listaAtualizada)
    }

    function ordenarTarefas() {
        const listaOrdenada = [...listaDeTarefas].sort((a,b) => a.localeCompare(b))
        setListaDeTarefas(listaOrdenada)
    }



    return (
        <>
            <div className="container">
                <div className="mt-5 bg-primary text-light p-1 rounded">
                    <h1 className="mb-3 mt-3">Tarefas com acesso API</h1>
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

                    <button className="btn btn-primary" 
                            onClick={adicionarTarefa}>
                        Adicionar
                    </button>
                    <button className="btn btn-info"
                            onClick={ordenarTarefas}>
                        Ordenar
                    </button>
                    <button className="btn btn-danger"
                            onClick={limparTarefa}>
                        Limpar
                    </button>
                </div>


                <ul className="list-group text-start mt-2">

                    {listaDeTarefas.length == 0 && (
                        <li className="list-group-item text-center text-muted">Nenhuma tarefa adicionada</li>
                    )}


                    {listaDeTarefas.map((tarefa, index) => (
                        <li 
                            key={index} 
                            className="list-group-item d-flex justify-content-between"
                        >
                            {tarefa}
                            <button className="btn btn-danger btn-sm"
                                    onClick={() => removerTarefa(index)}>
                                Remover
                            </button>
                        </li>
                    ))}

                </ul>
                
            </div>
        </>
    )
}