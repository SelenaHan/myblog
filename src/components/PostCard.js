import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import code from '../Images/code.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function PostCard(props) {
  return (
    <Card className="post-card">
      <Card.Body className="card-body">
        <Card.Title><Link className="title-link" to={{pathname: `/posts/${props.id}`}}>
            {props.title}</Link></Card.Title>
        <Card.Text>
        {props.id}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" className="card-img" src={code} alt="header-img" />
        <span>
            <Button variant="link" className='heart-btn'><FontAwesomeIcon icon="fa-solid fa-heart" /></Button>
            <Button variant="link" className='card-btn'><FontAwesomeIcon icon="fa-solid fa-pen" /> Edit</Button>
            <Button variant="link" className='card-btn'><FontAwesomeIcon icon="fa-solid fa-trash" /> Delete</Button></span>
    </Card>
  )
}

export default PostCard;
