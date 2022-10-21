import React from 'react';
import PostCard from './PostCard';

const Posts = ({contents}) => {
  return (
    <div >
        {contents.map((post, index) => (
            <div>
            <PostCard title={post.title} post_content={post.post_content} id={post._id} key={index}/>
            <h1>Hellos</h1>
            </div>
        ))}
    </div>
  )
}

export default Posts


