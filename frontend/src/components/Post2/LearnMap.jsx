import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Learnings from './Learnings';
import LearnCard from './LearnCard';

function LearnMap() {

  return (
    <div id="map">
      <h1 className="title">Learning Map</h1>
      <Container fluid>
                <Row>
                    {Learnings.map((Learning, index) => (
                        <Col xs={4} xxs={4}>
                            <LearnCard title={Learning.title} content={Learning.content} img={Learning.img} />
                        </Col>))}
                </Row>
            </Container>
            

    </div>
  )
}

export default LearnMap