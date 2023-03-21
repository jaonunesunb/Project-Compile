import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { ICompany, UserContext } from "../../context/UserContext";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../modal.css";
import Input from "../../components/input";
import { ContainerEditCompany } from "./style";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

interface IForm {
  bio?: string;
  profileImg?: string;
  country: string;
  city: string;
}

const ModalEditCompany = () => {
  const { modalEditCompanyIsOpen, closeModalCompany } =
    useContext(ModalContext);
  const { editUser, user } = useContext(UserContext);

  const formSchema = yup.object().shape({
    bio: yup.string(),
    profileImg: yup.string(),
    country: yup.string(),
    city: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(formSchema) });

  if (user === null) {
    return <></>;
  }

  if ("dev" in user) {
    return <Navigate to="/dev/job-list" />;
  }

  const submitHandler = async (data: IForm) => {
    console.log("Hook-form data:", data);
    const body: ICompany = {
      company: {
        name: user.company.name,
        CNPJ: user.company.CNPJ,
        address: {
          country: data.country ? data.country : user.company.address.country,
          city: data.city ? data.city : user.company.address.city,
        },
        logo: data.profileImg ? data.profileImg : user.company.logo,
        bio: data.bio ? data.bio : user.company.bio,
      },
    };
    console.log("Dados enviados:", body);

    const response = await editUser(body);

    if (response) {
      toast.success("Dados atualizados");
      closeModalCompany();
    } else {
      toast.error("Houve um erro...");
    }
  };

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

  return (
    <>
      <Modal
        isOpen={modalEditCompanyIsOpen}
        onRequestClose={closeModalCompany}
        className="modal"
        appElement={document.getElementById("root") || undefined}
      >
        <ContainerEditCompany className="containerEditDev">
          <button onClick={closeModalCompany} className={"btnClose"}>
            {" "}
            x{" "}
          </button>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Input
              label="Bio"
              type="text"
              placeholder="Conte-nos um pouco sobre você "
              onChange={onChangeBio}
              onBlur={onBlurBio}
              name={nameBio}
              innerRef={refBio}
            />
            {errors.bio && <p className="error">{errors.bio.message}</p>}
            <Input
              label="Imagem de perfil"
              type="text"
              placeholder="Insira a url de sua imagem"
              onChange={onChangeProfileImg}
              onBlur={onBlurProfileImg}
              name={nameProfileImg}
              innerRef={refProfileImg}
            />
            {errors.profileImg && (
              <p className="error">{errors.profileImg.message}</p>
            )}
            <div className="select">
              <p>Endereço</p>
              <label htmlFor="select"> País:</label>
              <select {...register("country")}>
                <option value=""> - </option>
                <option value="Brasil"> Brasil </option>
                <option value="EUA"> EUA </option>
              </select>
              {errors.country && (
                <p className="error">{errors.country.message}</p>
              )}
              <Input
                label="Cidade"
                type="text"
                placeholder="Sua cidade de residência"
                onChange={onChangeCity}
                onBlur={onBlurCity}
                name={nameCity}
                innerRef={refCity}
              />
              {errors.city && <p className="error">{errors.city.message}</p>}
            </div>
            <button type="submit"> Editar </button>
          </form>
        </ContainerEditCompany>
      </Modal>
    </>
  );
};

export default ModalEditCompany;
