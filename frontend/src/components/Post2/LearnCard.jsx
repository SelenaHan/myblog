import React from 'react';
import Card from 'react-bootstrap/Card';
import './SecondStyle.css';

function LearnCard(props) {
    return (
        <div>
        <Card className="concept-card">
            <Card.Body className="concept-body">
            <img variant="bottom" className="concept-img" src={props.img} alt="...post_image" />
                <Card.Title> 
                    <h3>{props.title}</h3></Card.Title>
                    <Card.Text>
<p>{props.content}</p>
                    </Card.Text>
            </Card.Body> 
        </Card>
        </div>

    )
}

export default LearnCard;
