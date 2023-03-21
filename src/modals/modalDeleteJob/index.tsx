import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Modal from "react-modal";
import "../modal.css";
import { ContainerDeleteJob } from "./style";
import { JobContext } from "../../context/JobContext";




const ModalDeleteJob = () => {
  const { modalDeleteJobIsOpen, closeDeleteJob } = useContext(ModalContext);
  const {deleteJob, selectedJob} = useContext(JobContext)

  return (
    <Modal
      isOpen={modalDeleteJobIsOpen}
      onRequestClose={closeDeleteJob}
      className="modal"
    >
      <ContainerDeleteJob>
        <div className="text">
          <h1> Tem certeza que deseja excluir esse item?</h1>
          <p> Essa ação não poderá ser desfeita depois!</p>
        </div>
        <div className="btn">
          <button className="yes" onClick={async () =>{
           await deleteJob(selectedJob.id)
            closeDeleteJob()
          }}> Sim, tenho certeza</button>
          <button className="cancel" onClick={closeDeleteJob}> Cancelar</button>
        </div>
      </ContainerDeleteJob>
    </Modal>
  );
};

export default ModalDeleteJob;
