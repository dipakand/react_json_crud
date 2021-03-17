import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUsers = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    uaername: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputCahnge = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-100 mx-auuto shadow p-5">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={(e) => onsubmit(e)}>
          <div className="form-group">
            <label>Enter Your Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => onInputCahnge(e)}
            />
          </div>

          <div className="form-group">
            <label>Enter Your Uer Name</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => onInputCahnge(e)}
            />
          </div>
          <div className="form-group">
            <label>Enter Your Email Address</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => onInputCahnge(e)}
            />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Phone Number</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={phone}
              onChange={(e) => onInputCahnge(e)}
            />
          </div>
          <div className="form-group">
            <label>Enter Your website</label>
            <input
              type="text"
              className="form-control"
              name="website"
              value={website}
              onChange={(e) => onInputCahnge(e)}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
