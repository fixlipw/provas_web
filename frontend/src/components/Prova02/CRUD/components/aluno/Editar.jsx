import {useEffect, useState} from "react";
import AlunoService from "../../services/AlunoService";
import {useNavigate, useParams} from "react-router-dom";

const Editar = () => {

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState(0);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        AlunoService.getAlunoById(id, (aluno) => {
            const {nome, curso, ira} = aluno;
            setNome(nome)
            setCurso(curso)
            setIra(ira)

            console.log(aluno)
        })
    }, [id])

    const handleInputName = e => setNome(e.target.value);
    const handleInputCurso = e => setCurso(e.target.value);
    const handleInputIra = e => setIra(Number(e.target.value));

    const handleSubmit = e => {
        e.preventDefault();
        const alunoEditado = {nome, curso, ira};
        AlunoService.updateAluno(id, alunoEditado, () => {
            navigate("/aluno/listar")
        });
    }

    return (
        <div className="page-content">
            <h1>Editar Aluno</h1>
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
                        id="selectCurso"
                        onChange={handleInputCurso}
                        value={curso}
                    >
                        <option value="Sistemas de Informação">Sistemas de Informação</option>
                        <option value="Ciência da Computação">Ciências da Computação</option>
                        <option value="Engenharia de Computação">Engenharia de Computação</option>
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
                        Atualizar
                    </button>
                </div>

            </form>
        </div>

    )

}

export default Editar