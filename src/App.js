import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import Header from './Header';
import ContentPost from './ContentPost';


function App() {

  const[ Post, setPost] = useState ( [] );
  const[ Filter, setFilter] = useState ('all');

useEffect( () => {
  axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts').
  then( response => setPost( response.data ))
}, []);

function NewPost ( newData ) {
  setPost([...Post, newData]);
}

  return (
    <div className="App">
      <Header />
      <ContentPost />
    </div>
  );
}

export default App;
