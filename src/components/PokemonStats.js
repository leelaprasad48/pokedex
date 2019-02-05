import React from 'react';

function PokemonStats(props) {
    let res = props.stats;
    return (
        <table className="table">
            <tbody>
            <tr>
                <td>Experience</td>
                <td>{res.base_experience}</td>
            </tr>
            <tr>
                <td>Height</td>
                <td>{res.height}</td>
            </tr>
            <tr>
                <td>Id</td>
                <td>{res.id}</td>
            </tr>
            <tr>
                <td>Order</td>
                <td>{res.order}</td>
            </tr>
            <tr>
                <td>Moves</td>
                <td>{res.moves.map(moveType => {
                    return(<span className="badge badge-pill badge-info">{moveType.move.name}</span>)
                })}</td>
            </tr>
            <tr>
                <td>Moves</td>
                <td><span className="badge badge-info">   </span></td>
            </tr>
            </tbody>
        </table>
    );

}

export default PokemonStats;