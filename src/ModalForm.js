import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import shortid from 'shortid';
import FormControl from '@material-ui/core/FormControl';
import '../src/components/styles/ModalForm.css'


function ModalForm ( props ){

    const PostNew = {
        id: shortid.generate (),
        title: '',
        ShrtDesc: '',
        Image: '',
        Comments: []
    }

    const [ InputPost, setInputPost ] = useState(PostNew);

    function UpdateForm ( e ) {
        setInputPost ({...InputPost, [e.target.id]: e.target.value, id: shortid.generate()});
    }

    function CreatePost(){
        props.handlePostNew(InputPost);
        setInputPost(PostNew);
        props.CloseModal();
    }

console.log(props);

    return(
        <Modal className="Modal" open = { props.OpenModal }>
            <form className = "Form">
                <h2 className = "Post-Create">CREATE POST</h2>
<TextField className = "cont" id="Title" label="Title" 
onChange={(e) => UpdateForm(e)} value = { InputPost.Title } required />
                 <br />
<TextField className = "cont" id="ShrtDesc" label="Short Description"
onChange={(e) => UpdateForm(e)} value = { InputPost.ShrtDesc } required />
                <br />
<TextField className = "cont" id="Desc" label="Description"
onChange={(e) => UpdateForm(e)} value = { InputPost.Desc } required />
                <br />
<TextField className = "cont" id="Image" label="Image URL"
onChange={(e) => UpdateForm(e)} value = { InputPost.Image } required />
                <br />
                <br />
    <Button className = "btn-cl" onClick = { props.CloseModal }>Cancel</Button>
    <Button className = "btn-sv" onClick = { CreatePost }>Save</Button>
                <br />
                <br />
            </form>
        </Modal>
    );
}

export default ModalForm;