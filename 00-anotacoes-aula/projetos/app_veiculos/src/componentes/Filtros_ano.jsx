export const FiltroAno = ({ filtros, handleFiltroChange }) => {
    const anos = Array.from({ length: 20 }, (_, i) => 2004 + i); // Gera anos de 2004 até 2023

    return (
        <div className="mb-4">
            <label htmlFor="filtro-ano">Ano:</label>
            <div className='d-flex justify-content-between'>
                <select
                    id="filtro-ano"
                    name="ano_de"
                    className="form-control me-2"
                    value={filtros.ano}
                    onChange={handleFiltroChange}
                >
                    <option value="">De</option>
                    {anos.map((ano) => (
                        <option key={ano} value={ano}>
                            {ano}
                        </option>
                    ))}
                </select>
                <select
                    id="filtro-ano"
                    name="ano_ate"
                    className="form-control"
                    value={filtros.ano}
                    onChange={handleFiltroChange}
                >
                    <option value="">Até</option>
                    {anos.map((ano) => (
                        <option key={ano} value={ano}>
                            {ano}
                        </option>
                    ))}
                </select>                
            </div>
        </div>
    );
};
