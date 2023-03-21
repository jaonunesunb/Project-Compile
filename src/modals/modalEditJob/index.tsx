import Modal from "react-modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Input from "../../components/input";
import TechForm from "../../components/techForm";
import { ITech, UserContext } from "../../context/UserContext";
import { TechContext } from "../../context/TechContext";
import { IJob, JobContext } from "../../context/JobContext";
import { ContainerEditJob } from "./style";
import "../modal.css"
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";


export interface IForm {
  userId?: number;
  title: string;
  description: string;
  regime: "PJ" | "CLT" | null;
  modality: "Presencial" | "Remoto" | "Híbrido";
  requirements: ITech[];
  salary?: number;
}

const ModalEditJob = () => {
  const { modalEditJobIsOpen, closeEditJob } = useContext(ModalContext);
  const {user}= useContext(UserContext)
  const { techs } = useContext(TechContext);
  const {editJob, selectedJob}= useContext(JobContext)

  const formSchema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    regime: yup.string(),
    modality: yup.string(),
    salary: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(formSchema) });

  if(user === null){
    return(
      <></>
    )
  }

  if("dev" in user){
    return(
      <Navigate to= "/dev/job-list"/>
    )
  }

  const submitHandler = async (data: IForm) => {
    console.log("Hook-form data:", data);
    console.log("techs state:", techs);

    const body: IJob = {
      userId: user?.id,
      title: data.title? data.title: selectedJob.title ,
      description: data.description? data.description: selectedJob.description,
      regime: data.regime? data.regime: selectedJob.regime,
      modality: data.modality? data.modality: selectedJob.modality,
      requirements: techs,
      salary: data.salary? data.salary: selectedJob.salary,
      id:0,
      company:user,
    };
    console.log("Dados enviados:");
    console.log(body);
    const response = await editJob(selectedJob.id, body);

    if (response) {
      toast.success("Vaga editada com sucesso!");
      closeEditJob()
    } else {
      toast.error("Houve um erro...");
    }
  };

  const {
    onChange: onChangeTitle,
    onBlur: onBlurTitle,
    name: nameTitle,
    ref: refTitle,
  } = register("title");
  const {
    onChange: onChangeDescription,
    onBlur: onBlurDescription,
    name: nameDescription,
    ref: refDescription,
  } = register("description");
  const {
    onChange: onChangeSalary,
    onBlur: onBlurSalary,
    name: nameSalary,
    ref: refSalary,
  } = register("salary");

  return (
    <Modal
      isOpen={modalEditJobIsOpen}
      onRequestClose={closeEditJob}
      className="modal"
    >
      <ContainerEditJob>
        <button onClick={closeEditJob} className={"btnClose"}> x </button>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            label="Título"
            type="text"
            placeholder="Digite o título de sua vaga"
            onChange={onChangeTitle}
            onBlur={onBlurTitle}
            name={nameTitle}
            innerRef={refTitle}
          />
          <Input
            label="Descrição"
            type="text"
            placeholder="Digite a descrição da vaga"
            onChange={onChangeDescription}
            onBlur={onBlurDescription}
            name={nameDescription}
            innerRef={refDescription}
          />
          <div className="select">
            <p> Regime </p>
            <select {...register("regime")}>
              <option value="teste"> selecione </option>
            </select>
          </div>
          <div className="select">
            <p> Modalidade </p>
            <select {...register("modality")}>
              <option value="teste"> selecione </option>
            </select>
            <TechForm/>
              </div>
              <Input
                label="Salário"
                type="number"
                min="1"
                placeholder="Insira o salário para essa vaga"
                onChange={onChangeSalary}
                onBlur={onBlurSalary}
                name={nameSalary}
                innerRef={refSalary}
              />
                 <button type="submit"> Editar vaga </button>
        </form>

      </ContainerEditJob>
    </Modal>
  );
};

export default ModalEditJob;
