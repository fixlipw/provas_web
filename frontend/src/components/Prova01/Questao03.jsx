import {useEffect, useState} from "react";
import axios from "axios";

const Questao03 = () => {

    /*
    * Autor: Felipe de Sousa Rodrigues
    * Matrícula: 536984
    * */

    const [paises, setPaises] = useState([]);

    useEffect(() => {
        const carregarPaises = async () => {
            try {
                const dados = await axios.get("https://restcountries.com/v3.1/region/europe?fields=capital,population");
                setPaises(dados.data);
            } catch (error) {
                console.log(error);
            }
        }

        carregarPaises();
    }, []);

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