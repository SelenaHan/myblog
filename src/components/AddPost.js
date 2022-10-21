import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const AddPost = () => {
const [title, setTitle] = useState("");
const [post_content, setPost_content] = useState("");

const changeOnClick = e => {
    e.preventDefault();
    const posts = {
        title,
        post_content
    };

    setTitle('')
    setPost_content('')

    axios.post("/posts/add", posts)
    .then(res => console.log(res.data))
    .catch(err => {console.log(err);
    });
};
  return (
    <div>
        <h4 className='form'>Add new post</h4>
    <Form className='form' onSubmit={changeOnClick}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Post title</Form.Label>
        <Form.Control type="text" placeholder="Please input the tile" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="post_content">
        <Form.Label>Post content</Form.Label>
        <Form.Control as="textarea" placeholder="Please input the content here" rows={3} value={post_content} onChange={e => setPost_content(e.target.value)} />
      </Form.Group>
      <Button className="form-btn" variant="warning" type="submit" >
        Post
      </Button>
    </Form>
    </div>
  )
}

export default AddPost;