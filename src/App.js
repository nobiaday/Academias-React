import React, { useEffect, useState } from 'react';
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

function DelPost ( postId ){
  setPost( Post.filter( (post) => post.id !== postId ) );
}

  return (
    <div className="App">
      <Header />
      <ContentPost posts={Post.filter( post => {
        if (Filter === 'all') return true;
        else return post.category === Filter;
      })}
      handlePostNew = { NewPost } 
      handleFilter = { setFilter }
      handleDelPost = { DelPost }
      currentFilter = { Filter } />
    </div>
  );
}

export default App;
