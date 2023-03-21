import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import Input from "../../components/input";
import { StyleCompleteRegisterDev } from "./styles";
import logo from "../../assets/LogoPrincipal.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

interface IFormData {
  name: string;
  CNPJ: string;
  country: string;
  city: string;
  profileImg: string;
  bio: string;
}

const CompleteRegisterCompany = () => {
  const { editUser } = useContext(UserContext);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    CNPJ: yup.string().required("Campo obrigatório"),
    country: yup
      .string()
      .required("Campo obrigatório")
      .oneOf(["Brasil", "EUA"], "Campo obrigatório!"),
    city: yup.string().required("Campo obrigatório"),
    profileImg: yup.string(),
    bio: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(formSchema) });

  const submitHandler = async (data: IFormData) => {
    const body = {
      company: {
        name: data.name,
        CNPJ: data.CNPJ,
        address: {
          country: data.country,
          city: data.city,
        },
        logo: data.profileImg,
        bio: data.bio,
      },
    };
    console.log("Dados enviados:");
    console.log(body);
    const response = await editUser(body);
    if (response) {
      toast.success("Bem vindo!");
      navigate("/company/dev-list");
    } else {
      toast.error("Houve um erro...");
    }
  };

  const {
    onChange: onChangeName,
    onBlur: onBlurName,
    name: nameName,
    ref: refName,
  } = register("name");
  const {
    onChange: onChangeCNPJ,
    onBlur: onBlurCNPJ,
    name: nameCNPJ,
    ref: refCNPJ,
  } = register("CNPJ");
  const {
    onChange: onChangeCity,
    onBlur: onBlurCity,
    name: nameCity,
    ref: refCity,
  } = register("city");
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

  return (
    <StyleCompleteRegisterDev>
      <header>
        <h1> Agora falta pouco... </h1>
        <p> Complete as informações para finalizar seu cadastro </p>
      </header>
      <main>
        <img src={logo} alt="" />
        <div className="containerRegisterDev">
          <form onSubmit={handleSubmit(submitHandler)}>
            <Input
              label="Nome"
              type="text"
              placeholder="Digite o nome da sua empresa"
              required
              onChange={onChangeName}
              onBlur={onBlurName}
              name={nameName}
              innerRef={refName}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <Input
              label="CNPJ"
              type="text"
              placeholder="Digite o CNPJ da sua empresa"
              required
              onChange={onChangeCNPJ}
              onBlur={onBlurCNPJ}
              name={nameCNPJ}
              innerRef={refCNPJ}
            />
            {errors.CNPJ && <p>{errors.CNPJ.message}</p>}

            <div className="select">
              <p>Endereço</p>
              <div className="selectAddress">
                <label htmlFor="select">País*</label>
                <select {...register("country")}>
                  <option value="-"> - </option>
                  <option value="Brasil"> Brasil </option>
                  <option value="EUA"> EUA </option>
                </select>
                {errors.country && <p>{errors.country.message}</p>}

                <Input
                  label="Cidade"
                  type="text"
                  placeholder="Cidade onde se localiza a sede da empresa"
                  required
                  onChange={onChangeCity}
                  onBlur={onBlurCity}
                  name={nameCity}
                  innerRef={refCity}
                />
                {errors.city && <p>{errors.city.message}</p>}
              </div>
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
            {errors.profileImg && <p>{errors.profileImg.message}</p>}

            <Input
              label="Bio"
              type="text"
              placeholder="Conte um pouco sobre sua empresa "
              onChange={onChangeBio}
              onBlur={onBlurBio}
              name={nameBio}
              innerRef={refBio}
            />
            {errors.bio && <p>{errors.bio.message}</p>}

            <button type="submit"> Finalizar Cadastro</button>
          </form>
        </div>
      </main>
    </StyleCompleteRegisterDev>
  );
};

export default CompleteRegisterCompany;
