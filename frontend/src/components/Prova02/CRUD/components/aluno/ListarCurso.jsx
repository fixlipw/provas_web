import "../../css/crud.css"
import {useEffect, useState} from "react";
import AlunoService from "../../services/AlunoService";
import {Link} from "react-router-dom";

const ListarCurso = () => {

    const [alunos, setAlunos] = useState([]);
    //estado para definir se a linha será colorida ou não
    const [colored, setColored] = useState(false);
    //estado para guardar os alunos agrupados por curso
    const [alunosPorCurso, setAlunosPorCurso] = useState({})

    useEffect(() => {
        AlunoService.getAlunos((json) => {
            setAlunos(json);
            //ao receber os alunos do BD, eles serão agrupados por curso
            agruparAlunos(json);
        });
    }, [])

    const handleDelete = id => {
        if (window.confirm(`Tem certeza que deseja excluir id: ${id}`)) {
            AlunoService.deleteAluno(id, () => {
                const result = alunos.filter((aluno) => aluno.id !== id);
                setAlunos(result);
            })
        }
    }

    //função para controlar o botão de mudança de cor
    const handleColorir = () => {
        setColored(!colored);
    }

    //função para mudar a classe css das linhas da tabela
    const getClass = (ira) => {
        if (!colored) return "aluno";
        return ira < 7 ? "table-danger" : "table-info";
    }

    //função para agrupar alunos que fazem o mesmo curso
    const agruparAlunos = (alunos) => {
        const agrupados = {};
        alunos.forEach(aluno => {
            if (!agrupados[aluno.curso]) {
                agrupados[aluno.curso] = [];
            }
            agrupados[aluno.curso].push(aluno);
        });
        setAlunosPorCurso(agrupados);
    };

    //para cada curso, uma tabela será gerada
    const renderizarAlunosPorCurso = () => {
        return Object.keys(alunosPorCurso).map((curso) => (
            <div key={curso} className="mb-4">
                <table className="table table-striped table-bordered table-content">
                    <thead>
                    <tr>
                        <th className="table-light" colSpan="4">{curso}</th>
                    </tr>
                    <tr>
                        <th scope="col" style={{width: "5%"}}>ID</th>
                        <th scope="col" style={{width: "75%"}}>Nome</th>
                        <th scope="col" style={{width: "5%"}}>IRA</th>
                        <th scope="col" style={{width: "15%"}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {alunosPorCurso[curso].map((aluno) => (
                        <tr key={aluno.id} className={getClass(aluno.ira)}>
                            <th scope="row">{aluno.id}</th>
                            <td>{aluno.nome}</td>
                            <td>{aluno.ira}</td>
                            <td>
                                <div className="button-content">
                                    <Link to={`/aluno/editar/${aluno.id}`} className="btn btn-primary">
                                        Editar
                                    </Link>
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => handleDelete(aluno.id)}>
                                        Apagar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        ));
    };

    //adicionando botão para visualizar os alunos com IRA < 7 e alunos IRA >= 7
    return (<div className={"page-content"}>
        <h1>Listar Alunos Por Curso</h1>
        <button className="btn btn-secondary" onClick={handleColorir}>
            {colored ? "Voltar ao Normal" : "Comparar Média"}
        </button>
        <div>
            {renderizarAlunosPorCurso()}
        </div>
    </div>)
}

export default ListarCurso;