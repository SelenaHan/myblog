import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Post = (props) => {
    const [title, setTitle] = useState('');
    const [post_content, setPost_content] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/posts/${id}`)
        .then(res => [
            setTitle(res.data.title),
            setPost_content(res.data.post_content)
        ])
        .catch(error => console.log(error));
    });
  return (
    <div>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <p>{post_content}</p>
    </div>
  )
}

export default Post;