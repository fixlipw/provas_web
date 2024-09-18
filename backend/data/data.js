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
    },
    {
        id: 5,
        nome: "Rainara Maia",
        curso: "SI",
        titulacao: "DOUTORADO",
        interesses: {es: true, lc: false, mc: false},
        universidade: {ufc: true, ifce: false}
    },
    {
        id: 6,
        nome: "Diana Braga",
        curso: "ES",
        titulacao: "MESTRADO",
        interesses: {es: true, lc: false, mc: false},
        universidade: {ufc: true, ifce: false}
    }
]

const alunos = [
    {
        id: 0,
        nome: "Felipe de Sousa",
        curso: "Sistemas de Informação",
        ira: 8.8
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
        nome: "Iara Lima",
        curso: "Sistemas de Informação",
        ira: 8.8
    },
    {
        id: 4,
        nome: "Jorge Bezerra",
        curso: "Ciência da Computação",
        ira: 6.8
    },
    {
        id: 5,
        nome: "Ana Maia",
        curso: "Design Digital",
        ira: 7.8
    },
    {
        id: 6,
        nome: "Rui Fonseca",
        curso: "Redes de Computadores",
        ira: 5.3
    },
    {
        id: 7,
        nome: "Téo Costa",
        curso: "Sistemas de Informação",
        ira: 7.0
    },
    {
        id: 8,
        nome: "Pedro Freitas",
        curso: "Design Digital",
        ira: 7.0
    },
    {
        id: 9,
        nome: "Joaquim Brito",
        curso: "Rede de Computadores",
        ira: 4.7
    },
    {
        id: 10,
        nome: "Raquel Barbosa",
        curso: "Engenharia da Computação",
        ira: 6.9
    }
]

module.exports = {professores, alunos}