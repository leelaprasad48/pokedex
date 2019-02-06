import React from 'react';

function PokemonImages(props) {
    let pokemon = props.images;
    return (
        <>
            {pokemon.front_default && (<img src={pokemon.front_default} alt="front"/>)}
            {pokemon.front_shiny && (<img src={pokemon.front_shiny} alt="front shiny"/>)}
            {pokemon.back_default && (<img src={pokemon.back_default} alt="back"/>)}
            {pokemon.back_shiny && (<img src={pokemon.back_shiny} alt="back shiny"/>)}
        </>
    );
}

export default PokemonImages;