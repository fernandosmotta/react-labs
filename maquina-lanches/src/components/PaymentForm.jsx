import React, { useState } from "react";

const PaymentForm = ({ product, onConfirm }) => {
  const [method, setMethod] = useState("dinheiro");

  const handlePay = () => {
    if (product) {
      onConfirm(method);
    }
  };

  return (
    <div className="card p-3 mb-3">
      <h2 className="h5">Pagamento</h2>
      {product ? (
        <>
          <p>
            Você selecionou: <strong>{product.name}</strong> - R${" "}
            {product.price.toFixed(2)}
          </p>
          <label className="form-label">Forma de pagamento:</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="form-select mb-2"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao">Cartão</option>
            <option value="pix">Pix</option>
          </select>
          <button onClick={handlePay} className="btn btn-success">
            Confirmar
          </button>
        </>
      ) : (
        <p>Selecione um produto primeiro.</p>
      )}
    </div>
  );
};

export default PaymentForm;
