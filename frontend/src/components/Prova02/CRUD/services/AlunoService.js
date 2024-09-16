import axios from "axios";

const url = "http://localhost:3002/alunos/"

class AlunoService {

    static getAlunos = async data => {
        try {
            const response = await axios.get(url + "listar");
            data(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static postAluno = async (aluno, callback) => {
        try {
            const response = await axios.post(url + "criar", aluno);
            callback(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static getAlunoById = async (id, callback) => {
        try {
            const response = await axios.get(url + "recuperar/" + id);
            callback(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static updateAluno = async (id, alunoEditado, callback) => {
        try {
            const response = await axios.put(url + "atualizar/" + id, alunoEditado);
            callback(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static deleteAluno = async (id, callback) => {
        try {
            const response = await axios.delete(url + "apagar/" + id);
            callback(response.data);
            alert("Aluno Apagado");
        } catch (error) {
            console.log(error)
        }
    }

}

export default AlunoService;