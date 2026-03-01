import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    navigate("/");
    return null;
  }
  return (
    <div className="max-w-7xl w-full mx-auto p-8">
      <h2 className="text-3xl font-semibold">Dashboard</h2>
      <div className="flex justify-between mb-5">
        <p className="text-xl font-semibold">Welcome, {user.name}</p>
        <button className="bg-indigo-600 p-2 text-white" onClick={logout}>
          Logout
        </button>
      </div>
      <p>@ {user.email}</p>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nemo dignissimos neque repellendus laboriosam! Praesentium animi ut alias, eos excepturi nesciunt id, pariatur voluptatem voluptatum hic neque eius saepe quis?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, mollitia vel. Qui molestiae omnis obcaecati expedita ipsa maiores alias, accusantium laborum nam reiciendis, fuga possimus, necessitatibus impedit architecto at eius!</p>
      </div>
    </div>
  );
};

export default Dashboard;
