import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div style={styles.container}>
            <h2>Post List</h2>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} style={styles.postCard}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    );
};

const styles = {
    container: { padding: '20px', maxHeight: '400px', overflowY: 'auto' },
    postCard: { 
        border: '1px solid #ccc', 
        padding: '10px', 
        marginBottom: '10px', 
        borderRadius: '5px' 
    },
};

export default PostList;
