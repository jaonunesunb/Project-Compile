import avatar from "../../assets/avatar.svg";
import Logo from "../../assets/LogoPrincipal.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useContext } from "react";
import { StyleMainScreenDev } from "./styles";
import JobContextProvider from "../../context/JobContext";
import ModalEditDev from "../../modals/modalEditDev";
import { ModalContext } from "../../context/ModalContext";
import { Navigate, Outlet } from "react-router-dom";
import ModalJob from "../../modals/modalJob";
import { UserContext } from "../../context/UserContext";
import TechContextProvider from "../../context/TechContext";

const MainPageDev = () => {
  const [on, setOn] = useState(false);
  const { openModal } = useContext(ModalContext);
  const { user, logout } = useContext(UserContext);
  console.log(user);
  if (user && "company" in user) {
    return <Navigate to="/company" />;
  }

  if (!user) {
    return <></>;
  }

  return (
    <JobContextProvider>
      <StyleMainScreenDev>
        <div className="divHeader">
          <div className="divSubHeaderTop">
            <img className="logoImg" src={Logo} alt="" />
            <button onClick={() => (on ? setOn(false) : setOn(true))}>
              <AiOutlineMenu />
            </button>
          </div>
        </div>
        {on && (
          <div className="divSubHeaderBotton">
            <div className="groupButton">
              <button className="buttonEditProfiline" onClick={openModal}>
                Editar perfil
              </button>
              <button onClick={logout} className="buttonLogout">
                Logout
              </button>
            </div>
          </div>
        )}

        <div className="container">
          <div className="divMainTop">
            <div className="SubDivMainTop">
              <img
                src={user.dev.profile_img ? user.dev.profile_img : avatar}
                alt="Imagem de perfil do usuário"
              />
              <h3>{user.dev.name}</h3>
              <h4>
                {user.dev.address.city}, {user.dev.address.country}
              </h4>
              <p>{user.dev.bio}</p>
              <h4>Minhas tecnologias:</h4>
              <ul className="ulTechs">
                {user.dev.techs.map((tech, idx) => (
                  <li key={idx}>{tech.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="divCard">
            <div className="DivCards">
              <Outlet />
            </div>
          </div>
        </div>
      </StyleMainScreenDev>
      <ModalJob />
      <TechContextProvider>
        <ModalEditDev />
      </TechContextProvider>
    </JobContextProvider>
  );
};

export default MainPageDev;
