import { JobContext } from "../../context/JobContext";
import CardJob from "../cardJob";
import { useEffect } from "react";
import { useContext } from "react";

const JobList = () => {
  const { listJobs, allJobs } = useContext(JobContext);

  useEffect(() => {
    listJobs();
  }, []);

  return (
    <>
      <ul>
        {allJobs.length > 0 ? (
          allJobs.map((job) => <CardJob key={job.id} job={job} />)
        ) : (
          <p>Não há vagas sendo ofertadas no momento... :(</p>
        )}
      </ul>
    </>
  );
};

export default JobList;
