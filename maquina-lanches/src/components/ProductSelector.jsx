import React, { useState } from "react";

const ProductSelector = ({ onSelect }) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code) {
      onSelect(Number(code));
      setCode("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <label className="form-label">Digite o código do produto:</label>
      <div className="input-group">
        <input
          type="number"
          className="form-control"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Selecionar
        </button>
      </div>
    </form>
  );
};

export default ProductSelector;
