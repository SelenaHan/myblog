import React from 'react';
import {Routes, Route} from "react-router-dom";
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
import MainPage from './components/MainPage';
import Video from './components/Video';
import SecondPost from './components/Post2/SecondPost';
import Mern from './components/Post2/Mern';
import Crud from './components/Post2/Crud';
import LearnMap from './components/Post2/LearnMap';

function App() {
  

  return (
    <div className="App">
      <Header />
      {/*
      <Video />
     
      <MainPage />
       
      <Routes>
        <Route exact path="/" element = {<Posts />} /> 
        <Route exact path="posts/:id" element = {<Post />} /> 
        <Route exact path="/add-post" element = {<AddPost />} /> 
        <Route exact path="update/:id" element = {<EditPost />} />
      </Routes>
*/}
      <SecondPost />
      <Footer />
    </div>
  );
}

export default App;
