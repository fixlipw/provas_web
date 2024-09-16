const professores = [
    {
        id: 0,
        nome: "Wladimir Tavares",
        curso: "CC",
        titulacao: "DOUTORADO",
        interesses: {es: false, lc: false, mc: false},
        universidade: {ufc: true, ifce: false}
    },
    {
        id: 1,
        nome: "Fábio Campos",
        curso: "SI",
        titulacao: "DOUTORADO",
        interesses: {es: false, lc: false, mc: true},
        universidade: {ufc: true, ifce: false}
    },
    {
        id: 2,
        nome: "João Marcelo",
        curso: "CC",
        titulacao: "DOUTORADO",
        interesses: {es: false, lc: false, mc: false},
        universidade: {ufc: true, ifce: false}
    },
    {
        id: 3,
        nome: "Arthur Araruna",
        curso: "DD",
        titulacao: "MESTRADO",
        interesses: {es: false, lc: false, mc: false},
        universidade: {ufc: true, ifce: false}
    },
    {
        id: 4,
        nome: "Davi Romero",
        curso: "EC",
        titulacao: "DOUTORADO",
        interesses: {es: false, lc: false, mc: false},
        universidade: {ufc: true, ifce: false}
    }
]

const alunos = [
    {
        id: 0,
        nome: "Felipe de Sousa",
        curso: "Sistemas de Informação",
        ira: 7.7
    },
    {
        id: 1,
        nome: "Paulo Henrique",
        curso: "Ciência da Computação",
        ira: 8.2
    },
    {
        id: 2,
        nome: "Gisleno Rodrigues",
        curso: "Engenharia de Computação",
        ira: 9.1
    },
    {
        id: 3,
        nome: "Iara da Silva Lima",
        curso: "Sistemas de Informação",
        ira: 8.8
    }
]

module.exports = {professores, alunos}