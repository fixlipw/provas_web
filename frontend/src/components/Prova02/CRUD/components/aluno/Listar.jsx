import "../../css/crud.css"
import {useEffect, useState} from "react";
import AlunoService from "../../services/AlunoService";
import {Link} from "react-router-dom";

const Listar = () => {

    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        AlunoService.getAlunos((json) => setAlunos(json))
    }, [])

    const handleDelete = id => {
        if (window.confirm(`Tem certeza que deseja excluir id: ${id}`)) {
            AlunoService.deleteAluno(id, () => {
                const result = alunos.filter((aluno) => aluno.id !== id);
                setAlunos(result);
            })
        }
    }

    const renderizarAlunos = () => {
        return alunos.map((aluno) => {
            return (<tr key={aluno.id}>
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
        <div>
            <table className="table table-striped table-bordered table-content">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Curso</th>
                    <th scope="col">IRA</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {renderizarAlunos()}
                </tbody>
            </table>
        </div>
    </div>)
}

export default Listar;