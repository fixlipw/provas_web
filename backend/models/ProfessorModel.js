class ProfessorModel {

    constructor(id, nome, curso, titulacao, interesses, universidade) {
        this.id = id;
        this.nome = nome;
        this.curso = curso;
        this.titulacao = titulacao;
        this.interesses = interesses
        this.universidade = universidade;
    }

}

module.exports = ProfessorModel;