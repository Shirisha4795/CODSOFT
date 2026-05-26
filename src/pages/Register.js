import { useState } from "react";
import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate"
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
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(response.data.message);

    }

    catch (error) {

      alert("Registration Failed");

      console.log(error);

    }

  };

  return (

    <div className="container mt-5">

      <div
        className="card shadow p-5 mx-auto"
        style={{ maxWidth: "500px" }}
      >

        <h2 className="text-center mb-4">
          Register
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

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

          <select
            name="role"
            className="form-control mb-3"
            onChange={handleChange}
          >

            <option value="candidate">
              Candidate
            </option>

            <option value="employer">
              Employer
            </option>

          </select>

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;