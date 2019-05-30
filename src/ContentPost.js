import React, { useState } from 'react';
import Cards from './Cards';
import Grid from '@material-ui/core/Grid';
import Filters from './Filters';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import ModalForm from './ModalForm';
import '../src/components/styles/contentpost.css';

function ContentPost ( props ){

    return (
        <div>
            <Fab color="secondary" aria-label="Edit" className="icon-fab">
                <Icon className="icon">edit_icon</Icon>
                </Fab>
            <Filters />
            <Grid direction="row" container>
            <Cards />
            </Grid>
            <ModalForm />
        </div>
    );
}

export default ContentPost;