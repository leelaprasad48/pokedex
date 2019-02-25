import React from 'react';
import Card from "@material-ui/core/Card/index";
import CardActionArea from "@material-ui/core/CardActionArea/index";
import CardMedia from "@material-ui/core/CardMedia/index";
import HeartFill from '../assets/svg/heartFill.svg';
import HeartEmpty from '../assets/svg/heartEmpty.svg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {connect} from "react-redux";
import {pokemonLiked} from "../redux/ActionCreators";

const mapDispatchToProps = (dispatch) => ({
    addFav: (id) => {
        dispatch(pokemonLiked(id))
    }
});

class PokemonDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFav: false
        }
    }

    toggleFav = (id) => {
        this.setState({isFav: !this.state.isFav});
        // this.props.addFav(id);
    };

    render(){
        let response = this.props.pokemon;
        return(
            <Card className="semi" key={response.id}>
                <CardActionArea onClick={() => {
                    this.props.loadImages(response.id, response.name)
                }}>
                    <CardMedia
                        component="img"
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + response.id + `.png`}
                        title={response.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {response.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <img className="like-button" src={this.state.isFav ? HeartFill : HeartEmpty} onClick={() => {this.toggleFav(response.id)}} alt="fav" />
                    <Button size="small" color="primary" margin="normal" onClick={() => {
                        this.props.knowMore(response.id, response.name)
                    }}>
                        More
                    </Button>
                </CardActions>
            </Card>
        );

    }
}
export default connect(null, mapDispatchToProps)(PokemonDetail);