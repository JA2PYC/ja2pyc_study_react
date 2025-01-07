import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2025 JA2PYC</p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#282c34',
        color: 'white',
    },
};

export default Footer;