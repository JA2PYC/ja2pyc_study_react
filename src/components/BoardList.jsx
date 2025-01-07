import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../axiosConfig';
import './../styles/Board.css';

function BoardList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        apiClient.get('/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h1>게시판</h1>
            <Link to="/create">새 글 쓰기</Link>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BoardList;
