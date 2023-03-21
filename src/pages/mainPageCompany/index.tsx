import { StyleMainPageCompany } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";

import Logo from "../../assets/LogoPrincipal.svg";
import JobContextProvider from "../../context/JobContext";
import ModalCreateJob from "../../modals/modalCreateJob";
import ModalEditJob from "../../modals/modalEditJob";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import avatar from "../../assets/avatar.svg";

const MainPageCompany = () => {
  const [overflow, setOverflow] = useState(0);
  let result = overflow;
  const { user, logout } = useContext(UserContext);

  let navigate = useNavigate();

  if (!user) {
    return <></>;
  }

  if ("dev" in user) {
    return <Navigate to="/dev/job-list" />;
  }

  return (
    <JobContextProvider>
      <StyleMainPageCompany>
        <div className="divHeader">
          <div className="divSubHeaderTop">
            <img className="logoImg" src={Logo} alt="" />
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
                onClick={() => {
                  navigate("/company/manage-profile");
                }}
                className="buttonEditProfiline"
              >
                Gerenciar perfil
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
            </div>
          </div>
          <div className="divCard">
            <div className="divTitleForm">
              <h3>Desenvolvedores a procura de emprego</h3>
            </div>

            <Outlet />
          </div>
        </div>
      </StyleMainPageCompany>
      <ModalCreateJob />
      <ModalEditJob />
    </JobContextProvider>
  );
};

export default MainPageCompany;
