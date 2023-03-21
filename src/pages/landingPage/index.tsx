import logo from "../../assets/LogoPrincipal.svg";
import { StyleLandindPage } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


const LandingPage = () => {

  const { setRegisterRule } = useContext(UserContext);
  const navigate = useNavigate();


  return (
    <StyleLandindPage>
      <header>
        <img src={logo} alt="" />
      </header>
      <div className="containerLanding">
        <div className="textLanding">
          <h1> Bem-Vindo a Compile!</h1>
          <p>
            Desde 2022 conectando as melhores empresas aos melhores
            desenvolvedores.
          </p>
        </div>
        <div className="btnLanding">
          <button
            onClick={() => {
              setRegisterRule("company");
              navigate("/register");
            }}
          >
            Sou uma empresa
          </button>
          <p> ou </p>
          <button
            onClick={() => {
              setRegisterRule("dev");
              navigate("/register");
            }}
          >
            Sou um desenvolvedor
          </button>
        </div>
        <p className="loginLanding">
          Já possui conta? <Link to="/login">Login</Link>
        </p>
      </div>
    </StyleLandindPage>
  );
};

export default LandingPage;
