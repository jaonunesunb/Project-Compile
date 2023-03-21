import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { compileApi } from "../services/api";

export interface ITech {
  name: string | null;
  yearsOfExperience: number | null;
}

interface IUser {
  id?: number;
  email?: string;
  password?: string;
  mainRule?: "dev" | "company";
}

export interface ICompany extends IUser {
  company: {
    name: string | null;
    CNPJ: string | null;
    address: {
      country: string | null;
      city: string | null;
    };
    logo: string | null;
    bio: string | null;
  };
}

export interface IDev extends IUser {
  dev: {
    name: string | null;
    phone: string | null;
    address: {
      country: string | null;
      city: string | null;
    };
    profile_img: string | null;
    bio: string | null;
    techs: ITech[];
    job_preferences: {
      regime: "CLT" | "PJ" | "ambos" | null;
      modality: "Presencial" | "Remoto" | "Híbrido" | null;
      salary_range: {
        min: string | null;
        max: string | null;
      };
    };
  };
}

interface LoginResponse {
  accessToken: string;
  user: IDev | ICompany;
}

interface IUserContext {
  user: ICompany | IDev | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  allUsers: (IDev | ICompany)[];
  getAllUsers: () => Promise<Array<IDev | ICompany> | void>;
  registerDev: (email: string, password: string) => Promise<LoginResponse>;
  registerCompany: (email: string, password: string) => Promise<LoginResponse>;
  login: (email: string, password: string) => Promise<LoginResponse>;
  registerRule: "dev" | "company" | null;
  setRegisterRule: React.Dispatch<
    React.SetStateAction<"dev" | "company" | null>
  >;
  editUser: (data: IDev | ICompany) => Promise<IDev | ICompany | void>;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<ICompany | IDev | null>>
  getUser:(id: number) => Promise<IDev | ICompany | void>
}

export const UserContext = createContext({} as IUserContext);

interface IContextProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: IContextProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<ICompany | IDev | null>(null);
  const [registerRule, setRegisterRule] = useState<"dev" | "company" | null>(
    null
  );
  const [allUsers, setAllUsers] = useState([] as (IDev | ICompany)[]);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const users = await compileApi.get("/users");
      console.log(users.data);
      setAllUsers(users.data);
      return users.data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const registerDev = async (email: string, password: string) => {
    const requestBody: IDev = {
      email: email,
      password: password,
      mainRule: "dev",
      dev: {
        name: null,
        phone: null,
        address: {
          country: null,
          city: null,
        },
        profile_img: null,
        bio: null,
        techs: [],
        job_preferences: {
          regime: null,
          modality: null,
          salary_range: {
            min: null,
            max: null,
          },
        },
      },
    };

    try {
      setLoading(true);
      const response = await compileApi.post("/register", requestBody);
      localStorage.setItem("@COMPILE:token", response.data.accessToken);
      localStorage.setItem("@COMPILE:id", response.data.user.id);
      setUser(response.data.user);
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const registerCompany = async (email: string, password: string) => {
    const requestBody = {
      email: email,
      password: password,
      mainRule: "company",
      company: {
        name: null,
        CNPJ: null,
        address: {
          country: null,
          city: null,
        },
        logo: null,
        bio: null,
      },
    };

    try {
      setLoading(true);
      const response = await compileApi.post("/register", requestBody);
      localStorage.setItem("@COMPILE:token", response.data.accessToken);
      localStorage.setItem("@COMPILE:id", response.data.user.id);
      setUser(response.data.user);
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const requestBody = {
      email: email,
      password: password,
    };
    try {
      setLoading(true);
      const response = await compileApi.post("/login", requestBody);
      localStorage.setItem("@COMPILE:token", response.data.accessToken);
      localStorage.setItem("@COMPILE:id", response.data.user.id);
      setUser(response.data.user);
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const editUser = async (data: IDev | ICompany) => {
    if (!user) {
      console.error("Erro: tentando editar usuário nulo.");
      return;
    }
    const id = user.id;
    try {
      setLoading(true);
      const response = await compileApi.patch(`/users/${id}`, data);
      setUser(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("@COMPILE:token");
    localStorage.removeItem("@COMPILE:id");
    setUser(null);
    navigate("/login");
  };

  const getUser= async (id:number) =>{
    try {
      setLoading(true);
      const user= await compileApi.get(`/users/${id}`)
      return user.data
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    
   
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        allUsers,
        getAllUsers,
        registerDev,
        registerCompany,
        login,
        registerRule,
        setRegisterRule,
        editUser,
        logout,
        setUser,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
