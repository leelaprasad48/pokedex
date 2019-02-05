import React, {Component} from 'react';

class PokemonInfo extends Component {

    constructor(props) {
        super(props);
        this.state={
            pokemonId: undefined
        }
    }

    componentDidMount(){
        this.setState({pokemonId: this.props.match.params.pokemonId})
    }

    render() {
        return(
           <div>heyyyyy {this.state.pokemonId}</div>
        );
    }
}

export default PokemonInfo;