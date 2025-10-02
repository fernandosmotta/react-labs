import { useState, useEffect } from "react";

export default function Calculadora() {

    // Regra de negocio 
    const [valor1, setValor1] = useState("")
    const [valor2, setValor2] = useState("")
    const [soma, setSoma] = useState("");


    function calcular() {
        const total = Number(valor1) + Number(valor2)
        setSoma(total)
    }


    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mt-4">Calculadora</h1>

                <div className="p-2 border border-info border-2 bg-info mb-3"> 
                    <input type="number" className="form-control" value={soma} readOnly />
                </div>
                <input type="number" className="form-control mt-1" placeholder="Informe o primeiro valor" value={valor1} onChange={(e) => setValor1(e.target.value)} />
                <input type="number" className="form-control mt-1" placeholder="Informe o segundo valor" value={valor2} onChange={(e) => setValor2(e.target.value)} />

                <button className="btn btn-primary mt-3" onClick={calcular}>calcular</button>
            </div>

            

        </>
    )
}