export const FiltroPreco = ({ filtros, handleFiltroChange }) => {
    //const anos = Array.from({ length: 20 }, (_, i) => 2004 + i); // Gera anos de 2004 até 2023

    return (
        <div className="mb-4">
            <label htmlFor="preco_de">Preço:</label>
            <div className='d-flex justify-content-between'>
                <input
                    id="preco_de"
                    name="preco_de"
                    className="form-control me-2"
                    value={filtros.preco_de}
                    onChange={handleFiltroChange}
                />
                <input
                    id="preco_ate"
                    name="preco_ate"
                    className="form-control me-2"
                    value={filtros.preco_ate}
                    onChange={handleFiltroChange}
                />
               
            </div>
        </div>
    );
};

