import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, email, name, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;