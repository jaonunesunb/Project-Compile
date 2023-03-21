import Modal from "react-modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import "../modal.css";
import Input from "../../components/input";
import { ModalContainer } from "./style";
import TechForm from "../../components/techForm";
import { TechContext } from "../../context/TechContext";
import UserContextProvider, {
  UserContext,
  IDev,
} from "../../context/UserContext";
import { Navigate } from "react-router-dom";

interface IformData {
  name: string;
  phone: string;
  profileImg: string;
  bio: string;
  address: string;
  country: string;
  city: string;
  regime: "CLT" | "PJ" | "ambos" | null;
  modality: "Presencial" | "Remoto" | "Híbrido" | null;
  min: string;
  max: string;
}

const ModalEditDev = () => {
  const { modalIsOpen, closeModal } = useContext(ModalContext);
  const { techs } = useContext(TechContext);
  const { user, editUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string(),
    phone: yup.string(),
    profileImg: yup.string().url(),
    bio: yup.string(),
    regime: yup.string(),
    modality: yup.string(),
    min: yup.string(),
    max: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IformData>({ resolver: yupResolver(formSchema) });

  const {
    onChange: onChangeName,
    onBlur: onBlurName,
    name: nameName,
    ref: refName,
  } = register("name");
  const {
    onChange: onChangePhone,
    onBlur: onBlurPhone,
    name: namePhone,
    ref: refPhone,
  } = register("phone");
  const {
    onChange: onChangeProfileImg,
    onBlur: onBlurProfileImg,
    name: nameProfileImg,
    ref: refProfileImg,
  } = register("profileImg");
  const {
    onChange: onChangeBio,
    onBlur: onBlurBio,
    name: nameBio,
    ref: refBio,
  } = register("bio");
  const {
    onChange: onChangeCity,
    onBlur: onBlurCity,
    name: nameCity,
    ref: refCity,
  } = register("city");

  if (!user) {
    return <></>;
  }
  if (user && "company" in user) {
    return <Navigate to="/company" />;
  }

  const submitHandler = async (data: IformData) => {
    const body: IDev = {
      dev: {
        name: data.name ? data.name : user.dev.name,
        phone: data.phone ? data.phone : user.dev.phone,
        address: {
          country: data.country ? data.country : user.dev.address.country,
          city: data.city ? data.city : user.dev.address.city,
        },
        profile_img: data.profileImg ? data.profileImg : user.dev.profile_img,
        bio: data.bio ? data.bio : user.dev.bio,
        techs: techs,
        job_preferences: {
          regime: data.regime ? data.regime : user.dev.job_preferences.regime,
          modality: data.modality
            ? data.modality
            : user.dev.job_preferences.modality,
          salary_range: {
            min: data.min
              ? data.min
              : user.dev.job_preferences.salary_range.min,
            max: data.max
              ? data.max
              : user.dev.job_preferences.salary_range.max,
          },
        },
      },
    };

    await editUser(body);
    closeModal();
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <ModalContainer className="containerEditDev">
          <button onClick={closeModal} className={"btnClose"}>
            {" "}
            x{" "}
          </button>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Input
              label="Nome"
              type="text"
              placeholder="Digite seu Nome completo"
              onChange={onChangeName}
              onBlur={onBlurName}
              name={nameName}
              innerRef={refName}
            />
            {
              errors.name && <p className="error">{errors.name.message}</p>
              //12px red margin-top -10px
            }
            <Input
              label="Telefone"
              type="text"
              placeholder="Digite seu Telefone"
              onChange={onChangePhone}
              onBlur={onBlurPhone}
              name={namePhone}
              innerRef={refPhone}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
            <div className="select">
              <p>Endereço</p>
              <label htmlFor="select"> País:</label>
              <select {...register("country")}>
                <option value=""> - </option>
                <option value="Brasil"> Brasil </option>
                <option value="EUA"> EUA </option>
              </select>

              <Input
                label="Cidade"
                type="text"
                placeholder="Sua cidade de residência"
                onChange={onChangeCity}
                onBlur={onBlurCity}
                name={nameCity}
                innerRef={refCity}
              />
            </div>
            <Input
              label="Imagem de perfil"
              type="text"
              placeholder="Insira a url de sua imagem"
              onChange={onChangeProfileImg}
              onBlur={onBlurProfileImg}
              name={nameProfileImg}
              innerRef={refProfileImg}
            />
            <Input
              label="Bio"
              type="text"
              placeholder="Conte-nos um pouco sobre você "
              onChange={onChangeBio}
              onBlur={onBlurBio}
              name={nameBio}
              innerRef={refBio}
            />
            <div className="techFormContainer">
              <TechForm />
            </div>
            <div className="select">
              <p> Regime </p>
              <select {...register("regime")}>
                <option value="PJ"> Pessoa Jurídica (PJ)</option>
                <option value="CLT"> CLT</option>
                <option value="ambos">Ambos</option>
              </select>
            </div>
            <div className="select">
              <p> Modalidade </p>
              <select {...register("modality")}>
                <option value="Presencial"> Presencial </option>
                <option value="Remoto"> Remoto </option>
                <option value="Híbrido"> Híbrido </option>
              </select>
            </div>
            <div className="salaryRange">
              <p> Faixa Salarial</p>
              <div className="teste">
                <label htmlFor="input">Mínimo:</label>
                <input type="text" {...register("min")} />
                <label htmlFor="input">Máximo:</label>
                <input type="text" {...register("max")} />
              </div>
            </div>
            <button type="submit"> Editar </button>
          </form>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalEditDev;
