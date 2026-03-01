import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import Change from "../components/Change";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-sm">
        <Heading headingText="Welcome Back" text="Please enter your details to sign in." />

        <div className="space-y-4">
          <Input type="email" placeholder="Email address" value={email} setValue={setEmail} />

          <Input type="password" placeholder="Password" value={password} setValue={setPassword} />
          <Button text="Sign In" onClick={handleLogin} />
          <Change text="Don't have an account yet?" linkText="Create account" link="/register" />
        </div>
      </div>
    </div>
  );
};

export default Login;
