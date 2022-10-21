import React from 'react'
import './MyStyle.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lola from '../Images/lola.jpg';
import background from '../Images/background.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 function Header() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col><img className="header" src={background} alt="header-img" /></Col>
      </Row>
      <Row>
        <Col><img className="profile-img" src={lola} alt="header-img" /></Col>
      </Row>
      <Row>
        <Col lg={12} className='profile-name'><h1>Shuo Han</h1></Col>
        <Col lg={12} className="sub-title"><p>@SAIT</p>
        <p>A programmer who likes hiking! <FontAwesomeIcon icon="fa-solid fa-location-dot" /> Calgary</p></Col>
      </Row>
      <Row>
        <Col className='post-btn' s={6}><Button className="post-btn" variant="warning"><Link to="/add-post">
 <FontAwesomeIcon icon="fa-solid fa-plus" /> Post Content </Link></Button></Col>
      </Row>
      <Row>
      <hr />
      </Row>
    </Container>
    
  )
}

export default Header;