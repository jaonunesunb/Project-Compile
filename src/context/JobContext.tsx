import { createContext, useContext, useState } from "react";
import { compileApi } from "../services/api";
import { ITech, IDev, UserContext, ICompany } from "./UserContext";

export interface IJob {
  userId?: number;
  title: string;
  description: string;
  regime: "PJ" | "CLT" | "ambos";
  modality: "Presencial" | "Remoto" | "Híbrido";
  requirements: ITech[];
  salary?: number;
  id: number;
  company: ICompany;
  // candidates: IDev[];
}

interface IJobContext {
  listJobs: () => Promise<IJob[] | void>;
  createJob: (data: IJob) => Promise<IJob>;
  editJob: (id: number, data: IJob) => Promise<IJob>;
  deleteJob: (id: number) => Promise<void>;
  allJobs: IJob[];
  setAllJobs: React.Dispatch<React.SetStateAction<IJob[]>>;
  selectedJob: IJob;
  setSelectedJob: React.Dispatch<React.SetStateAction<IJob>>;
}

export const JobContext = createContext({} as IJobContext);

interface ContextProps {
  children: React.ReactNode;
}

const JobContextProvider = ({ children }: ContextProps) => {
  const { setLoading } = useContext(UserContext);
  const [allJobs, setAllJobs] = useState([] as IJob[]);
  const [selectedJob, setSelectedJob] = useState({} as IJob);

  const listJobs = async () => {
    try {
      setLoading(true);
      const response = await compileApi.get("/jobs");
      setAllJobs(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const createJob = async (data: IJob) => {
    try {
      setLoading(true);
      const response = await compileApi.post("/jobs", data);
      console.log(response);
      setAllJobs([...allJobs, response.data]);
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const editJob = async (id: number, data: IJob) => {
    try {
      setLoading(true);
      const response = await compileApi.patch(`/jobs/${id}`, data);
      console.log(response);
      const newAllJobs = [...allJobs];
      const idx = allJobs.findIndex((job) => job.id === response.data.id);
      newAllJobs.splice(idx, 1, response.data);
      setAllJobs(newAllJobs);
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (id: number) => {
    try {
      setLoading(true);
      await compileApi.delete(`/jobs/${id}`);
      const newAllJobs = allJobs.filter((job) => job.id !== id);
      setAllJobs(newAllJobs);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider
      value={{
        listJobs,
        createJob,
        editJob,
        deleteJob,
        allJobs,
        setAllJobs,
        selectedJob,
        setSelectedJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
