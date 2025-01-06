import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from Spring Boot API
    fetch("http://localhost:8080/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <ul>
      {users.length > 0 ? (
        users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </ul>
  );
};

export default UserList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserList = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/users')
//             .then(response => {
//                 console.log('axios :', response)
//                 setUsers(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching users:', error);
//             });
//     }, []);

//     return (
//         <div>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                         {user.name} ({user.email})
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UserList;
