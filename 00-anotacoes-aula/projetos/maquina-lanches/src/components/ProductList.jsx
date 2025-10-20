import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="card p-3 mb-3">
      <h2 className="h5">Produtos disponíveis</h2>
      <ul className="list-group">
        {products.map((p) => (
          <li
            key={p.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {p.id} - {p.name}
            </span>
            <span>
              R$ {p.price.toFixed(2)} ({p.stock} em estoque)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
