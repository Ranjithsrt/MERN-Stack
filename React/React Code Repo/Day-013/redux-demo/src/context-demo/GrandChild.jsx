import { useContext } from "react";
import UserContext from "./UserContext";

const GrandChild = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="border w-full p-3">
      <h3 className="font-semibold text-xl">GrandChild</h3>
      <p>{user.name}</p>
      <p>{user.city}</p>
    </div>
  );
};

export default GrandChild;
