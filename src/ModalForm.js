import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import shortid from 'shortid';
import FormControl from '@material-ui/core/FormControl';

function ModalForm ( props ){
    return(
        <Modal>
            <form>
                <h2>CREATE POST</h2>
                <TextField 
                id="Title"
                label="Title"
                 />
                <TextField 
                id="ShortDesc"
                label="Short Description"
                />
                <TextField 
                id="Desc"
                label="Description"/>
                <TextField 
                id="Img"
                label="Image URL"/>

                <Button>Cancel</Button>
                <Button>Save</Button>
            </form>
        </Modal>
    );
}

export default ModalForm;