const FiltroPreco = ({ filtroPrecoMin, setFiltroPrecoMin, filtroPrecoMax, setFiltroPrecoMax }) => {

    return (
        <div className="mb-4 d-flex justify-content-betweeen">
            <span>
                <label htmlFor="precoMin" className="form-label">Preço Mínimo</label>
                <input
                    type="number"
                    id="preco_min"
                    className="form-control"
                    value={filtroPrecoMin}
                    onChange={(e) => setFiltroPrecoMin(e.target.value)}
                />
            </span>
            <span className="ms-2">
                <label htmlFor="precoMax" className="form-label">Máximo</label>
                <input
                    type="number"
                    id="preco_max"
                    className="form-control"
                    value={filtroPrecoMax}
                    onChange={(e) => setFiltroPrecoMax(e.target.value)}
                />
            </span>
        </div>
    )
}
export default FiltroPreco