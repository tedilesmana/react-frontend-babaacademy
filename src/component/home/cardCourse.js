import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});
export default function ImgMediaCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia>
                  <img src={props.image}  alt="description of" id="courseImg"/>
                </CardMedia>
                <CardContent>
                    <div className="slider__description">
                        <p className="title">{props.title}</p>
                        <p className="time"><span className="glyphicon glyphicon-time"></span> {props.desc} </p>
                        <div className="clearfix">
                            <small className="pull-left"><del>Rp. {props.diskon}</del></small> <span size="4px" className="price pull-right" color="#215CA0"><strong>Rp. {props.harga}</strong></span>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}