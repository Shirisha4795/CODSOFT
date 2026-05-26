import { useState } from "react";

import axios from "axios";

function Login() {

  const [formData, setFormData] = useState({

    email: "",
    password: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://localhost:5000/api/auth/login",

        formData

      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful");

    }

    catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return (

    <div className="container mt-5 page-animation">

      <div
        className="card shadow p-5 mx-auto"
        style={{ maxWidth: "500px" }}
      >

        <h2 className="text-center mb-4">
          Login
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;