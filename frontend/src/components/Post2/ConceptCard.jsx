import React from 'react';
import Card from 'react-bootstrap/Card';
import './SecondStyle.css';

function ConceptCard(props) {
    return (
        <div>
        <Card className="concept-card">
            <Card.Body className="concept-body">
            <img variant="bottom" className="concept-img" src={props.img} alt="...post_image" />
                <Card.Title> 
                    <h3>{props.title}</h3></Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
            </Card.Body> 
        </Card>
        </div>

    )
}

export default ConceptCard;
