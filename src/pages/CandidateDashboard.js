function CandidateDashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const appliedJobs = JSON.parse(
    localStorage.getItem("appliedJobs")
  ) || [];

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Candidate Dashboard
      </h2>

      <div className="card shadow p-4 mb-4">

        <h4 className="mb-3">
          Profile Information
        </h4>

        <p>
          <strong>Name:</strong>
          {" "}
          {user?.name}
        </p>

        <p>
          <strong>Email:</strong>
          {" "}
          {user?.email}
        </p>

        <p>
          <strong>Role:</strong>
          {" "}
          {user?.role}
        </p>

      </div>

      <div className="card shadow p-4">

        <h4 className="mb-3">
          Applied Jobs
        </h4>

        {appliedJobs.length > 0 ? (

          <ul>

            {appliedJobs.map((job, index) => (

              <li key={index}>
                {job}
              </li>

            ))}

          </ul>

        ) : (

          <p>No Applied Jobs</p>

        )}

      </div>

    </div>
  );
}

export default CandidateDashboard;