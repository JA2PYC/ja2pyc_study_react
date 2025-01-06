import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../axiosConfig';
import './../styles/Board.css';

function BoardForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', content: '', author: '' });

    useEffect(() => {
        if (id) {
            apiClient.get(`/posts/${id}`)
                .then(response => setFormData(response.data))
                .catch(error => console.error('Error fetching post:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiCall = id
            ? apiClient.put(`/posts/${id}`, formData)
            : apiClient.post('/posts', formData);

        apiCall
            .then(() => navigate('/'))
            .catch(error => console.error('Error saving post:', error));
    };

    return (
        <div>
            <h1>{id ? '게시물 수정' : '새 글 작성'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>내용:</label>
                    <textarea name="content" value={formData.content} onChange={handleChange} required></textarea>
                </div>
                <div>
                    <label>작성자:</label>
                    <input type="text" name="author" value={formData.author} onChange={handleChange} required />
                </div>
                <button type="submit">{id ? '수정' : '작성'}</button>
            </form>
            <button onClick={() => navigate('/')}>취소</button>
        </div>
    );
}

export default BoardForm;
