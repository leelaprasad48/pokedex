import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import PokemonInfo from './PokemonInfo';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <>
                <Header/>
                <Switch location={this.props.location}>
                    <Route path='/home' component={Home}/>
                    <Route path='/pokemon/:pokemonId' component={PokemonInfo}/>
                    <Redirect to="/home"/>
                </Switch>
            </>
        );
    }
}

export default withRouter(Main);