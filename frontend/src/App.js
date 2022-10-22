import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import Header from './components/Header';
import Footer from './components/Footer';
import './components/MyStyle.css';
import './index.css';
import './components/Posts'
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import Post from './components/Post';
import EditPost from './components/EditPost';
import Spinner from './components/Spinner';

function App() {
  const [contents, setContents] = useState([]);
  
  useEffect(() => {
      axios.get("/posts")
      .then(res => setContents(res.data))
      .catch(error => console.log(error));
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element = {<Posts contents={contents} />} /> 
        <Route exact path="posts/:id" element = {<Post />} /> 
        <Route exact path="/add-post" element = {<AddPost contents={contents} />} /> 
        <Route exact path="update/:id" element = {<EditPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
