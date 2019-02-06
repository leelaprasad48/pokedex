import React from 'react';

function PokemonStats(props) {
    let res = props.stats;
    return (
        <table className="table" key={res.id}>
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
                <td key={res.id}>{res.types.map(typeType => {
                    return (<span key={res.id + typeType.type.name} className="badge badge-type">{typeType.type.name}</span>)
                })}</td>
            </tr>
            <tr>
                <td>Stats</td>
                <td>
                    <table className="table table-borderless table-striped">
                        <tbody>
                        {res.stats.map(statType => {
                            return (
                                <tr key={res.id +statType.stat.name}>
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
                    return (<span key={res.id + moveType.move.name} className="badge badge-pill badge-info">{moveType.move.name}</span>)
                })}</td>
            </tr>
            <tr>
                <td>Abilities</td>
                <td>{res.abilities.map(abilityType => {
                    return (<span key={res.id + abilityType.ability.name} className="badge badge-success">{abilityType.ability.name}</span>)
                })}</td>
            </tr>
            </tbody>
        </table>
    );

}

export default PokemonStats;