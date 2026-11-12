import {type FunctionComponent, useEffect, useState} from 'react'
import type Pokemon from "../models/pokemon.ts";
import PokemonCard from "../components/pokemon-card.tsx";
import PokemonService from "../services/pokemon-service.ts";
import {Link} from "react-router-dom";
import PokemonSearch from "../components/pokemon-search.tsx";

const PokemonList: FunctionComponent = () => {

    const [pokemons, setPokemons] = useState<Array<Pokemon>>([])

    useEffect(() => {
        PokemonService.getPokemons().then(pokemons => setPokemons(pokemons))
    }, [])

    return(
        <div>
            <h1 className="center">PokeChatong</h1>
            <div className="container">
                <div className="row">
                    <PokemonSearch />
                    {
                        pokemons.map(pokemon => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} />
                        ))
                    }
                </div>
                <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
                      style={{position: 'fixed', bottom: '25px', right: '25px'}}
                      to="/pokemons/add">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}

export default PokemonList;
