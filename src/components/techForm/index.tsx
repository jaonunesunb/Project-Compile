import { Container } from "./style";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { useContext } from "react";
import TechFormRow from "../techFormRow";
import { TechContext } from "../../context/TechContext";

const TechForm = () => {
  const { techs, addNewTech, removeTech } = useContext(TechContext);

  return (
    <Container>
      <h4>Lista de tecnologias:</h4>
      {techs.map((tech, idx) => (
        <TechFormRow key={idx} id={idx} />
      ))}
      <div className="btn-container">
        <div className="sub-container">
          {techs.length > 1 && (
            <button onClick={removeTech} className="remove-tech-btn">
              <IoMdRemoveCircle />
              <span>Remover</span>
            </button>
          )}
        </div>
        <button onClick={addNewTech} className="add-tech-btn">
          <IoMdAddCircle />
          <span>Adicionar</span>
        </button>
      </div>
    </Container>
  );
};

export default TechForm;
