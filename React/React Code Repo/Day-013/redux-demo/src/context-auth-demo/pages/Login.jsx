import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid User name or password");
    }
  };
  return (
    <div className="max-w-7xl w-full mx-auto p-8 bg-slate-50">
      <h2 className="text-3xl font-semibold mb-5">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white max-w-4xl w-full p-8">
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full border border-slate-200 p-3 mb-3 outline-none focus:border-indigo-500 rounded-lg" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full border border-slate-200 p-3 mb-3 outline-none focus:border-indigo-500 rounded-lg" />
        <button className="bg-indigo-600 p-2 text-white">Login Now</button>

        {error && <p className="text-red-500 font-semibold text-sm mt-3">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
