import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import CardDev from "../cardDev";

const DevList = () => {
  const { allUsers, getAllUsers } = useContext(UserContext);
  const [allDevs, setAllDevs] = useState(
    allUsers.filter((user) => user.mainRule === "dev")
  );

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <ul className="devList">
        {allDevs.length > 0 ? (
          allDevs.map((user) => (
            <CardDev key={user.id} setAllDevs={setAllDevs} user={user} />
          ))
        ) : (
          <p>Não há devs procurando vagas atualmente... :(</p>
        )}
      </ul>
    </>
  );
};

export default DevList;
