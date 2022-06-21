import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function PokemonDetail() {
    const {id} = useParams();
    const [url, setUrl] = useState(`http://127.0.0.1:8080/pokemon/api/v1/pokemon/${id}`);

    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setPokemon(json)
            })
            .catch(err => console.log(err))
    }, []);

    // Validate response
    useEffect(() => {
        if (pokemon != null) {
            setIsLoading(false);
        }
        console.log(pokemon);
    }, [pokemon]);

    return <div className="container m-auto pt-5 pb-5">
        {isLoading ? (<div>Loading...</div>) :
            <>
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">{pokemon.name.toUpperCase()}</h2>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title mb-2">Caracteristicas</h4>
                        <br/>
                        <h6 className="card-subtitle mb-2">Numero de la pokedex: {pokemon.id}</h6>
                        <p className="card-text">
                            Tiene un peso de {pokemon.weight} kg.<br/>
                            Tiene una altura de {pokemon.height}cm.<br/>
                            Tiene una experiencia base de {pokemon.base_experience}.
                        </p>
                        <br/>
                        <h4>Vistas del pokemon</h4>
                        <table className="table table-bordered">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col" className="text-center">Vista Frontal</th>
                                <th scope="col" className="text-center">Vista Trasera</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center">
                                    <img src={pokemon.sprites.front_default} width="25%"/>
                                    <br/>
                                    <p className="text-body fw-bold">Aspecto por defecto</p>
                                </td>
                                <td className="text-center">
                                    <img src={pokemon.sprites.back_default} width="25%"/>
                                    <br/>
                                    <p className="text-body fw-bold">Aspecto por defecto</p>
                                </td>
                            </tr>
                            {pokemon.sprites.front_female ? (
                                <tr>
                                    <td className="text-center">
                                        <img src={pokemon.sprites.front_female} width="25%"/>
                                        <br/>
                                        <p className="text-body fw-bold">Aspecto femenino</p>
                                    </td>
                                    <td className="text-center">
                                        <img src={pokemon.sprites.back_female} width="25%"/>
                                        <br/>
                                        <p className="text-body fw-bold">Aspecto femenino</p>
                                    </td>
                                </tr>
                            ) : (
                                <></>
                            )}
                            {pokemon.sprites.front_shiny ? (
                                <tr>
                                    <td className="text-center">
                                        <img src={pokemon.sprites.front_shiny} width="25%"/>
                                        <br/>
                                        <p className="text-body fw-bold">Aspecto Shiny</p>
                                    </td>
                                    <td className="text-center">
                                        <img src={pokemon.sprites.back_shiny} width="25%"/>
                                        <p className="text-body fw-bold">Aspecto Shiny</p>
                                    </td>
                                </tr>
                            ) : (
                                <></>
                            )}
                            {pokemon.sprites.front_shiny_female ? (
                                <tr>
                                    <td className="text-center">
                                        <img src={pokemon.sprites.front_shiny_female} width="25%"/>
                                        <br/>
                                        <p className="text-body fw-bold">Aspecto Shiny femenino</p>
                                    </td>
                                    <td className="text-center">
                                        <img src={pokemon.sprites.back_shiny_female} width="25%"/>
                                        <p className="text-body fw-bold">Aspecto Shiny femenino</p>
                                    </td>
                                </tr>
                            ) : (
                                <></>
                            )}
                            </tbody>
                        </table>
                        <a href={"/poke-detail/" + (id - 1) } className="card-link">Anterior Pokemon</a>
                        <a href="/poke-list" className="card-link">Lista de Pokemon</a>
                        <a href={"/poke-detail/" + (id -(-1)) } className="card-link">Siguiente Pokemon</a>
                    </div>
                </div>

            </>
        }
    </div>

}

export default PokemonDetail;
