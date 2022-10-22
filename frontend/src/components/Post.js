import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SinglePostCard from './SinglePostCard';

const Post = () => {
    const [title, setTitle] = useState('');
    const [post_content, setPost_content] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`posts/${id}`)
        .then(res => [
            setTitle(res.data.title),
            setPost_content(res.data.post_content)
        ])
        .catch(error => console.log(error));
    });
  return (
    <div>
        <SinglePostCard title={title} post_content={post_content} id={id}/>
    </div>
  )
}

export default Post;