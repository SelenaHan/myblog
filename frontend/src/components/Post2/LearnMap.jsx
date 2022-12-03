import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Learnings from './Learnings';
import LearnCard from './LearnCard';
import Learnings2 from './Learnings2';
import Learnings3 from './Learnings3';
import Learnings4 from './Learnings4';
import Card from 'react-bootstrap/Card';

function LearnMap() {

  return (
    <div id="map">
      <h1 className="title">Learning Map</h1>
      <p>In this part, I will list what we need to learn to be a successful MERN stack programmer.</p>
      <p>First, since it is for building web applications, we still need to know HTML, CSS, and JavaScript. It is a good practice to use HTML to write your content only, CSS to style your website, and JavaScript to control the behavior of your website.</p>
      <Container fluid>
        <Row>
          {Learnings.map((Learning, index) => (
            <Col sm={4}>
              <LearnCard title={Learning.title} content={Learning.content} img={Learning.img} />
            </Col>))}
        </Row>
      </Container>
      <p>We have all learned the part, so we have enough knowledge to learn React, but for other people who have no experience with HTML, CSS, and JavaScript, I recommend you do not start React directly.</p>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Card className="concept-card">
              <Card.Body className="concept-body">
                <img variant="bottom" className="learn-img" src="https://raw.githubusercontent.com/SelenaHan/myblog/main/frontend/src/Images/react.png" alt="...post_image" />
                <Card.Title>
                  <h1 className="title r">React.js</h1>
                  </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          {Learnings3.map((Learning, index) => (
            <Col sm={4}><Card.Text className="learn-content">
              <p>{Learning.content}</p>
            </Card.Text>
            </Col>))}
        </Row>
      </Container>
      
      <Container fluid>
        <Row>
          {Learnings2.map((Learning, index) => (
            <Col sm={4}>
              <LearnCard title={Learning.title} content={Learning.content} img={Learning.img} />
            </Col>))}
        </Row>
      </Container>
      <p>It is better to learn some React UI Frameworks, they will save you so much time on CSS. And you could build beautiful websites very easily. Also Learn to use some popular React packages will make the development much easier. We also need to know some concepts about the back-end. In the end, it is better to learn how to use some tools</p>
      <Container fluid>
        <Row className="justify-content-md-center">
        </Row>
        <Row>
          {Learnings4.map((Learning, index) => (
            <Col sm={3}>
              <Card className="concept-card">
              <Card.Body className="concept-body">
                <Card.Title>
                  <h1 className="title">{Learning.title}</h1>
                  </Card.Title>
              <Card.Text>
              <p>{Learning.content}</p>
            </Card.Text>
            </Card.Body>
            </Card>
            </Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default LearnMap