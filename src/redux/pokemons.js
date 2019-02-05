import * as ActionTypes from './ActionTypes';

export const Pokemons = (state = {
    isLoading: true,
    errMess: null,
    pokemonList: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POKEMONS:
            return {...state, pokemonList: state.pokemonList.concat(action.payload), isLoading: false, errMess: null};

        case ActionTypes.POKEMONS_LOADING:
            return {...state, isLoading: true, errMess: null, pokemonList: []};

        case ActionTypes.POKEMONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, pokemonList: []};

        default:
            return state;
    }
};