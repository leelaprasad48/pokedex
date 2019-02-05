import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Pokemons} from './pokemons';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            pokemons: Pokemons
        }),
        applyMiddleware(thunk)
        );
    return store;
};