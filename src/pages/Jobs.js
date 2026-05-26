import { useEffect, useState } from "react";

import axios from "axios";

import JobCard from "../components/JobCard";

function Jobs() {

  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const filteredJobs = jobs.filter((job) =>

    job.title.toLowerCase().includes(
      search.toLowerCase()
    ) ||

    job.company.toLowerCase().includes(
      search.toLowerCase()
    ) ||

    job.location.toLowerCase().includes(
      search.toLowerCase()
    )

  );

  return (

    <div className="container mt-5 page-animation">

      <h2 className="text-center mb-4">
        Available Jobs
      </h2>

      <input
        type="text"
        placeholder="Search jobs..."
        className="form-control mb-5"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="row">

        {filteredJobs.map((job) => (

          <JobCard
            key={job._id}
            job={job}
          />

        ))}

      </div>

    </div>

  );
}

export default Jobs;