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


        axios.put(`/posts/update/${id}`, formData)
            .then(res => [alert(res.data),
            setMessage(res.data)])
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios.get(`/posts/${id}`)
            .then(res => [
                setTitle(res.data.title),
                setPost_content(res.data.post_content),
                setFileName(res.data.post_img)
            ])
            .catch(error => console.log(error));
    }, []);

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
                    <Form.Control type="text" onChange={e => setTitle(e.target.value)} value={title} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="post_content">
                    <Form.Label>Post content</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={e => setPost_content(e.target.value)} value={post_content} />
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
                    Update Post
                </Button>
            </Form>
        </div>
    )
}

export default EditPost;