import { useState, useEffect } from "react";

import "./App.css";

function App() {
  // const Sample = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());

    setUsers(users);
  };
  // };
  console.log(users);
  return (
    <>
      {users.length > 0 && (
        <>
          <div>User List:</div>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
