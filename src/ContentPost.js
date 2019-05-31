import React, { useState } from 'react';
import Cards from './Cards';
import Grid from '@material-ui/core/Grid';
import Filters from './Filters';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import ModalForm from './ModalForm';
import '../src/components/styles/contentpost.css';

function ContentPost ( props ){

    const [ Modal, setModal ] = useState(false);

    const openModalForm = ( ) => setModal(true);
    const closeModalForm = ( ) => setModal(false);
    return (
        <div>
            <Fab color="secondary" aria-label="Edit" className="icon-fab" onClick = { openModalForm }>
                <Icon className="icon">edit_icon</Icon>
                </Fab>
            <Filters currentFilter = {props.currentFilter} handlerFilter = {props.handlerFilter} />
            <Grid direction="row" container>
            <Cards posts = { props.posts } handleDelPost = { props.handleDelPost } />
            </Grid>
            <ModalForm OpenModal = { Modal } CloseModal = { closeModalForm } handlePostNew = { props.handlePostNew } />
        </div>
    );
}

export default ContentPost;