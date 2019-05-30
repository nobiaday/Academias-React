import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

function Cards (props) {

    return (
        <Grid>
            <Card className="card">
                <CardMedia className="crd-media" />
                
                <CardContent>
                    <Typography>TITULO</Typography>
                    <Typography>Comments</Typography>
                    <Typography>Description</Typography>
                    <Typography>Category</Typography>
                </CardContent>
                <CardActions>
                    <Button>
                        Edit
                    </Button>
                    <Button>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );

}

export default Card;