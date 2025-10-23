import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api.js";

export default function ContatoForm() {
    const [nome, setNome]         = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail]       = useState("");

    const { id } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
            const carregarContato = async () => {
                const res  = await api.get(`/contatos/${id}`)
                const data = res.data;
                setNome(data.nome)
                setWhatsapp(data.whatsapp)
                setEmail(data.email)
            }
            carregarContato();
        }
    }, [id]);

    const salvar = async (e) => {
        e.preventDefault();

        if (!nome || !whatsapp || !email) {
            alert("Preencha todos os campos!");
            return;
        }

        const dados = { nome, whatsapp, email };

        if(id) {
            await api.put(`/contatos/${id}`, dados)
        } else {
            await api.post("/contatos", dados)
        }
        
        navigate("/")
    }

    
    return (
        <div className="container card p-4 mt-5" style={{ maxWidth: "700px" }}>
            <div className="card-header mb-4">
                <h5>{id ? "Editar Contato" : "Novo Contato"}</h5>
            </div>

            <form method="POST">
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">WhatsApp</label>
                    <input
                        type="phone"
                        className="form-control"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" onClick={salvar} className="btn btn-primary">Salvar</button>
                <Link className="btn btn-secondary ms-2" to={`/`}>Voltar</Link>
            </form>
        </div>
    );
}