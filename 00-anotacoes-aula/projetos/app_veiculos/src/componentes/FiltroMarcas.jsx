const FiltroMarca = ({filtroMarca, setFiltroMarca}) => {

    return (
    <div className="mb-4">
        <label htmlFor="filtro-marca">Marca:</label>
        <select
            id="marca"
            name="marca"
            className="form-select"
            value={filtroMarca}
            onChange={(e) => setFiltroMarca(e.target.value)}
        >
            <option value="">Todas</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Renault">Renault</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Fiat">Fiat</option>
            <option value="Nissan">Nissan</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Peugeot">Peugeot</option>
        </select>
    </div>
    )
}
export default FiltroMarca