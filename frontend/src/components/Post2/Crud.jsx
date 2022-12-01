import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Crud() {
  return (
    <div id="crud" >
      <h1 className="title">What is CRUD?</h1>
      <Container fluid>
        <Row>
          <p>CRUD stands for create, read, update, and delete. Almost every application is a CRUD application.</p>
        </Row>
        <Row>
          <p>Let’s first talk about REST. REST stands for Representational State Transfer. It is used to build web services, usually referred to as an architectural style rather than a protocol. In REST architecture, two software programs can communicate with each other, one program can request and manipulate resources from the other one. REST request for accessing resources on the target program uses HTTP verbs: GET, POST, PUT, and DELETE.</p>
        </Row>
        <Row>
          <p>The CRUD (create—POST, read—GET, update—PUT, delete--DELETE) corresponds to those HTTP methods.  These requests are very flexible, the data format can be XML, HTML, and JSON. As we talked about before, JSON is the most preferred data format as it is the most compatible and easy to use.</p>
        </Row>
      </Container>
    </div>
  )
}

export default Crud
