// import { Container } from './styles';

import { createContext, useState } from "react";

import { ITech } from "./UserContext";

interface ITechContext {
  techs: ITech[];
  setTechs: React.Dispatch<React.SetStateAction<ITech[]>>;
  addNewTech: (e: React.MouseEvent<HTMLButtonElement>) => void;
  removeTech: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TechContext = createContext({} as ITechContext);

interface ProviderProps {
  children: React.ReactNode;
}

const TechContextProvider = ({ children }: ProviderProps) => {
  const [techs, setTechs] = useState([
    { name: null, yearsOfExperience: null },
  ] as ITech[]);

  const addNewTech = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTechs((oldTechs) => [
      ...oldTechs,
      {
        name: null,
        yearsOfExperience: null,
      },
    ]);
  };

  const removeTech = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTechs((oldTechs) => oldTechs.slice(0, oldTechs.length - 1));
  };

  return (
    <TechContext.Provider value={{ techs, setTechs, addNewTech, removeTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechContextProvider;
