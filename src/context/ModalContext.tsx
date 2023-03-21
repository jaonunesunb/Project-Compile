import { ReactNode, useState } from "react";
import { createContext } from "react";

interface IModalContextProps {
  children: ReactNode;
}

export interface IModalContext {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalEditCompanyIsOpen: boolean;
  openModalCompany: () => void;
  closeModalCompany: () => void;
  modalEditJobIsOpen: boolean;
  openEditJob: () => void;
  closeEditJob: () => void;
  modalJobIsOpen: boolean;
  openJob: () => void;
  closeJob: () => void;
  modalDeleteJobIsOpen: boolean;
  openDeleteJob: () => void;
  closeDeleteJob: () => void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalContextProvider = ({ children }: IModalContextProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [modalEditCompanyIsOpen, setEditCompanyIsOpen] = useState(false);

  function openModalCompany() {
    setEditCompanyIsOpen(true);
  }

  function closeModalCompany() {
    setEditCompanyIsOpen(false);
  }

  const [modalJobIsOpen, setModalJobIsOpen] = useState(false);

  function openJob() {
    setModalJobIsOpen(true);
  }

  function closeJob() {
    setModalJobIsOpen(false);
  }

  const [modalEditJobIsOpen, setEditJobIsOpen] = useState(false);

  function openEditJob() {
    setEditJobIsOpen(true);
  }

  function closeEditJob() {
    setEditJobIsOpen(false);
  }

  const [modalDeleteJobIsOpen, setDeleteJobIsOpen] = useState(false);

  function openDeleteJob() {
    setDeleteJobIsOpen(true);
  }

  function closeDeleteJob() {
    setDeleteJobIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        modalEditCompanyIsOpen,
        openModalCompany,
        closeModalCompany,
        modalEditJobIsOpen,
        openEditJob,
        closeEditJob,
        modalJobIsOpen,
        openJob,
        closeJob,
        modalDeleteJobIsOpen,
        openDeleteJob,
        closeDeleteJob,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

