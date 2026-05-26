import { Link } from "react-router-dom";

function JobCard({ job }) {

  return (

    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">

        <div className="card-body">

          <h4>
            {job.title}
          </h4>

          <h5 className="text-primary">
            {job.company}
          </h5>

          <p>
            {job.location}
          </p>

          <p>
            {job.salary}
          </p>

          <Link
            to={`/jobs/${job._id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>

  );
}

export default JobCard;