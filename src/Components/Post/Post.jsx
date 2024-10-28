import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate()
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>Post of id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetails}>Click To see Details</button>
        </div>
    );
};

export default Post;