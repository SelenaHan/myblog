import React from 'react';
import Crud from './Crud';
import Introduction from './Introduction';
import LearnMap from './LearnMap';
import Mern from './Mern';
import './SecondStyle.css';

function SecondPost () {
 
  return (
    <div >
      <Introduction />
      <hr/>
      <Mern />
      <hr/>
      <Crud />
      <hr/>
      <LearnMap />
      <hr/>
    </div>
  )
}

export default SecondPost
