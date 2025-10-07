import { useState, useEffect } from "react";

export default function Calculadora() {

    // Regra de negocio 
    const [valor1, setValor1]       = useState("")
    const [valor2, setValor2]       = useState("")
    const [operacao, setOperacao]   = useState(""); 
    const [resultado, setResultado] = useState(""); 
    const [numero, setNumero]       = useState(0);
    const [campoAtivo, setCampoAtivo] = useState(1)


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
        toogleInput();
    }

    function limpar() {
        setValor1("")
        setValor2("")
        setOperacao("")
        setResultado("")
        setCampoAtivo(1);
    }


    function tipoOperacao(op) {
        setOperacao(op)
        toogleInput();
    }

    function digitarNumero(num) {
        if(campoAtivo == 1) {
            setValor1(valor1 + num)
        } else {
            setValor2(valor2 + num)
        }
    }

    function toogleInput() {
        setCampoAtivo( campoAtivo == 1 ? 2 : 1 )
    }




    return (
        <>
            <div className="container mt-5" style={{ maxWidth: "500px" }}>
                <h1 className="text-center pt-2 pb-2">Calculadora</h1>

                {/* Resultado */}
                <div className="p-2 border border-info border-2 bg-light mb-3 rounded text-end">
                    <input type="text" className="form-control text-end fw-bold p-3 fs-2" value={resultado} readOnly placeholder="Resultado" style={{ background: "#f0f2f5" }} />
                </div>


                {/* Campos para inserir os valores */}
                <input type="number" className="form-control mb-2" placeholder="Informe o primeiro valor" value={valor1} onChange={(e) => setValor1(e.target.value)} />
                <input type="number" className="form-control mb-2" placeholder="Informe o segundo valor" value={valor2} onChange={(e) => setValor2(e.target.value)} />


                {/* Botões de Operações */}
                <div className="d-flex justify-content-between mb-5 mt-4">
                    <button className={`btn btn-outline-primary  me-3 flex-fill ${operacao === "+" ? "active" : ""}`} onClick={() => tipoOperacao("+")}> + </button>
                    <button className={`btn btn-outline-primary ms-3 me-3 flex-fill ${operacao === "-" ? "active" : ""}`} onClick={() => tipoOperacao("-")}> - </button>
                    <button className={`btn btn-outline-primary ms-3 me-3 flex-fill ${operacao === "*" ? "active" : ""}`} onClick={() => tipoOperacao("*")}> × </button>
                    <button className={`btn btn-outline-primary ms-3 flex-fill ${operacao === "/" ? "active" : ""}`} onClick={() => tipoOperacao("/")}> ÷ </button>
                </div>
             


                {/* Numeros e opções de operações como (Calcular e Limpar) */}
                <div>
                    <div className="d-flex justify-content-between mb-3 mt-3">
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("9")}>9</button>
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("8")}>8</button>
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("7")}>7</button>
                    </div>
                    <div className="d-flex justify-content-between mb-3 mt-3">
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("4")}>4</button>
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("5")}>5</button>
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("6")}>6</button>
                    </div>
                    <div className="d-flex justify-content-between mb-3 mt-3">
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("1")}>1</button>
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("2")}>2</button>
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("3")}>3</button>
                    </div>
                    <div className="d-flex justify-content-between mb-3 mt-4">
                        <button className="btn btn-outline-secondary ms-1 me-1 flex-fill" onClick={() => digitarNumero("0")}>0</button>
                        <button className="btn btn-success ms-1 me-1 flex-fill" onClick={calcular}> = </button>
                        <button className="btn btn-danger ms-1 me-1 flex-fill" onClick={limpar}> C </button>
                    </div>
                </div>
            </div>
        </>
    )
}
