import {useState} from "react";

const Questao02 = () => {

    /*
    * Autor: Felipe de Sousa Rodrigues
    * Matrícula: 536984
    * */

    const [position, setPosition] = useState("/");

    const PokemonImage = () => {

        const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

        return (
            <div>
                <img src={url + position + "250.png"} alt="Pokemon Image: Ho-Oh" width={150} />
                <PokemonVirar />
            </div>
        )

    }

    const PokemonVirar = () => {

        return (
            <div>
                <button onClick={() => {
                    if ("/" === position)
                        setPosition("/back/")
                    else
                        setPosition("/")
                }}>
                    Virar Pokémon
                </button>
            </div>
        )

    }

    return (
        <div>
            <h1>Prova - Questão 2</h1>
            <h2>Pokémon Ho-Oh</h2>
            <hr />
            <PokemonImage/>
            <hr />
        </div>
    )
}

export default Questao02