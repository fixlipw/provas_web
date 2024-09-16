import {useState} from "react";
import AlunoService from "../../services/AlunoService";
import {useNavigate} from "react-router-dom";

const Criar = () => {

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState(0);

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if (nome && curso) {
            const novoAluno = {nome, curso, ira};
            AlunoService.postAluno(novoAluno, data => console.log(data));
            navigate("/aluno/listar")
        }

        alert("Todos os campos devem ser preenchidos!");
    }

    const handleInputName = e => setNome(e.target.value);
    const handleInputCurso = e => setCurso(e.target.value);
    const handleInputIra = e => setIra(Number(e.target.value));

    return (
        <div className="page-content">
            <h1>Criar Aluno</h1>
            <form className="form-content" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome"
                        id="inputNome"
                        onChange={handleInputName}
                        value={nome}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="selectCurso">Curso</label>
                    <select
                        className="form-control"
                        value={curso}
                        id="selectCurso"
                        onChange={handleInputCurso}
                    >
                        <option value="">Selecione um curso...</option>
                        <option value="Sistemas de Informação">Sistemas de Informação</option>
                        <option value="Ciências da Computação">Ciência da Computação</option>
                        <option value="Engenharia da Computação">Engenharia de Computação</option>
                        <option value="Redes de Computadores">Redes de Computadores</option>
                        <option value="Design Digital">Design Digital</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputIra">IRA</label>
                    <input
                        className="form-control"
                        type="number"
                        name="ira"
                        id="inputIra"
                        onChange={handleInputIra}
                        value={ira}
                    />
                </div>

                <div className="div-button-submit">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{marginLeft: 0}}
                    >
                        Submeter Aluno
                    </button>
                </div>

            </form>
        </div>

    )

}

export default Criar;