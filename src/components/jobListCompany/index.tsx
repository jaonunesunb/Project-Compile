import { useContext, useEffect } from "react";
import CardManageJob from "../cardManageJob";
import { JobContext } from "../../context/JobContext";
import { UserContext } from "../../context/UserContext";

const JobListCompany = () => {
  const { listJobs, allJobs } = useContext(JobContext);
  const { user } = useContext(UserContext);

  const filterJobs = allJobs.filter((job) => job.userId === user?.id);

  useEffect(() => {
    listJobs();
  }, []);
  return (
    <ul className="companyListJob">
      {filterJobs.length > 0 ? (
        filterJobs.map((job) => <CardManageJob key={job.id} job={job} />)
      ) : (
        <p>Você ainda não postou nenhuma vaga... :(</p>
      )}
    </ul>
  );
};

export default JobListCompany;
