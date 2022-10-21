import React from 'react'
import './MyStyle.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 function Footer() {
  return (
    <Container fluid className="p-0 footer">
      <Row>
      <hr />
      </Row>
      <Row>
        <Col lg={12} className="copyright"><p>&copy;{new Date().getFullYear()} All Rights Reserved. Shuo Han</p></Col>
      </Row>
    </Container>
  )
}

export default Footer;