import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const Home = () => {
  const [users, serUser] = useState([]);

  useEffect(() => {
    loadusers();
  }, []);

  const loadusers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    //console.log(result);
    serUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadusers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>CRUD Oprationn Using React JS with JSON Server</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Eamil</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/users/view/${user.id}`}
                    className="btn btn-primary"
                  >
                    view
                  </Link>
                  <Link
                    to={`/users/edit/${user.id}`}
                    className="btn btn-outline-primary m-1"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
