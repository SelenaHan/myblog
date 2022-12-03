import React from 'react';
import { Link } from 'react-router-dom';
import './SecondStyle.css';

function Introduction () {
 
  return (
    <div >
      <h1 className="title">The MERN Stack Learning Guide</h1>
        <div>/*Thank you for your support and advice. I realize that step-by-step can only help people start. It would be better to give a learning guide for long-term learning. This guide will give you useful information and a learning map. Also, I completed the implementation of the Update and Delete functions, with the Create and Read functions in blog post 1, we could make any CRUD applications. Since some students hope to see the Styling part, I made a short CSS and Bootstrap introduction at the end.*/</div>
        <br />
       <div>
            <div><h4><a href="#mern" className="links">What is MERN?</a></h4></div>
            <div><h4><a href="#crud" className="links">What is CRUD?</a></h4></div>
            <div><h4><a href="#map" className="links">Learning Map</a></h4></div>
            <div><h4><a href="#ud" className="links">How to implement "UPDATE" and "DELETE"?</a></h4></div>
            <div><h4><a href="#bs" className="links">How to use Bootstrap?</a></h4></div>
            <div><h4><a href="https://github.com/SelenaHan/myblog/tree/main" className="links">Check out the Code on GitHub</a></h4></div>
        </div>
        <br />
    </div>
  )
}

export default Introduction
