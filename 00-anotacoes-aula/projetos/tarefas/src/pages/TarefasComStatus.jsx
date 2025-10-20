import { useState, useEffect } from "react";

export default function TarefasComStatus() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefasComStatus");
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefasComStatus", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return;
    setTarefas([...tarefas, { nome: novaTarefa, status: "novo" }]);
    setNovaTarefa("");
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  function alterarStatus(index, novoStatus) {
    const listaAtualizada = tarefas.map((t, i) =>
      i === index ? { ...t, status: novoStatus } : t
    );
    setTarefas(listaAtualizada);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2 className="text-center mb-4">Lista de Tarefas com Status</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && adicionarTarefa()}
        />
        <button className="btn btn-success" onClick={adicionarTarefa}>
          Adicionar
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
            <span>
              <strong>{tarefa.nome}</strong> <br />
              <small className="text-muted">Status: {tarefa.status}</small>
            </span>

            <div className="d-flex align-items-center">
              <select
                className="form-select form-select-sm me-2"
                value={tarefa.status}
                onChange={(e) => alterarStatus(index, e.target.value)}
              >
                <option value="novo">Novo</option>
                <option value="em andamento">Em andamento</option>
                <option value="cancelada">Cancelada</option>
              </select>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removerTarefa(index)}
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
