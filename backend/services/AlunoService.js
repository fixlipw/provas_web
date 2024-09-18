const {alunos} = require('../data/data');
const AlunoModel = require("../models/AlunoModel");

let id = alunos.length;

class AlunoService {

    static listar() {
        return alunos;
    }

    static criar(data) {
        let novoAluno = new AlunoModel(
            ++id,
            data.nome,
            data.curso,
            data.ira
        )

        alunos.push(novoAluno);
        return alunos;
    }

    static recuperar(id) {
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].id == id) {
                return alunos[i];
            }
        }

        return null;
    }

    static atualizar(id, aluno) {
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].id == id) {
                alunos[i].nome = aluno.nome;
                alunos[i].curso = aluno.curso;
                alunos[i].ira = aluno.ira;
                return alunos[i];
            }
        }
    }

    static apagar(id) {
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].id == id) {
                alunos.splice(i, 1);
                return true;
            }
        }
        return false;
    }


    // Cálculo da média dos IRAs dos alunos
    static media() {
        let media = 0

        for (let i = 0; i < alunos.length; i++) {
            media += alunos[i].ira;
        }

        if (media > 0) {
            return (media / alunos.length).toFixed(3);
        }

        return 0;
    }

}

module.exports = AlunoService;