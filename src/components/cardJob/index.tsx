import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Button from "../button";
import { StyledCardJob } from "./styles";
import ModalJob from "../../modals/modalJob";
import { IJob, JobContext } from "../../context/JobContext";
import { UserContext } from "../../context/UserContext";

interface ICardJob {
  job: IJob;
}

const CardJob = ({ job }: ICardJob) => {
  const { openJob } = useContext(ModalContext);
  const { setSelectedJob, setAllJobs } = useContext(JobContext);
  return (
    <StyledCardJob>
      <h3>{job.title}</h3>
      <div className="divTextDev">
        <p>
          <span>Empresa: </span>
          {job.company.company.name}
        </p>
        <p>
          <span>Descrição da vaga </span>
          {job.description}
        </p>
        <p>
          <span>Cidade: </span>
          {job.company.company.address.city}
        </p>
      </div>
      <div className="divButtonCardDev">
        <Button
          text="Mais informações"
          onClick={() => {
            setSelectedJob(job);
            openJob();
          }}
        />
        <button
          onClick={() => {
            setAllJobs((oldAllJobs) =>
              oldAllJobs.filter((j) => j.id !== job.id)
            );
          }}
          className="buttonNointerest"
        >
          Não tenho interesse
        </button>
      </div>
    </StyledCardJob>
  );
};

export default CardJob;
