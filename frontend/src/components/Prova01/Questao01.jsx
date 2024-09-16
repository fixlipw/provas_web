const Questao01A = () => {

    /*
    * Autor: Felipe de Sousa Rodrigues
    * Matrícula: 536984
    * */

    const lista = [
        {a: 10, b: 3, c: 7},
        {a: 5, b: -3, c: 9},
        {a: 1, b: 9, c: 40},
    ]

    return (
        <div>
            <h1>Prova - Questão 1</h1>
            <h2>Lista de valores</h2>
            <hr />
            <Questao01B itens={lista} />
            <hr />
        </div>
    )
}

function Questao01B({itens}) {
    return (
        <ul>
            {itens.map((item, index) => (
                <li key={index}>
                    <p>{Math.max(...Object.values(item))}</p>
                </li>
            ))}
        </ul>
    )
}

export default Questao01A;