import axios from "axios";

const url = "http://localhost:3002/professores/";

class ProfessorService {

    static getProfessores = async data => {
        try {
            const response = await axios.get(url + "listar");
            data(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static postProfessores = async (professor, callback) => {
        try {
            const response = await axios.post(url + "criar", professor);
            callback(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static getProfessorById = async (id, callback) => {
        try {
            const response = await axios.get(url + "recuperar/" + id);
            callback(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    static updateProfessor = async (id, professorEditado, callback) => {
        try {
            const response = await axios.put(url + "atualizar/" + id, professorEditado);
            callback(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static deleteProfessor = async (id, callback) => {
        try {
            const response = await axios.delete(url + "apagar/" + id);
            callback(response.data);
            alert("Professor Apagado");
        } catch (error) {
            console.log(error);
        }
    }

}

export default ProfessorService;