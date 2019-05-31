import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import '../src/components/styles/cards.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    titlefont: {

    fontSize: '40px',
    fontWeight: 'bold'
    },

    btndl:{
        color: 'white',
        float:'right',
        backgroundColor: '#CFCDCD',
    },

    btned:{
        color: 'white',
        float:'right',
        backgroundColor: '#6F6FFA',
    },

    comm: {
        fontStyle: 'italic',
    }

  });

function Cards (props) {

    const classes = useStyles();

    function DelPost(postId) {
        props.handleDelPost(postId);
    }

    return props.posts.map( (post) => (
        <Grid item xs={12} sm={6}>
            <Card className="card">
                <div className="md-dv">
                <CardMedia className="media" image={post.image}/>
                <CardContent className="content-crd">
                    <Typography className ={classes.titlefont}>{post.title}</Typography>
                    <Typography className={classes.comm}>{`${post.comments.length} comments`}</Typography>
                    <Typography paragraph>{post.shortDescripton}</Typography>
                    <Typography>{post.category}</Typography>
                </CardContent>
                </div>
                <CardActions className="action">
                <Button className={classes.btned} onClick={ (e) => props.handleEdits(e.target.id)}>
                        Edit
                    </Button>
                    <Button className={classes.btndl} onClick={() => DelPost(post.id)}>
                        Delete
                    </Button>
                    </CardActions>
            </Card>
        </Grid>
    ));

}

export default Cards;