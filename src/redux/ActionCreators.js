import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const fetchPokemons = (url) => (dispatch) => {
    dispatch(pokemonsLoading(true));
    return axios.get(url).then(response => {
        response.data.results.forEach(result => {
            let { url } = result;
            result.id = url.substring(34, url.length - 1);
            result.isFav = false;
        });
        return response.data.results;
    })
    .then(pokemon => dispatch(addPokemon(pokemon)))
    .catch(error => dispatch(pokemonsFailed(error.message)))
};

export const pokemonsLoading = () => ({
    type: ActionTypes.POKEMONS_LOADING
});

export const pokemonsFailed = (errmess) => ({
    type: ActionTypes.POKEMONS_FAILED,
    payload: errmess
});

export const addPokemon = (pokemon) => ({
    type: ActionTypes.ADD_POKEMONS,
    payload: pokemon
});

export const pokemonLiked = (pokemonId) => ({
    type: ActionTypes.POKEMON_LIKED,
    payload: pokemonId
});