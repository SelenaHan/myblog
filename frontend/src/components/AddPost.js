import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [post_content, setPost_content] = useState("");
  const [message, setMessage] = useState("");

  const [fileName, setFileName] = useState("");

  const onChangeFile = e => {
    setFileName(e.target.files[0]);
  }

  const changeOnClick = e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("post_content", post_content);
    formData.append("post_img", fileName);


    axios.post("posts/add", formData)
      .then(res => [alert(res.data),
        setMessage(res.data)])
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <Link className="title-link form" to={{ pathname: "/" }}>
        <Button variant="link" className='goback'>
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back to Home
        </Button>
      </Link>

      <h4 className='form'>Edit Post</h4>
      <h6 className='form update-message'>{message}</h6>
      <Form className='form' onSubmit={changeOnClick} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Post title</Form.Label>
          <Form.Control type="text" placeholder="Please input the title" value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="post_content">
          <Form.Label>Post content</Form.Label>
          <Form.Control as="textarea" placeholder="Please input the content here" rows={3} value={post_content} onChange={e => setPost_content(e.target.value)} />
        </Form.Group>
        <div>

          <label htmlFor='file'>Choose post image</label>
          <br />
          <input
            type="file"
            filename="post_img"
            onChange={onChangeFile}
          />

        </div>
        <Button className="form-btn" variant="warning" type="submit" >
          Post
        </Button>
      </Form>
    </div>
  )
}

export default AddPost;