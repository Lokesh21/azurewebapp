import axios from "axios";
import { useState, useEffect } from "react";
import "../css/User.css";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://web-user-eastus-dev-001.azurewebsites.net/getAllUser")
      .then((response) => {
        setUsers(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
