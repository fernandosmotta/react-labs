import { useState, useEffect } from "react";

export default function Calculadora() {

    // Regra de negocio 
    const [valor1, setValor1] = useState("")
    const [valor2, setValor2] = useState("")
    const [operacao, setOperacao] = useState(""); // operação atual
    const [resultado, setResultado] = useState(""); // resultado da operação


     function calcular() {
        const num1 = Number(valor1);
        const num2 = Number(valor2);

        if (isNaN(num1) || isNaN(num2)) {
            setResultado("Valores inválidos");
            return;
        }

        let total = 0;

        switch (operacao) {
        case "+":
            total = num1 + num2;
        break;
        case "-":
            total = num1 - num2;
        break;
        case "*":
            total = num1 * num2;
        break;
        case "/":
            if (num2 === 0) {
            setResultado("Erro: divisão por zero");
            return;
            }
            total = num1 / num2;
        break;
        default:
            setResultado("Escolha uma operação");
        return;
        }

        setResultado(total);
    }

    function limpar() {
        setValor1("")
        setValor2("")
        setOperacao("")
        setResultado("")
    }


    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mt-4">Calculadora</h1>

                <div className="p-2 border border-info border-2 bg-light mb-3 rounded text-end">
                    <input
                    type="text"
                    className="form-control text-end fw-bold"
                    value={resultado}
                    readOnly
                    placeholder="Resultado"
                    />
                </div>

                <input type="number" className="form-control mb-2" placeholder="Informe o primeiro valor" value={valor1} onChange={(e) => setValor1(e.target.value)} />
                <input type="number" className="form-control mb-2" placeholder="Informe o segundo valor" value={valor2} onChange={(e) => setValor2(e.target.value)} />

                <div  iv className="d-flex justify-content-between mb-3">
                    <button className={`btn btn-outline-primary ${operacao === "+" ? "active" : ""}`} onClick={() => setOperacao("+")}> + </button>
                    <button className={`btn btn-outline-primary ${operacao === "-" ? "active" : ""}`} onClick={() => setOperacao("-")}> - </button>
                    <button className={`btn btn-outline-primary ${operacao === "*" ? "active" : ""}`} onClick={() => setOperacao("*")}> × </button>
                    <button className={`btn btn-outline-primary ${operacao === "/" ? "active" : ""}`} onClick={() => setOperacao("/")}> ÷ </button>
                </div>

                <div className="d-flex justify-content-between">
                    <button className="btn btn-success flex-fill me-2" onClick={calcular}> = </button>
                    <button className="btn btn-danger flex-fill" onClick={limpar}> C </button>
                </div>
            </div>
        </>
    )
}