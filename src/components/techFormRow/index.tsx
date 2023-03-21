// import { Container } from './styles';

import { useContext, useEffect, useState } from "react";
import { TechContext } from "../../context/TechContext";
import { ITech } from "../../context/UserContext";

const techsList = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue",
  "Node",
  "HTML",
  "CSS",
  "Python",
  "Django",
  "Flask",
  "PHP",
  "Ruby",
  "Java",
  "C",
  "C++",
  "C#",
];

interface TechFormRowProps {
  id: number;
}

const TechFormRow = ({ id }: TechFormRowProps) => {
  const { setTechs } = useContext(TechContext);
  const [name, setName] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  useEffect(() => {
    setTechs((oldTechs) => {
      const copy = [...oldTechs];
      const newTech = {
        name: name,
        yearsOfExperience: +yearsOfExperience,
      };
      copy.splice(id, 1, newTech);

      return copy;
    });
  }, [name, yearsOfExperience]);

  return (
    <div className="row">
      <div className="tech-name">
        <p>Tecnologia:</p>
        <select value={name} onChange={(e) => setName(e.target.value)}>
          <option value="">-</option>
          {techsList.map((tech, idx) => (
            <option key={idx} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>
      <div className="tech-time">
        <p>Tempo de experiência:</p>
        <span>
          <input
            type="number"
            onChange={(e) => setYearsOfExperience(e.target.value)}
            value={yearsOfExperience}
          />{" "}
          anos
        </span>
      </div>
    </div>
  );
};

export default TechFormRow;
