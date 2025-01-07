import React from 'react';

const Header = ({ activeTab, setActiveTab, handleReload}) => {
    return (
        <header style={styles.header}>
            <h1 onClick={handleReload} style={styles.h1}>JA2PYC</h1>
            <nav>
                <button 
                    style={activeTab === 'users' ? styles.activeTab : styles.tab} 
                    onClick={() => setActiveTab('users')}
                >
                    Users
                </button>
                <button 
                    style={activeTab === 'posts' ? styles.activeTab : styles.tab} 
                    onClick={() => setActiveTab('posts')}
                >
                    Posts
                </button>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: 'white',
    },
    h1: {
        cursor: 'pointer'
    },
    tab: {
        margin: '0 10px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: 'white',
        color: '#282c34',
        border: 'none',
        borderRadius: '5px',
    },
    activeTab: {
        margin: '0 10px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: '#61dafb',
        color: '#282c34',
        border: 'none',
        borderRadius: '5px',
    },
};

export default Header;


// import "./../styles/Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <nav>
//         <a href="/">Main</a>
//         <a href="/board">Board</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;
