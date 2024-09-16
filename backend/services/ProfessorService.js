const {professores} = require("../data/data");
const ProfessorModel = require("../models/ProfessorModel");

let id = professores.length;

class ProfessorService {

    static listar() {
        return professores;
    }

    static criar(data) {
        let novoProfessor = new ProfessorModel(
            ++id,
            data.nome,
            data.curso,
            data.titulacao,
            data.interesses,
            data.universidade
        )

        professores.push(novoProfessor);
        return professores;

    }

    static recuperar(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                return professores[i];
            }
        }

        return null;
    }

    static atualizar(id, professor) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                professores[i].nome = professor.nome
                professores[i].curso = professor.curso
                professores[i].titulacao = professor.titulacao
                professores[i].interesses = professor.interesses
                professores[i].universidade = professor.universidade
                return professores[i]
            }
        }
    }

    static apagar(id) {
        for (let i = 0; i < professores.length; i++) {
            if (professores[i].id == id) {
                professores.splice(i, 1)
                return true
            }
        }
        return false
    }
}

module.exports = ProfessorService;