import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function SinglePostCard(props) {
  const [count, setCount] = useState(1);
    const [countNumber, setCountNumber] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setCount(count + 1);
        setCountNumber("+" + count);
      }
  return (
    <Card className="post-card">
         <Link className="title-link" to={{pathname: "/"}}>
            <Button variant="link" className='goback'>
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back to Home
                </Button>
                </Link>
      <Card.Body className="card-body">
        <Card.Title><h3>{props.title}</h3></Card.Title>
        <Card.Text>
        {props.post_content}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" className="card-img" src={process.env.PUBLIC_URL + `/uploads/${props.img}`} alt="header-img" />
        <span>
            <Button variant="link" className='heart-btn' onClick={handleClick}><FontAwesomeIcon icon="fa-solid fa-heart" /> {countNumber}</Button>
            <Link className="title-link" to={{ pathname: "/" + `update/${props.id}` }}>
            
            <Button variant="link" className='card-btn'><FontAwesomeIcon icon="fa-solid fa-pen" /> Edit</Button>
            </Link></span>
    </Card>
  )
}

export default SinglePostCard;
