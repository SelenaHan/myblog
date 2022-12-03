import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

function DeleteCode() {
    return (
        <CopyBlock
            text={`
// Posts.js file
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

// PostCard.js file
function PostCard(props) {
    const [count, setCount] = useState(1);
    const [countNumber, setCountNumber] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        setCount(count + 1);
        setCountNumber("+" + count);
    }
    //delete post by id
    const deletePost = () => {
        axios.delete(\`/posts/delete/$\{props.id}\`)
            .then(res => alert(res.data));
            window.location.reload(false);
    }
    return (
        <Card className="post-card">
            <Card.Body className="card-body">
                <Card.Title><Link className="title-link" to={{ pathname: \`/posts/$\{props.id}\` }}>
                    <h3>{props.title}</h3></Link></Card.Title>
                <Card.Text className='textarea'>
                    {props.post_content}
                </Card.Text>
            </Card.Body>
            <img variant="bottom" className="card-img" src={process.env.PUBLIC_URL + \`/uploads/$\{props.img}\`} alt="...post_image" />
            <span>
                <Button variant="link" className='heart-btn' onClick={handleClick}><FontAwesomeIcon icon="fa-solid fa-heart" /> {countNumber}</Button>
                <Link className="title-link" to={{ pathname: \`/update/$\{props.id}\` }}>
                    <Button variant="link" className='card-btn'>
                        <FontAwesomeIcon icon="fa-solid fa-pen" /> Edit
                    </Button>
                </Link>
                <Button variant="link" className='card-btn' onClick={deletePost}><FontAwesomeIcon icon="fa-solid fa-trash" /> Delete</Button></span>
        </Card>
    )
}

export default PostCard;
        `}
            language={`javascript`}
            theme={dracula}
        />
    );
}
export default DeleteCode