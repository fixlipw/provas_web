import {useEffect, useState} from "react";

const Questao03 = () => {

    /*
    * Autor: Felipe de Sousa Rodrigues
    * Matrícula: 536984
    * */

    const [paises, setPaises] = useState([]);

    useEffect(() => {
        const carregarPaises = async () => {
            try {
                const dados = await paisesPromise;
                setPaises(dados);
            } catch (error) {
                console.log(error);
            }
        }

        carregarPaises();
    }, []);

    const paisesPromise = new Promise(resolve =>
        setTimeout(() => {
                resolve(
                    [
                        {"capital": ["Dublin"], "population": 4994724},
                        {"capital": ["Nicosia"], "population": 1207361},
                        {"capital": ["Madrid"], "population": 47351567}
                    ]
                )
            }, 5000
        )
    );

    const MaiorPopulation = () => {
        let maior = paises[0];

        paises.forEach(e => {
            if (maior.population <= e.population) maior = e
        })

        return maior
    }

    const MenorPopulation = () => {
        let menor = paises[0];

        paises.forEach(e => {
            if (menor.population > e.population) menor = e
        })

        return menor
    }

    const maior = MaiorPopulation();
    const menor = MenorPopulation();

    return (
        <>
            <h1>Prova - Questão 3</h1>
            <h2>Países da Europa</h2>
            <hr />
            <h3>Maior População</h3>
            {maior ? <p>{maior.capital}: {maior.population}</p> : <p>Carregando...</p>}
            <h3>Menor População</h3>
            {menor ? <p>{menor.capital}: {menor.population}</p> : <p>Carregando...</p>}
            <hr />
        </>
    )
}

export default Questao03