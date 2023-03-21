import Modal from "react-modal";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import "../modal.css";
import { ModalJobContainer } from "./styles";
import { JobContext } from "../../context/JobContext";

/* interface IJobData {
    description: string;
    regime: string;
    modality: string;
    requiredTechs: string;
  } */

//{description, regime, modality, requiredTechs}: IJobData

const ModalJob = () => {
  const { modalJobIsOpen, openJob, closeJob } = useContext(ModalContext);
  const { selectedJob } = useContext(JobContext);

  return (
    <Modal isOpen={modalJobIsOpen} onRequestClose={closeJob} className="modal">
      <ModalJobContainer>
        <button onClick={closeJob} className={"btnClose"}>
          {" "}
          x{" "}
        </button>
        <div className="container">
          <section className="containerDescription">
            <h2>Desenvolvedor Node Js</h2>
            <div>
              <span>
                <b>Descrição: </b> {selectedJob.description}
              </span>
            </div>
            <div>
              <span>
                <b>Regime: </b>
                {selectedJob.regime}
              </span>
            </div>
            <div>
              <span>
                <b>Modalidade: </b>
                {selectedJob.modality}
              </span>
            </div>
          </section>
          <ul className="ulTechs">
            {" "}
            <b className="techs">Tecnologias necessárias: </b>
            {selectedJob.requirements?.map((tech, idx) => (
              <li>
                {tech.name}
                <div>
                  <b>Tempo de experiêcia:</b> {tech.yearsOfExperience} anos
                </div>
              </li>
            ))}
            <li>
              <div>
                <b>Salário:</b> R$
                {selectedJob.salary}
              </div>
            </li>
          </ul>
        </div>
        <div className="divButon">
          <button>Tenho interesse</button>
        </div>
      </ModalJobContainer>
    </Modal>
  );
};

export default ModalJob;
