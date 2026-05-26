import { Link } from "react-router-dom";

function Home() {

  return (

    <div
      className="page-animation"
      style={{
        minHeight: "100vh",
        background: "#eef4ff"
      }}
    >

      <div className="container py-5">

        {/* HERO SECTION */}

        <div className="row align-items-center">

          {/* LEFT CONTENT */}

          <div className="col-md-6">

            <h1
              className="fw-bold"
              style={{
                fontSize: "55px",
                color: "#2563eb",
                lineHeight: "1.3"
              }}
            >
              Find Your
              <br />
              Dream Job
            </h1>

            <p
              className="mt-4"
              style={{
                fontSize: "18px",
                color: "#555"
              }}
            >
              Explore thousands of jobs and
              apply easily with one click.
            </p>

            <div className="mt-4">

              <Link
                to="/jobs"
                className="btn btn-lg me-3"
                style={{
                  background: "#2563eb",
                  color: "white",
                  borderRadius: "12px",
                  padding: "12px 28px",
                  border: "none"
                }}
              >
                Explore Jobs
              </Link>

              <Link
                to="/register"
                className="btn btn-lg"
                style={{
                  background: "#dbeafe",
                  color: "#2563eb",
                  borderRadius: "12px",
                  padding: "12px 28px",
                  border: "none"
                }}
              >
                Get Started
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="col-md-6 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Job"
              className="img-fluid"
              style={{
                maxHeight: "420px"
              }}
            />

          </div>

        </div>

        {/* FEATURED JOBS */}

        <div className="mt-5">

          <h2
            className="text-center fw-bold mb-5"
            style={{
              color: "#2563eb"
            }}
          >
            Featured Jobs
          </h2>

          <div className="row">

            {/* JOB 1 */}

            <div className="col-md-3 mb-4">

              <div
                className="card border-0 h-100"
                style={{
                  borderRadius: "20px",
                  background: "#ffffff"
                }}
              >

                <div className="card-body text-center p-4">

                  <div
                    style={{
                      fontSize: "45px"
                    }}
                  >
                    💻
                  </div>

                  <h5
                    className="fw-bold mt-3"
                    style={{
                      color: "#2563eb"
                    }}
                  >
                    Frontend Developer
                  </h5>

                  <p
                    style={{
                      color: "#666"
                    }}
                  >
                    TCS • Hyderabad
                  </p>

                  <button
                    className="btn mt-3"
                    style={{
                      background: "#2563eb",
                      color: "white",
                      borderRadius: "10px",
                      width: "100%"
                    }}
                  >
                    Apply Now
                  </button>

                </div>

              </div>

            </div>

            {/* JOB 2 */}

            <div className="col-md-3 mb-4">

              <div
                className="card border-0 h-100"
                style={{
                  borderRadius: "20px",
                  background: "#ffffff"
                }}
              >

                <div className="card-body text-center p-4">

                  <div
                    style={{
                      fontSize: "45px"
                    }}
                  >
                    ⚙️
                  </div>

                  <h5
                    className="fw-bold mt-3"
                    style={{
                      color: "#7c3aed"
                    }}
                  >
                    Backend Developer
                  </h5>

                  <p
                    style={{
                      color: "#666"
                    }}
                  >
                    Infosys • Bangalore
                  </p>

                  <button
                    className="btn mt-3"
                    style={{
                      background: "#7c3aed",
                      color: "white",
                      borderRadius: "10px",
                      width: "100%"
                    }}
                  >
                    Apply Now
                  </button>

                </div>

              </div>

            </div>

            {/* JOB 3 */}

            <div className="col-md-3 mb-4">

              <div
                className="card border-0 h-100"
                style={{
                  borderRadius: "20px",
                  background: "#ffffff"
                }}
              >

                <div className="card-body text-center p-4">

                  <div
                    style={{
                      fontSize: "45px"
                    }}
                  >
                    🎨
                  </div>

                  <h5
                    className="fw-bold mt-3"
                    style={{
                      color: "#db2777"
                    }}
                  >
                    UI/UX Designer
                  </h5>

                  <p
                    style={{
                      color: "#666"
                    }}
                  >
                    Wipro • Chennai
                  </p>

                  <button
                    className="btn mt-3"
                    style={{
                      background: "#db2777",
                      color: "white",
                      borderRadius: "10px",
                      width: "100%"
                    }}
                  >
                    Apply Now
                  </button>

                </div>

              </div>

            </div>

            {/* JOB 4 */}

            <div className="col-md-3 mb-4">

              <div
                className="card border-0 h-100"
                style={{
                  borderRadius: "20px",
                  background: "#ffffff"
                }}
              >

                <div className="card-body text-center p-4">

                  <div
                    style={{
                      fontSize: "45px"
                    }}
                  >
                    📊
                  </div>

                  <h5
                    className="fw-bold mt-3"
                    style={{
                      color: "#ea580c"
                    }}
                  >
                    Data Analyst
                  </h5>

                  <p
                    style={{
                      color: "#666"
                    }}
                  >
                    Accenture • Pune
                  </p>

                  <button
                    className="btn mt-3"
                    style={{
                      background: "#ea580c",
                      color: "white",
                      borderRadius: "10px",
                      width: "100%"
                    }}
                  >
                    Apply Now
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Home;