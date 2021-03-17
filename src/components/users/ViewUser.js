import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  //   alert(id);
  const [user, setUser] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    website: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    // console.log(result.data);
    setUser(result.data);
  };
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 class="card-title ">User ID : {}</h5>
          <h6 class="card-subtitle my-2 text-muted">User Name : {user.name}</h6>
          <p class="card-text">Email ID : {user.email}</p>
          <p class="card-text">User Phone No : {user.phone}</p>
          <p class="card-text">Website : {user.website}</p>

          <Link to={`/`} class="card-link">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
