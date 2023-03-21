import Button from "../button";
import { StyleManageJob } from "./style";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import ModalEditJob from "../../modals/modalEditJob";
import { IJob, JobContext } from "../../context/JobContext";

interface ICardManageJob {
  job: IJob;
}

const CardManageJob = ({ job }: ICardManageJob) => {
  const { openEditJob, openDeleteJob } = useContext(ModalContext);
  const { selectedJob, setSelectedJob } = useContext(JobContext);
  return (
    <StyleManageJob>
      <h3>{job.title}</h3>
      <div className="divTextDev">
        <p>
          {" "}
          <span>Descrição da vaga: </span>
          {job.description}
        </p>
        <span>Tecnologias exigidas: </span>
        <p>
          {" "}
          {job.requirements?.map((tech, idx) => (
            <li>
              <p>{tech.name}</p>
              <div>Tempo de experiêcia: {tech.yearsOfExperience} anos</div>
            </li>
          ))}
        </p>
      </div>
      <div className="divButtonCardDev">
        <Button
          text="Editar vaga"
          onClick={() => {
            setSelectedJob(job);
            openEditJob();
          }}
        />
        <button
          className="buttonNointerest"
          onClick={() => {
            setSelectedJob(job);
            openDeleteJob();
          }}
        >
          Excluir vaga
        </button>
      </div>
    </StyleManageJob>
  );
};

export default CardManageJob;
