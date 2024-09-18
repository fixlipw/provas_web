import "../../css/crud.css"
import {useEffect, useState} from "react";
import AlunoService from "../../services/AlunoService";
import {Link} from "react-router-dom";

const Listar = () => {

    const [alunos, setAlunos] = useState([]);
    const [media, setMedia] = useState(0);
    const [colored, setColored] = useState(false);

    useEffect(() => {
        AlunoService.getAlunos((json) => setAlunos(json))
        AlunoService.media((json) => setMedia(json))
    }, [])

    const handleColorir = () => {
        setColored(!colored);
    }

    const getClass = (ira) => {
        if (!colored) return "aluno";
        return ira < media ? "table-danger" : "table-info";
    }

    const handleDelete = id => {
        if (window.confirm(`Tem certeza que deseja excluir id: ${id}`)) {
            AlunoService.deleteAluno(id, () => {
                const result = alunos.filter((aluno) => aluno.id !== id);
                setAlunos(result);
                AlunoService.media((json) => setMedia(json));
            })
        }
    }

    const renderizarAlunos = () => {
        return alunos.map((aluno) => {
            return (<tr key={aluno.id} className={getClass(aluno.ira)}>
                <th scope="row">{aluno.id}</th>
                <td>{aluno.nome}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.ira}</td>
                <td>
                    <div className="button-content">
                        <Link to={`/aluno/editar/${aluno.id}`} className="btn btn-primary">
                            Editar
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(aluno.id)}>
                            Apagar
                        </button>
                    </div>
                </td>
            </tr>)
        })
    }

    return (<div className={"page-content"}>
        <h1>Listar Alunos</h1>
        <button className="btn btn-secondary" onClick={handleColorir}>
            {colored ? "Voltar ao Normal" : "Comparar Média"}
        </button>
        <div>
            <table className="table table-striped table-bordered table-content">
                <thead>
                <tr>
                    <th scope="col" style={{width: "10%"}}>ID</th>
                    <th scope="col" style={{width: "35%"}}>Nome</th>
                    <th scope="col" style={{width: "35%"}}>Curso</th>
                    <th scope="col" style={{width: "5%"}}>IRA</th>
                    <th scope="col" style={{width: "15%"}}></th>
                </tr>
                </thead>
                <tbody>
                {renderizarAlunos()}
                <tr>
                    <th scope="row">Média IRA</th>
                    <td>-----</td>
                    <td>-----</td>
                    <td>{media}</td>
                    <td>-----</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>)
}

export default Listar;