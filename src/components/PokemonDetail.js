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

function PokemonDetail(props) {
    let response = props.pokemon;
    return(
        <Card className="semi" key={response.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className="wf"
                    height="140"
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
                <img className="like-button" src={props.isFav ? HeartFill : HeartEmpty} onClick={props.toggleFav} alt="fav" />
                <Button size="small" color="secondary" margin="normal" onClick={() => {
                    props.knowMore(response.id, response.name)
                }}>
                    More
                </Button>
            </CardActions>
        </Card>
    );
}
export default PokemonDetail;