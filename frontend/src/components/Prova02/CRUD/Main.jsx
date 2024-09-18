import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './components/Home.jsx';

import ListarProfessor from "./components/professor/Listar.jsx";
import EditarProfessor from "./components/professor/Editar.jsx";
import CriarProfessor from './components/professor/Criar.jsx';
import ListarAluno from "./components/aluno/Listar.jsx";
import EditarAluno from './components/aluno/Editar.jsx';
import CriarAluno from "./components/aluno/Criar.jsx";
import ListarCurso from "./components/aluno/ListarCurso.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "professor/listar",
                element: <ListarProfessor />,
            },
            {
                path: "professor/editar/:id",
                element: <EditarProfessor />,
            },
            {
                path: "professor/criar",
                element: <CriarProfessor />,
            },
            {
                path: "aluno/listar",
                element: <ListarAluno />,
            },
            {
                path: "aluno/listarPorCurso",
                element: <ListarCurso />
            },
            {
                path: "aluno/editar/:id",
                element: <EditarAluno />
            },
            {
                path: "aluno/criar",
                element: <CriarAluno/>,
            }
        ]
    },
])

const Main = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Main