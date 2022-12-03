import React from 'react';
import Bootstrap from './Bootstrap';
import Crud from './Crud';
import Introduction from './Introduction';
import LearnMap from './LearnMap';
import Mern from './Mern';
import './SecondStyle.css';
import UpdateDelete from './UpdateDelete';

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
      <UpdateDelete />
      <hr/>
      <Bootstrap />
    </div>
  )
}

export default SecondPost
