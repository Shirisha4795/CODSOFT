import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobDetails from "./pages/JobDetails";
import EmployerDashboard from "./pages/EmployerDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/employer-dashboard"
          element={<EmployerDashboard />}
        />

        <Route
          path="/candidate-dashboard"
          element={<CandidateDashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;