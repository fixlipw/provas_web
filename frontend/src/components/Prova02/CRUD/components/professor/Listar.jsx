import "../../css/crud.css"
import {useEffect, useState} from "react";
import ProfessorService from "../../services/ProfessorService";
import {Link} from "react-router-dom";

const Listar = () => {

    const [professores, setProfessores] = useState([]);

    useEffect(() => {
        ProfessorService.getProfessores((json) => setProfessores(json))
    }, [])

    const handleDelete = id => {
        if (window.confirm(`Tem certeza que deseja excluir id: ${id}?`)) {
            ProfessorService.deleteProfessor(id, () => {
                const result = professores.filter((professor) => professor.id !== id);
                setProfessores(result);
            })
        }
    };

    const renderizarProfessores = () => {
        return professores.map(professor => {
            return (<tr key={professor.id}>
                <th scope="row">{professor.id}</th>
                <td>{professor.nome}</td>
                <td>{professor.curso}</td>
                <td>{professor.titulacao}</td>
                <td>
                    <div className="button-content">
                        <Link to={`/professor/editar/${professor.id}`} className="btn btn-primary">
                            Editar
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(professor.id)}>
                            Apagar
                        </button>
                    </div>
                </td>
            </tr>)
        });
    }

    return (<div className={"page-content"}>
        <h1>Listar Professor</h1>
        <div>
            <table className="table table-striped table-bordered table-content">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Curso</th>
                    <th scope="col">Titulação</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {renderizarProfessores()}
                </tbody>
            </table>
        </div>
    </div>)
}

export default Listar