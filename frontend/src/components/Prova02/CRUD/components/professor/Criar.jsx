import {useState} from "react";
import ProfessorService from "../../services/ProfessorService";
import {useNavigate} from "react-router-dom";

const Criar = () => {

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [titulacao, setTitulacao] = useState('');
    const [interesses, setInteresses] = useState({es: false, lc: false, mc: false});
    const [universidades, setUniversidade] = useState({ufc: false, ifce: false});

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();

        if (nome && curso && titulacao) {
            const novoProfessor = {nome, curso, titulacao, interesses, universidades};
            ProfessorService.postProfessores(novoProfessor, data => console.log(data));
            navigate('/professor/listar');
        }

        alert("Todos os campos devem ser preenchidos!");
    }

    const handleInputName = e => setNome(e.target.value);
    const handleInputCurso = e => setCurso(e.target.value);
    const handleSelect = e => setTitulacao(e.target.value);

    const handleRadio = e => setUniversidade({...universidades, [e.target.value]: e.target.checked})
    const handleCheckbox = e => setInteresses({...interesses, [e.target.name]: e.target.checked})

    return (
        <div className="page-content">
            <h1>Criar Professor</h1>
            <form className="form-content">
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input className="form-control" type="text" value={nome} onChange={handleInputName}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Curso</label>
                    <select className="form-control" value={curso} onChange={handleInputCurso}>
                        <option value="">Selecione um curso...</option>
                        <option value="Sistemas de Informação">Sistemas de Informação</option>
                        <option value="Ciências da Computação">Ciência da Computação</option>
                        <option value="Engenharia da Computação">Engenharia de Computação</option>
                        <option value="Redes de Computadores">Redes de Computadores</option>
                        <option value="Design Digital">Design Digital</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Titulação</label>
                    <select className="form-select" value={titulacao} onChange={handleSelect}>
                        <option value="GRADUACAO">GRADUAÇÃO</option>
                        <option value="MESTRADO">MESTRADO</option>
                        <option value="DOUTORADO">DOUTORADO</option>
                    </select>
                </div>
                <div>
                    <label>Áreas de Interesse</label>
                    <fieldset className="scheduler-border">
                        <div className="form-check">
                            <input
                                id="idES" type="checkbox" className="form-check-input" checked={interesses.es}
                                onChange={handleCheckbox} name="es"
                            />
                            <label htmlFor="idES" className="form-check-label">Engenharia de Software</label>
                        </div>
                        <div className="form-check">
                            <input id="idLC" type="checkbox" className="form-check-input" checked={interesses.lc}
                                   onChange={handleCheckbox} name="lc"
                            />
                            <label htmlFor="idLC" className="form-check-label">Lógica Computacional</label>
                        </div>
                        <div className="form-check">
                            <input id="idMC" type="checkbox" className="form-check-input" checked={interesses.mc}
                                   onChange={handleCheckbox} name="mc"
                            />
                            <label htmlFor="idMC" className="form-check-label">Matemática Computacional</label>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <label className="form-label">Universidade de Origem</label>
                    <fieldset className="scheduler-border">
                        <div className="form-check">
                            <input
                                id="idUFC"
                                className="form-check-input"
                                type="radio"
                                name="universidade"
                                checked={universidades.ufc}
                                value="ufc"
                                onChange={handleRadio}
                            />
                            <label
                                htmlFor="idUFC"
                                className="form-check-label"
                            >
                                Universidade Federal do Ceará
                            </label>
                        </div>

                        <div className="form-check">
                            <input
                                id="idIFCE"
                                className="form-check-input"
                                type="radio"
                                name="universidade"
                                checked={universidades.ifce}
                                value="ifce"
                                onChange={handleRadio}
                            />
                            <label
                                htmlFor="idIFCE"
                                className="form-check-label"
                            >
                                Instituto Federal do Ceará
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className="button-submit mb-3">
                    <button className="btn btn-success" type="submit" onClick={handleSubmit}>Submeter Professor</button>
                </div>
            </form>
        </div>
    )
}

export default Criar