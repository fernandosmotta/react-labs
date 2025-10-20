import { useState, useEffect } from "react";

export default function TarefasKanban() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const colunas = [
    { status: "novo", titulo: "Novo", cor: "bg-warning bg-opacity-50" },
    { status: "em andamento", titulo: "Em andamento", cor: "bg-success bg-opacity-50" },
    { status: "concluida", titulo: "Concluída", cor: "bg-primary bg-opacity-25" },
  ];

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefasKanban");
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefasKanban", JSON.stringify(tarefas));
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

  function onDragStart(e, index) {
    e.dataTransfer.setData("tarefaIndex", index);
  }

  function onDrop(e, novoStatus) {
    const index = e.dataTransfer.getData("tarefaIndex");
    alterarStatus(Number(index), novoStatus);
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
      <h2 className="text-center mb-4">Kanban de Tarefas</h2>

      <div className="input-group mb-4">
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

      <div className="row g-3">
        {colunas.map((coluna) => (
          <div key={coluna.status} className="col-md-4">
            <div
              className={`p-3 border rounded ${coluna.cor}`}
              style={{ minHeight: "350px" }}
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, coluna.status)}
            >
              <h5 className="text-center mb-3">{coluna.titulo}</h5>
              {tarefas
                .filter((t) => t.status === coluna.status)
                .map((tarefa, index) => (
                  <div
                    key={index}
                    className="card mb-2 shadow-sm"
                    draggable
                    onDragStart={(e) =>
                      onDragStart(e, tarefas.indexOf(tarefa))
                    }
                  >
                    <div className="card-body p-2 d-flex justify-content-between align-items-center">
                      <span>{tarefa.nome}</span>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removerTarefa(tarefas.indexOf(tarefa))}
                      >
                        x
                      </button>
                    </div>
                  </div>
                ))}
              {tarefas.filter((t) => t.status === coluna.status).length === 0 && (
                <p className="text-muted text-center small">Sem tarefas</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
