import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../componentes/Header'
import { formatarPreco, formatarNumero } from '../componentes/utilitarios'
import FiltroMarca from '../componentes/FiltroMarcas'
import FiltroPreco from '../componentes/FiltroPreco'
import FiltroCategoria from '../componentes/FiltroCategorias'

const Site = () => {
    const [veiculos, setVeiculos] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState('')
    const [filtroMarca, setFiltroMarca] = useState('')
    const [filtroPrecoMin, setFiltroPrecoMin] = useState('')
    const [filtroPrecoMax, setFiltroPrecoMax] = useState('')

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/site')
            .then((response) => setVeiculos(response.data))
            .catch((error) => console.error('Erro ao carregar veículos:', error));
    }, []);

    const filtrarVeiculos = () =>{
        const params = {}   // Este nome de variável é obrigatorio

        if (filtroCategoria) params.id_categoria = filtroCategoria
        if (filtroMarca) params.marca = filtroMarca
        if (filtroPrecoMin) params.preco_min = filtroPrecoMin
        if (filtroPrecoMax) params.preco_max = filtroPrecoMax
        console.log(params)
        
        axios.get('http://127.0.0.1:8000/api/site', {params})
            .then((response) => setVeiculos(response.data))
            .catch((error) => console.error('Erro ao carregar veículos:', error));        
            
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Header />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="bg-success py-2 px-4 text-light fw-bold rounded-top">
                            FILTROS
                        </div>                        
                        <div className="bg-success-subtle p-4 rounded-bottom">
                            <FiltroCategoria filtroCategoria={filtroCategoria} setFiltroCategoria={setFiltroCategoria} />
                            <FiltroMarca filtroMarca={filtroMarca} setFiltroMarca={setFiltroMarca} />
                            <FiltroPreco filtroPrecoMin={filtroPrecoMin} setFiltroPrecoMin={setFiltroPrecoMin} filtroPrecoMax={filtroPrecoMax} setFiltroPrecoMax={setFiltroPrecoMax} />
                            <button className="btn btn-primary w-100" onClick={filtrarVeiculos}>Filtrar</button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {veiculos.map((objVeiculo) => (
                                <div className="col-md-4" key={objVeiculo.id_veiculo}>
                                    <div className="card mb-4">
                                        <img src={objVeiculo.foto} className='card-img-top' alt={objVeiculo.modelo} />
                                        <div className="card-body">
                                            <span className="fw-bold text-uppercase">{objVeiculo.marca} {objVeiculo.modelo}</span>
                                            <br></br>
                                            <small>{objVeiculo.ano} | {objVeiculo.cor} | {objVeiculo.combustivel} | {formatarNumero(objVeiculo.quilometragem)} km</small>
                                            <p className="fw-bold text-danger fs-5">{formatarPreco(objVeiculo.preco)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Site;
