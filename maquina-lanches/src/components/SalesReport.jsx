import React from "react";

const SalesReport = ({ sales }) => {
  const total = sales.reduce((acc, s) => acc + s.price, 0);

  return (
    <div className="card p-3">
      <h2 className="h5">Relatório de Vendas</h2>
      {sales.length === 0 ? (
        <p>Nenhuma venda registrada.</p>
      ) : (
        <>
          <ul className="list-group mb-2">
            {sales.map((s, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{s.name}</span>
                <span>
                  R$ {s.price.toFixed(2)} ({s.method})
                </span>
              </li>
            ))}
          </ul>
          <p className="fw-bold">Total arrecadado: R$ {total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default SalesReport;
