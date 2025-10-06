import React from "react";
import VendingMachine from "./components/VendingMachine";

function App() {
  return (
    <div className="bg-light min-vh-100 py-4">
      <h1 className="text-center mb-4">Máquina de Lanches</h1>
      <VendingMachine />
    </div>
  );
}

export default App;
