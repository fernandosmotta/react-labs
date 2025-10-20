import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FiltroCategoria = ({ filtroCategoria, setFiltroCategoria }) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        // Função para buscar dados da API usando axios
        axios.get('http://127.0.0.1:8000/api/combo-categorias')
        .then((response) => setCategorias(response.data))
        .catch((error) => console.error('Erro ao carregar categorias:', error));

    }, []);

    return (
        <div className="mb-4">
            <label htmlFor="filtro-categoria">Categoria:</label>
            <select
                id="id_categoria"
                name="id_categoria"
                className="form-select"
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
            >
                <option value="">Todas</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id_categoria} value={categoria.id_categoria}>
                        {categoria.nome_categoria}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FiltroCategoria;
