import { useState, useEffect } from "react"

export default function TarefasSimples() {
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState("")

  // O useEffect permite executar código quando o componente é montado ou atualizado.
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefasSimples")
    console.log(tarefasSalvas)
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas))     // converte a string JSON de volta para um array/objeto
    }
  }, [])
  // O segundo parâmetro [] significa que esse código será executado somente uma vez, quando o componente for montado.

  useEffect(() => { 
    // Como tarefas é um array em JavaScript, usamos JSON.stringify(tarefas) para convertê-lo em texto no formato JSON.
    if (tarefas.length > 0) {
      localStorage.setItem("tarefasSimples", JSON.stringify(tarefas))
    }
  }, [tarefas])
  // será executado toda vez que a lista de tarefas mudar (quando você adiciona ou remove uma tarefa, por exemplo)


  function adicionarTarefa() {
    if (!novaTarefa.trim()) return

    setTarefas([...tarefas, novaTarefa]) // cria um novo array com as tarefas antigas + a nova tarefa
    setNovaTarefa("")
  }

  function removerTarefa(index) {
    // Cria uma nova lista sem a tarefa que está no índice recebido
    const listaAtualizada = tarefas.filter((tarefa, i) => {
      // Mantém todas as tarefas cujo índice é diferente do que queremos remover
      return i !== index;
    })

    // Atualiza o estado com a nova lista
    setTarefas(listaAtualizada)
  }

  function ordenarTarefas() {
    const listaOrdenada = [...tarefas].sort((a, b) => a.localeCompare(b));
    setTarefas(listaOrdenada);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Lista de Tarefas</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && adicionarTarefa()}
        />
        <button className="btn btn-primary" onClick={adicionarTarefa}>
          Adicionar
        </button>
        <button className="btn btn-warning btn-sm" onClick={ordenarTarefas}>
          Ordenar Tarefas
        </button>
      </div>



      <ul className="list-group">
        {tarefas.length === 0 && (
          <li className="list-group-item text-center text-muted">
            Nenhuma tarefa adicionada
          </li>
        )}
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {tarefa}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removerTarefa(index)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
