import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';
import PostList from './components/PostList';

const App = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [reloadKey, setReloadKey] = useState(0);  // 리렌더링을 위한 상태 추가

  const handleReload = () => {
    console.log(reloadKey);
    setReloadKey(prevKey => prevKey + 1);  // 상태를 변경하여 컴포넌트 리렌더링
  };

  return (
    <div style={styles.app}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} handleReload={handleReload} />
      <main style={styles.main}>
        {activeTab === 'users' && <UserList key={reloadKey} />}
        {activeTab === 'posts' && <PostList key={reloadKey} />}
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  app: { display: 'flex', flexDirection: 'column', height: '100vh' },
  main: { flex: '1', padding: '20px' },
};

export default App;

// import React, { useState } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import UserList from './components/UserList';
// import PostList from './components/PostList';

// const App = () => {
//     const [activeTab, setActiveTab] = useState('posts');

//     return (
//         <div style={styles.app}>
//             <Header activeTab={activeTab} setActiveTab={setActiveTab} />
//             <main style={styles.main}>
//                 {activeTab === 'users' && <UserList />}
//                 {activeTab === 'posts' && <PostList />}
//             </main>
//             <Footer />
//         </div>
//     );
// };
    
// const styles = {
//     app: { display: 'flex', flexDirection: 'column', height: '100vh' },
//     main: { flex: '1', padding: '20px' },
// };

// export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import BoardList from './components/BoardList';
// // import BoardDetail from './components/BoardDetail';
// // import BoardForm from './components/BoardForm';

// // function App() {
// //     return (
// //         <Router>
// //             <Routes>
// //                 <Route path="/" element={<BoardList />} />
// //                 <Route path="/posts/:id" element={<BoardDetail />} />
// //                 <Route path="/create" element={<BoardForm />} />
// //                 <Route path="/edit/:id" element={<BoardForm />} />
// //             </Routes>
// //         </Router>
// //     );
// // }

// // export default App;

// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Header from "./components/Header";
// // // import Footer from "./components/Footer";
// // // import MainPage from "./pages/MainPage";
// // // import BoardPage from "./pages/BoardPage";

// // // // App.js
// // // import "./styles/App.css";

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <Header />
// // //       <div style={{ padding: "20px" }}>
// // //         <Routes>
// // //           <Route path="/" element={<MainPage />} />
// // //           <Route path="/board" element={<BoardPage />} />
// // //         </Routes>
// // //       </div>
// // //       <Footer />
// // //     </Router>
// // //   );
// // // };

// // // export default App;

// // // import logo from './logo.svg';
// // // import './App.css';
// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;default App;

// // // import React, { useEffect, useState } from 'react';
// // // import { getUsers } from './api';

// // // const App = () => {
// // //     const [users, setUsers] = useState([]);

// // //     useEffect(() => {
// // //         getUsers().then((response) => setUsers(response.data));
// // //     }, []);

// // //     return (
// // //         <div>
// // //             <h1>User List</h1>
// // //             <ul>
// // //                 {users.map((user) => (
// // //                     <li key={user.id}>{user.name}</li>
// // //                 ))}
// // //             </ul>
// // //         </div>
// // //     );
// // // };

// // // export default App;

// // // import React from 'react';
// // // import UserList from './components/UserList';

// // // function App() {
// // //   return (
// // //     <div>
// // //       <h1>User List</h1>
// // //       <UserList />
// // //     </div>
// // //   );
// // // }

// // // export default App;
