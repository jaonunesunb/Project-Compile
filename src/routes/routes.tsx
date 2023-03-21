import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import LandingPage from "../pages/landingPage";
import MainPageDev from "../pages/mainPageDev";
import RegisterPage from "../pages/register";
import MainPageCompany from "../pages/mainPageCompany";
import CompleteRegisterDev from "../pages/completeRegisterDev";
import CompleteRegisterCompany from "../pages/CompleteRegisterCompany";
import DevList from "../components/devList";
import JobList from "../components/jobList";
import JobListCompany from "../components/jobListCompany";
import ManagePageCompany from "../pages/managePageCompany";

const Way = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/company/finish" element={<CompleteRegisterCompany />} />
      <Route path="/dev/finish" element={<CompleteRegisterDev />} />

      <Route path="/company" element={<MainPageCompany />}>
        <Route path="/company/dev-list" element={<DevList />} />
      </Route>
      <Route path="/company" element={<ManagePageCompany />}>
        <Route path="/company/manage-profile" element={<JobListCompany />} />
      </Route>
      <Route path="/dev" element={<MainPageDev />}>
        <Route path="/dev/job-list" element={<JobList />} />
      </Route>
    </Routes>
  );
};

export default Way;
