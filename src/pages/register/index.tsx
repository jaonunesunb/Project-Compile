import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Input from "../../components/input";
import Button from "../../components/button";
import logo from "../../assets/LogoPrincipal.svg";
import { StyleRegisterPage, SpecialButton } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

interface IRegisterData {
  email: string;
  password: string;
  passwordConfirm: string;
}

const RegisterPage = () => {
  const { registerDev, registerCompany, registerRule, setRegisterRule } =
    useContext(UserContext);
  const [noRuleAlert, setNoRuleAlert] = useState(false);
  let navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({ resolver: yupResolver(formSchema) });

  const {
    onChange: onChangeEmail,
    onBlur: onBlurEmail,
    name: nameEmail,
    ref: refEmail,
  } = register("email");
  const {
    onChange: onChangePassword,
    onBlur: onBlurPassword,
    name: namePassword,
    ref: refPassword,
  } = register("password");
  const {
    onChange: onChangePasswordConfirm,
    onBlur: onBlurPasswordConfirm,
    name: namePasswordConfirm,
    ref: refPasswordConfirm,
  } = register("passwordConfirm");

  const submitHandler = async (data: IRegisterData) => {
    if (registerRule === null) setNoRuleAlert(true);

    if (registerRule === "dev") {
      console.log("Registrando novo dev...");
      console.log(data);
      const responseData = await registerDev(data.email, data.password);
      console.log(responseData);
      if (!responseData) {
        toast.error("Houve um erro ao tentar criar a conta...");
      }
      if (responseData && "accessToken" in responseData) {
        toast.success("Conta criada!");
        navigate("/dev/finish");
      }
    }

    if (registerRule === "company") {
      console.log("Registrando nova empresa...");
      console.log(data);
      const responseData = await registerCompany(data.email, data.password);
      console.log(responseData);
      if (!responseData) {
        toast.error("Houve um erro ao tentar criar a conta...");
      }
      if (responseData && "accessToken" in responseData) {
        toast.success("Conta criada!");
        navigate("/company/finish");
      }
    }
  };

  useEffect(() => {
    if (noRuleAlert) {
      toast.error("Escolha um tipo de conta");
      setTimeout(() => setNoRuleAlert(false), 5000);
    }
  }, [noRuleAlert]);

  return (
    <StyleRegisterPage>
      <header>
        <h1>Comece sua jornada...</h1>
        <div className="btnRegister">
          <SpecialButton
            onClick={() => {
              setNoRuleAlert(false);
              setRegisterRule("company");
            }}
            alert={noRuleAlert}
            active={registerRule === "company"}
          >
            ...para encontrar os melhores devs no mercado
          </SpecialButton>
          <SpecialButton
            onClick={() => {
              setNoRuleAlert(false);
              setRegisterRule("dev");
            }}
            alert={noRuleAlert}
            active={registerRule === "dev"}
          >
            ...para encontrar meu emprego dos sonhos
          </SpecialButton>
        </div>
      </header>
      <div className="containerRegister">
        <div className="divLogo">
          <img src={logo} alt="Logo da plataforma" />
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            label="Email"
            type="text"
            placeholder="Digite seu email"
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
            name={nameEmail}
            innerRef={refEmail}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            name={namePassword}
            innerRef={refPassword}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Digite sua senha novamente"
            onChange={onChangePasswordConfirm}
            onBlur={onBlurPasswordConfirm}
            name={namePasswordConfirm}
            innerRef={refPasswordConfirm}
          />

          {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

          <Button text="Cadastrar" />
        </form>
        <div className="login-container">
          <p>Já possui cadastro?</p>
          <button className="buttonReplace" onClick={() => navigate("/login")}>
            Clique aqui
          </button>
        </div>
      </div>
    </StyleRegisterPage>
  );
};

export default RegisterPage;
