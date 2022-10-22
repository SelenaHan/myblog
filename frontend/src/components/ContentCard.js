import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import code from "../Images/code.jpg"

function ContentCard(props) {
    const [count, setCount] = useState(1);
    const [countNumber, setCountNumber] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setCount(count + 1);
        setCountNumber("+" + count);
    }

    
    return (
        <Card className="post-card">
            <Card.Body className="card-body">
                <Card.Title><Link className="title-link" to={{ pathname: `/posts/${props.id}` }}>
                    <h3>{props.title}</h3></Link></Card.Title>
                <Card.Text>
                    {props.post_content}
                </Card.Text>
            </Card.Body>
            <img variant="bottom" className="card-img" src={props.img} alt="...post_image" />
            <span>
                <Button variant="link" className='heart-btn' onClick={handleClick}><FontAwesomeIcon icon="fa-solid fa-heart" /> {countNumber}</Button>
                <Link className="title-link" to={{ pathname: `/update/${props.id}` }}>
                    <Button variant="link" className='card-btn'>
                        <FontAwesomeIcon icon="fa-solid fa-pen" /> Edit
                    </Button>
                </Link>
                <Button variant="link" className='card-btn'><FontAwesomeIcon icon="fa-solid fa-trash" /> Delete</Button></span>
        </Card>
    )
}

export default ContentCard;
