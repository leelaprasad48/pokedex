import React from 'react';
import PokemonCard from "./PokemonCard";

function Home(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <PokemonCard/>
                </div>
            </div>
        );
    }

export default Home;