import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import type Pokemon from "../models/pokemon.ts";
import PokemonForm from "../components/pokemon-form.tsx";
import PokemonService from "../services/pokemon-service.ts";
import Loader from "../components/loader.tsx";

const PokemonEdit = () => {

    const { id } = useParams<{ id: string }>();
    const [pokemon, setPokemon] = useState<Pokemon|null>(null);

    useEffect(() => {
        PokemonService.getPokemon(Number(id)).then(pokemon => setPokemon(pokemon))
    }, [id]);

    return (
        <div>
            { pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer { pokemon.name }</h2>
                    <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
                </div>
            ) : (
                <h4 className="center"><Loader /></h4>
            )}
        </div>
    );
}

export default PokemonEdit;