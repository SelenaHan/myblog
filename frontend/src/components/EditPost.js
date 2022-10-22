import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [post_content, setPost_content] = useState("");
    const { id } = useParams();
    const [message, setMessage] = useState("");

    const changeOnClick = e => {
        e.preventDefault();
        const posts = {
            title,
            post_content
        };

        
        setTitle('')
        setPost_content('')

        axios.put(`posts/update/${id}`, posts)
            .then(res => setMessage(res.data))
            .catch(err => {
                console.log(err);
            });
    }; 

    useEffect(() => {
        axios.get(`/posts/${id}`)
        .then(res => [
            setTitle(res.data.title),
            setPost_content(res.data.post_content)
        ])
        .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Link className="title-link form" to={{pathname: "/"}}>
            <Button variant="link" className='goback'>
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back to Home
                </Button>
                </Link>

            <h4 className='form'>Edit Post</h4>
            <h6 className='form update-message'>{message}</h6>
            <Form className='form' onSubmit={changeOnClick}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Post title</Form.Label>
                    <Form.Control type="text" onChange={e => setTitle(e.target.value)} value={title}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="post_content">
                    <Form.Label>Post content</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={e => setPost_content(e.target.value)} value={post_content}/>
                </Form.Group>
                <Button className="form-btn" variant="warning" type="submit" >
                    Update Post
                </Button>
            </Form>
        </div>
    )
}

export default EditPost;