import { useState } from "react";
import axios from "axios";

function EmployerDashboard() {

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: ""
  });

  const handleChange = (e) => {

    setJobData({
      ...jobData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/jobs",
        jobData
      );

      alert(response.data.message);

    }

    catch (error) {

      console.log(error);

      alert("Failed to Add Job");

    }

  };

  return (

    <div className="container mt-5">

      <div className="card shadow p-5">

        <h2 className="mb-4">
          Employer Dashboard
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="salary"
            placeholder="Salary"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Job Description"
            className="form-control mb-3"
            onChange={handleChange}
          ></textarea>

          <button className="btn btn-primary">
            Post Job
          </button>

        </form>

      </div>

    </div>
  );
}

export default EmployerDashboard;