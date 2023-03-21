import { StyleManagePageCompany } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import JobContextProvider from "../../context/JobContext";
import { useContext } from "react";
import { useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import Logo from "../../assets/LogoPrincipal.svg";
import Button from "../../components/button";
import ModalEditJob from "../../modals/modalEditJob";
import ModalCreateJob from "../../modals/modalCreateJob";
import ModalDeleteJob from "../../modals/modalDeleteJob";
import ModalEditCompany from "../../modals/modalEditCompany";
import { Navigate, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import TechContextProvider from "../../context/TechContext";
import { UserContext } from "../../context/UserContext";
import avatar from "../../assets/avatar.svg";

const ManagePageCompany = () => {
  let navigate = useNavigate();

  const [overflow, setOverflow] = useState(0);
  const { openModal, openEditJob, openModalCompany, modalEditCompanyIsOpen } =
    useContext(ModalContext);
  const { user, logout } = useContext(UserContext);

  if (!user) {
    return <></>;
  }

  if ("dev" in user) {
    return <Navigate to="/dev/job-list" />;
  }

  let result = overflow;
  return (
    <JobContextProvider>
      <StyleManagePageCompany>
        <div className="divHeader">
          <div className="divSubHeaderTop">
            <img className="logo" src={Logo} alt="" />
            <button
              onClick={() => (result === 0 ? setOverflow(1) : setOverflow(0))}
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
        {result === 0 ? (
          ""
        ) : (
          <div className="divSubHeaderBotton">
            <div className="groupButton">
              <button
                className="buttonEditProfiline"
                onClick={() => {
                  navigate("/company/dev-list");
                }}
              >
                Voltar
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
              <figure>
                <img
                  src={user.company.logo ? user.company.logo : avatar}
                  alt="Logo da empresa"
                />
              </figure>
              <h3>{user.company.name}</h3>
              <h4>
                {user.company.address.city}, {user.company.address.country}
              </h4>
              <p>{user.company.bio}</p>

              <Button text="Atualizar dados" onClick={openModalCompany} />
            </div>
          </div>
          <div className="divCard">
            <div className="divTitleForm">
              <div className="divTopList">
                <div className="subDivTopList">
                  <button onClick={openModal}>Criar vaga</button>
                  <h3>Minhas vagas</h3>
                </div>
              </div>
            </div>

            <Outlet />
            {/* <ul>
              <li>
                <CardManageJob
                  name="Desenvolvedor Node.Js"
                  jobDescription="Saber utilizar gitflow e ser experience em Css responsivo"
                  tech="Oi"
                />
              </li>
              <li>
                <CardManageJob
                  name="Desenvolvedor Node.Js"
                  jobDescription="Saber utilizar gitflow e ser experience em Css responsivo"
                  tech="Oi"
                />
              </li> */}
            {/* <CardDev
                  name="Jhonatta"
                  tech="Node.js"
                  experience="6 meses"
                  salaryRange="R$5.000,00"
                  city="Vilha Velha"
                />
              </li>
              <li>
                <CardDev
                  name="Jhonatta"
                  tech="Node.js"
                  experience="6 meses"
                  salaryRange="R$5.000,00"
                  city="Vilha Velha"
                />
              </li>
              <li>
                <CardDev
                  name="Jhonatta"
                  tech="Node.js"
                  experience="6 meses"
                  salaryRange="R$5.000,00"
                  city="Vilha Velha"
                />
              </li> */}
            {/* </ul> */}
          </div>
        </div>
      </StyleManagePageCompany>
      <ModalEditCompany />
      <ModalDeleteJob />
      <TechContextProvider>
        <ModalCreateJob />
        <ModalEditJob />
      </TechContextProvider>
    </JobContextProvider>
  );
};

export default ManagePageCompany;
