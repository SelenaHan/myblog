import React from 'react';
import ConceptCard from './ConceptCard';
import Contents from './Contents';

function Mern () {
    
  return (
    <div >
       <h1 className="title">What is MERN?</h1>
            {Contents.map((Content, index) => (
                <div>
                    <ConceptCard title={Content.title} content={Content.content} img={Content.img}/>
                </div>
            ))}
       
    </div>
  )
}

export default Mern
