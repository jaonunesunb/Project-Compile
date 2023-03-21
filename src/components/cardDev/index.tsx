import { IDev, ICompany } from "../../context/UserContext";
import Button from "../button";
import { StyledCardDev } from "./style";

interface ICardDev {
  user: IDev | ICompany;
  setAllDevs: React.Dispatch<React.SetStateAction<(IDev | ICompany)[]>>;
}

const CardDev = ({ user, setAllDevs }: ICardDev) => {
  if ("company" in user) {
    return <></>;
  }

  return (
    <StyledCardDev>
      <p>
        <span>Nome: </span> {user.dev.name}
      </p>
      <div className="divTextDev">
        <p>
          {user.dev.techs
            .filter((tech) => !!tech.name)
            .map((tech, idx) => (
              <li key={idx}>
                <p>{tech.name}</p>
                <p>Anos de experiência: {tech.yearsOfExperience}</p>
              </li>
            ))}
        </p>
        <p>
          <span>Salário a partir de: </span>
          R$
          {user.dev.job_preferences.salary_range.min}
        </p>
        <p>
          <span>Cidade: </span>
          {user.dev.address.city}
        </p>
      </div>
      <div className="divButtonCardDev">
        <Button text="Tenho interesse" />
        <button
          onClick={() => {
            setAllDevs((oldAllDevs) =>
              oldAllDevs.filter((dev) => user.id !== dev.id)
            );
          }}
          className="buttonNointerest"
        >
          Não tenho interesse
        </button>
      </div>
    </StyledCardDev>
  );
};

export default CardDev;
