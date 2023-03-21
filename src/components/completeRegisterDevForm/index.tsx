import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import Input from "../../components/input";
import { IDev, ITech, UserContext } from "../../context/UserContext";
import { useContext } from "react";
import TechForm from "../../components/techForm";
import { TechContext } from "../../context/TechContext";
import { useNavigate } from "react-router-dom";

interface IFormData {
  name: string;
  phone: string;
  country: string;
  city: string;
  profileImg?: string;
  bio?: string;
  techs: ITech[];
  regime: "CLT" | "PJ" | "ambos" | null;
  modality: "Remoto" | "Presencial" | "Híbrido" | null;
  min?: string;
  max?: string;
}

const CompleteRegisterDevForm = () => {
  const { editUser } = useContext(UserContext);
  const { techs } = useContext(TechContext);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    country: yup
      .string()
      .required("Campo obrigatório")
      .oneOf(["Brasil", "EUA"], "Campo obrigatório!"),
    profileImg: yup.string(),
    bio: yup.string(),
    tech: yup.string(),
    regime: yup
      .string()
      .required("Campo obrigatório")
      .oneOf(["CLT", "PJ", "ambos"], "Campo obrigatório!"),
    modality: yup.string().required("Campo obrigatório"),
    min: yup.string(),
    max: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(formSchema) });

  const submitHandler = async (data: IFormData) => {
    console.log("Hook-form data:");
    console.log(data);
    console.log("techs state:");
    console.log(techs);
    const body: IDev = {
      dev: {
        name: data.name,
        phone: data.phone,
        address: {
          country: data.country,
          city: data.city,
        },
        profile_img: data.profileImg || null,
        bio: data.bio || null,
        techs: techs,
        job_preferences: {
          regime: data.regime,
          modality: data.modality,
          salary_range: {
            min: data.min || null,
            max: data.max || null,
          },
        },
      },
    }
    console.log("Dados enviados:");
    console.log(body);
    const response = await editUser(body);

    if (response) {
      toast.success("Bem vindo!");
      navigate("/dev/job-list");
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
    onChange: onChangePhone,
    onBlur: onBlurPhone,
    name: namePhone,
    ref: refPhone,
  } = register("phone");
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
    <form onSubmit={handleSubmit(submitHandler)}>
      <h3>Dados pessoais:</h3>

      <Input
        label="Nome"
        type="text"
        placeholder="Digite seu Nome completo"
        required
        onChange={onChangeName}
        onBlur={onBlurName}
        name={nameName}
        innerRef={refName}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}
      <Input
        label="Telefone"
        type="text"
        placeholder="Digite seu Telefone"
        required
        onChange={onChangePhone}
        onBlur={onBlurPhone}
        name={namePhone}
        innerRef={refPhone}
      />
      {errors.phone && <p className="error">{errors.phone.message}</p>}
      <div className="select">
        <p>Endereço</p>
        <div className="selectAddress">
          <label htmlFor="select">País*</label>
          <select {...register("country")}>
            <option value="">-</option>
            <option value="Brasil"> Brasil </option>
            <option value="EUA"> EUA </option>
          </select>
          {errors.country && <p className="error">{errors.country.message}</p>}

          <Input
            label="Cidade"
            type="text"
            required
            placeholder="Sua cidade de residência"
            onChange={onChangeCity}
            onBlur={onBlurCity}
            name={nameCity}
            innerRef={refCity}
          />
          {errors.city && <p className="error">{errors.city.message}</p>}
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
      {errors.profileImg && (
        <p className="error">{errors.profileImg.message}</p>
      )}

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

      <TechForm />
      <h3>Preferências de emprego:</h3>
      <div className="select">
        <p> Regime* </p>
        <select {...register("regime")}>
          <option value=""> - </option>
          <option value="CLT"> CLT </option>
          <option value="PJ"> PJ </option>
          <option value="ambos"> Estou aberto a ambos </option>
        </select>
        {errors.regime && <p className="error">{errors.regime.message}</p>}
      </div>
      <div className="select">
        <p> Modalidade* </p>
        <select {...register("modality")}>
          <option value=""> - </option>
          <option value="Presencial"> Presencial </option>
          <option value="Remoto"> Remoto </option>
          <option value="Híbrido"> Híbrido </option>
        </select>
        {errors.modality && <p className="error">{errors.modality.message}</p>}
      </div>
      <div className="salaryRange">
        <p> Faixa Salarial</p>
        <div className="teste">
          <label htmlFor="input">Mínimo:</label>
          <input type="text" {...register("min")} />
          {errors.min && <p className="error">{errors.min.message}</p>}

          <label htmlFor="input">Máximo:</label>
          <input type="text" {...register("max")} />
          {errors.max && <p className="error">{errors.max.message}</p>}
        </div>
      </div>
      <button type="submit"> Finalizar Cadastro</button>
    </form>
  );
};

export default CompleteRegisterDevForm;
