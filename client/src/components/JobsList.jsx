import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import Spinner from "./Spinner";

const JobsList = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data through useEfect
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "?_limit=3" : "";
      const baseUrl =
        import.meta.env.MODE === "production"
          ? "https://react-job-anz2.onrender.com"
          : "/api"; // Use /api for local development with Vite proxy
      try {
        const res = await fetch(`${baseUrl}/jobs${apiUrl}`);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error Fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [jobs]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {" "}
            {jobs.map((job) => (
              <JobList key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsList;
