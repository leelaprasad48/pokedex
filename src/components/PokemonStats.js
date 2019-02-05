import React from 'react';

function PokemonStats(props) {
    let res = props.stats;
    return (
        <table className="table">
            <tbody>
            <tr>
                <td>Id</td>
                <td><span className="badge badge-primary">{res.id}</span></td>
            </tr>
            <tr>
                <td>Experience</td>
                <td><span className="badge badge-warning">{res.base_experience}</span></td>
            </tr>
            <tr>
                <td>Type</td>
                <td>{res.types.map(typeType => {
                    return (<span className="badge badge-type">{typeType.type.name}</span>)
                })}</td>
            </tr>
            <tr>
                <td>Stats</td>
                <td>
                    <table className="table table-borderless table-striped">
                        <tbody>
                        {res.stats.map(statType => {
                            return (
                                <tr>
                                    <td><span className="badge badge-statType">{statType.stat.name}</span></td>
                                    <td><span className="badge badge-statValue">{statType.base_stat}</span></td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>Height</td>
                <td><span className="badge badge-dark">{res.height}</span></td>
            </tr>
            <tr>
                <td>Weight</td>
                <td><span className="badge badge-dark">{res.weight}</span></td>
            </tr>
            <tr>
                <td>Moves</td>
                <td>{res.moves.map(moveType => {
                    return (<span className="badge badge-pill badge-info">{moveType.move.name}</span>)
                })}</td>
            </tr>
            <tr>
                <td>Abilities</td>
                <td>{res.abilities.map(abilityType => {
                    return (<span className="badge badge-success">{abilityType.ability.name}</span>)
                })}</td>
            </tr>
            </tbody>
        </table>
    );

}

export default PokemonStats;