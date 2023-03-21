import { StyleCompleteRegisterDev } from "./style";
import logo from "../../assets/LogoPrincipal.svg";
import TechContextProvider from "../../context/TechContext";
import CompleteRegisterDevForm from "../../components/completeRegisterDevForm";

const CompleteRegisterDev = () => {
  return (
    <TechContextProvider>
      <StyleCompleteRegisterDev>
        <header>
          <h1> Agora falta pouco... </h1>
          <p> Complete as informações para finalizar seu cadastro </p>
        </header>
        <main>
          <img src={logo} alt="" />
          <div className="containerRegisterDev">
            <CompleteRegisterDevForm />
          </div>
        </main>
      </StyleCompleteRegisterDev>
    </TechContextProvider>
  );
};

export default CompleteRegisterDev;
