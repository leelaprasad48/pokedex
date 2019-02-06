import React from 'react';
import {Loading} from "./LoadingComponent";
import PokemonStats from './PokemonStats';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import {fetchPokemons} from "../redux/ActionCreators";
import InfiniteScroll from 'react-infinite-scroll-component';
import {connect} from "react-redux";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import withStyles from "@material-ui/core/es/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import CrossIcon from '../assets/svg/crossIcon.svg';
import axios from 'axios';
import PokemonDetail from "./PokemonDetail";


const mapStateToProps = state => {
    return {
        pokemonList: state.pokemons.pokemonList,
        errMess: state.pokemons.errMess,
        isLoading: state.pokemons.isLoading
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchPokemonList: (offSet) => {
        dispatch(fetchPokemons('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=' + offSet))
    }
});

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
}))(props => {
    const {children, classes, onClose} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <img src={CrossIcon} alt="Close"/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);


class RenderPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedPokemonId: undefined,
            selectedPokemonName: undefined,
            selectedPokemonResponse: undefined,
            isFav: false
        };
    }

    knowMore = (id, name) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => {
            this.setState({selectedPokemonResponse: response.data})
        });
        this.setState({
            open: true,
            selectedPokemonId: id,
            selectedPokemonName: name,
        });

    };

    handleClose = () => {
        this.setState({open: false});
    };

    toggleFav = () => {
        this.setState({isFav: !this.state.isFav}, () => {
            console.log("fav toggled ", this.state.isFav);
        })
    };

    addToFav = () => {
        console.log("add to fav " + this.state.selectedPokemonId);
        this.handleClose();
    };

    render() {
        return (
            <div className="semi">
                {this.props.isLoading && (<Loading/>)}
                {this.props.errMess && (<h4>{this.props.errMess}</h4>)}
                {this.props.pokemonList && (this.props.pokemonList.map(pokemon => {
                    return (
                        <PokemonDetail key={pokemon.id} pokemon={pokemon} toggleFav={this.toggleFav}
                                       knowMore={this.knowMore} isFav={this.state.isFav}/>
                    );
                }))}
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}>

                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        {this.state.selectedPokemonName}
                    </DialogTitle>
                    <DialogContent>
                        <div>
                            {this.state.selectedPokemonResponse && (
                                <PokemonStats stats={this.state.selectedPokemonResponse}/>
                            )}
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.addToFav} color="primary">
                            Add to Fav
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

class PokemonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0
        };
    }

    componentDidMount() {
        this.props.fetchPokemonList(this.state.offset);
    }

    fetchMoreData = () => {
        this.setState({offset: this.state.offset + 50}, () => {
            this.props.fetchPokemonList(this.state.offset);
        });
    };

    render() {
        return (
            <div className="">
                <InfiniteScroll
                    dataLength={this.props.pokemonList.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    loadMore="true"
                >
                    <RenderPokemon
                        pokemonList={this.props.pokemonList}
                        isLoading={this.props.isLoading}
                        errMess={this.props.errMess}
                        knowMore={this.props.knowMore}
                    />

                </InfiniteScroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);