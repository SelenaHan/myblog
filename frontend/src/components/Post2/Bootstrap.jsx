import { faBold } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BootstrapVideo from './BootstrapVideo';
import CodeBlock from './CodeBlock';

function Bootstrap() {
  return (
    <div id="bs" >
      <h1 className="title">How to use Bootstrap?</h1>
      <Container fluid>
        <Row>
          <a href="https://react-bootstrap.github.io/" className="links"><p>React Bootstrap</p></a>
        </Row>
        <Row>
          <a href="https://getbootstrap.com/" className="links"><p>Bootstrap</p></a>
        </Row>
        <Row>
          <p>In the beginning, I refused to use bootstrap, because I just could get it to work properly. But after I figured it out, I just love it, now I can’t imagine how to make a nice website without Bootstrap. There are also other UI frameworks, they are all similar. I hope I could use my experience to make your Bootstrap setup easier.</p>
        </Row>
        <Row>
          <h4>How to setup Bootstrap?</h4>
        </Row>
        <Row>
          <h6>1.	install bootstrap</h6>
        </Row>
        <Row>
          <p><CodeBlock text={`npm install react-bootstrap bootstrap    `} /></p>

        </Row>
        <Row>
          <h6>2.	Connect to Bootstrap</h6>
          <p>There are two ways to do this, download Bootstrap From Bootstrap website, or include Bootstap from a CDN (Content Delivery Network).</p>
          <p>I choose to include a CDN. because many users already have downloaded Bootstrap. So, when these users visit our website, the style will be loaded from Cache. It will be much faster. And their server is everywhere, CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.</p>
          <p>In the <em>index.html</em> file, include this link to the head tag</p>
        </Row>
        <Row>
          <p> <CodeBlock text={`<link 
    rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous" 
    />`} /></p>
        </Row>
        <Row>
          <h6>3.	Import Bootstrap component and use it</h6>
        </Row>
        <Row>
          <p><CodeBlock text={`import Card from 'react-bootstrap/Card';   `} /></p>
        </Row>
        <Row>
          <h6>This video is a demo of how to use the Bootstrap component and how to customize it</h6>
        </Row>
        <Row>
          <BootstrapVideo />
        </Row>
      </Container>
    </div>
  )
}

export default Bootstrap
