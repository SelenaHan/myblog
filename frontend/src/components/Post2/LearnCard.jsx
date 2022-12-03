import React from 'react';
import Card from 'react-bootstrap/Card';
import './SecondStyle.css';

function LearnCard(props) {
    return (
        <div>
            <Card className="concept-card">
                <Card.Body className="concept-body">
                    <img variant="bottom" className="learn-img" src={props.img} alt="...post_image" />
                    <Card.Title>
                        <h1>{props.title}</h1></Card.Title>
                    <Card.Text className="learn-content">
                        <p>{props.content}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default LearnCard;
