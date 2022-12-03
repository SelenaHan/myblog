import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Video from '../Video';
import DeleteCode from './DeleteCode';
import EditCode from './EditCode';

function UpdateDelete() {
  return (
    <div id="ud" >
      <h1 className="title">How to implement "Update" and "Delete"?</h1>
      <Container fluid>
        <Row>
          <h4>Update post</h4>
        </Row>
        <Row>
          <h6>Backend</h6>
        </Row>
        <Row>
          <p>-  Find the post by ID and get all the current data from database.</p>
          <p>-  Then use the “put” function to get the new input from the user and then update the data to the database.</p>
        </Row>
        <Row>
          <h6>Frontend</h6>
        </Row>
        <Row>
          <p>-	Create an EditPost component</p>
          <p>-	In this file, we use “useEffect” to get the current post data from the database and display the information in the form.</p>
          <p>-  Then use “useState” to get all the new data that is updated from the new user input.</p>
          <p>-	When the user clicks on the save button, the database will update the new content to the database.</p>
          <p>-	Send an alert message that shows if the post updated successfully or not.</p>
        </Row>
        <Row>
          <h6>Code Block</h6>
        <EditCode />
        </Row>
        <Row>
        <br />
        </Row>
        <Row>
          <h4>Delete post</h4>
        </Row>
        <Row>
          <h6>Backend</h6>
        </Row>
        <Row>
          <p>-  In the routes folder posts.js file, add router.delete function,  inside this function find the post by ID by using “findByIdAndDelete” function to delete the post.</p>
        </Row>
        <Row>
          <h6>Frontend</h6>
        </Row>
        <Row>
          <p>-  Using map functions for reading all the posts in Posts.js file, pass the posts to postcard which return a single post</p>
          <p>-  In the PostCard.js file, add a Delete function to the “delete” button, so when the user clicks on the delete button, then the database will grab this post’s ID then delete it, and then the browser will render all the posts again from the database, since that post has been deleted, then it won’t be displayed anymore.</p>
        </Row>
        <Row>
          <h6>Code Block</h6>
       <p> <DeleteCode /></p>
        </Row>
        <Row>
          <h6>This video is a demo of the Update and Delete functions</h6>
        </Row>
        <Row>
          <Video />
        </Row>
      </Container>
    </div>
  )
}

export default UpdateDelete
