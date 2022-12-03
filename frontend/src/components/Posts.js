import React, {useState, useEffect} from 'react';
import axios from "axios";
import PostCard from './PostCard';

const Posts = () => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
      axios.get("/posts")
      .then(res => setContents(res.data))
      .catch(error => console.log(error));
  });
  return (
    <div >
        {contents.map((post, index) => (
           <div> 
            <PostCard title={post.title} post={post} post_content={post.post_content} img={post.post_img} id={post._id} key={index}/>
            </div>
            
        ))}
    </div>
  )
}

export default Posts


