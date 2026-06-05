import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

function JobDetails() {

  const { id } = useParams();

  const [job, setJob] = useState(null);

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    skills: "",

    resume: null

  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  fetchJob();
}, []);
  const fetchJob = async () => {

    try {

      const response = await axios.get(

        `http://localhost:5000/api/jobs/${id}`

      );

      setJob(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const handleChange = (e) => {

    if (e.target.name === "resume") {

      setFormData({

        ...formData,

        resume: e.target.files[0]

      });

    }

    else {

      setFormData({

        ...formData,

        [e.target.name]: e.target.value

      });

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append("name", formData.name);

      data.append("email", formData.email);

      data.append("skills", formData.skills);

      data.append("resume", formData.resume);

      data.append("jobId", id);

      const response = await axios.post(

        "http://localhost:5000/api/applications/apply",

        data

      );

      // Save applied jobs locally

      const existingJobs = JSON.parse(

        localStorage.getItem("appliedJobs")

      ) || [];

      existingJobs.push(job.title);

      localStorage.setItem(

        "appliedJobs",

        JSON.stringify(existingJobs)

      );

      alert(response.data.message);

    }

    catch (error) {

      console.log(error);

      alert("Application Failed");

    }

  };

  if (!job) {

    return <h2 className="text-center mt-5">Loading...</h2>;

  }

  return (

    <div className="container mt-5">

      <div className="card shadow p-5">

        <h2>
          {job.title}
        </h2>

        <h4 className="text-primary">
          {job.company}
        </h4>

        <p className="mt-3">
          <strong>Location:</strong>
          {" "}
          {job.location}
        </p>

        <p>
          <strong>Salary:</strong>
          {" "}
          {job.salary}
        </p>

        <p>
          <strong>Description:</strong>
          {" "}
          {job.description}
        </p>

        <hr />

        <h3 className="mb-4">
          Apply for this Job
        </h3>

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
            type="text"
            name="skills"
            placeholder="Enter Skills"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="file"
            name="resume"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-success">
            Submit Application
          </button>

        </form>

      </div>

    </div>

  );
}

export default JobDetails;