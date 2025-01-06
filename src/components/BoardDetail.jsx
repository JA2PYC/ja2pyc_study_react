import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import apiClient from '../axiosConfig';
import '../styles/Board.css';

function BoardDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        apiClient.get(`/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error('Error fetching post:', error));
    }, [id]);

    const handleDelete = () => {
        apiClient.delete(`/posts/${id}`)
            .then(() => navigate('/'))
            .catch(error => console.error('Error deleting post:', error));
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>작성자: {post.author}</p>
            <Link to={`/edit/${post.id}`}>수정</Link>
            <button onClick={handleDelete}>삭제</button>
            <Link to="/">목록으로</Link>
        </div>
    );
}

export default BoardDetail;
