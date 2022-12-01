import React from 'react';
import ConceptCard from './ConceptCard';
import Contents from './Contents';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mern() {
    return (
        <div id="mern"> 
            <h1 className="title">What is MERN?</h1>
            <p>
            MERN stands for MongoDB, Express.js, React.js, and Node.js. Simply It is a JavaScript Stack that is used for developing full-stack Web Applications. Using these four technologies together makes our programmer’s development much easier and faster. 
            </p>
            <p>
            MERN allows us to easily construct a full stack (frontend, backend, database) Web application that entirely uses JavaScript and JSON only. Using MERN you can create any type of Website or Application that you can imagine today.
            </p>
            
            <Container fluid>
                <Row>
                    {Contents.map((Content, index) => (
                        <Col xs={3} xxs={6}>
                            <ConceptCard title={Content.title} description={Content.description} img={Content.img} />
                        </Col>))}
                </Row>
                {Contents.map((Content, index) => (
                        <Row>
                            {Content.title}
                            {Content.content}
                            <p>{Content.code}</p>
                        </Row>))}
            </Container>
            
        </div>
    )
}

export default Mern
