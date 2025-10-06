import React, { useState } from "react";
import productsData from "../data/products";
import ProductList from "./ProductList";
import ProductSelector from "./ProductSelector";
import PaymentForm from "./PaymentForm";
import SalesReport from "./SalesReport";

const VendingMachine = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sales, setSales] = useState([]);

  const handleSelect = (code) => {
    const product = products.find((p) => p.id === code);
    if (product && product.stock > 0) {
      setSelectedProduct(product);
    } else {
      alert("Produto inválido ou sem estoque!");
      setSelectedProduct(null);
    }
  };

  const handleConfirm = (method) => {
    if (selectedProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === selectedProduct.id ? { ...p, stock: p.stock - 1 } : p
        )
      );
      setSales((prev) => [
        ...prev,
        { name: selectedProduct.name, price: selectedProduct.price, method },
      ]);
      alert(`Produto ${selectedProduct.name} liberado!`);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <ProductList products={products} />

        </div>

        <div className="col-md-5">
          <ProductSelector onSelect={handleSelect} />
          <PaymentForm product={selectedProduct} onConfirm={handleConfirm} />          
          <SalesReport sales={sales} />
        </div>
      </div>
    </div>
  );
};

export default VendingMachine;
