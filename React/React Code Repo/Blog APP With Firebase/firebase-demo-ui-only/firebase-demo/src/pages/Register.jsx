import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import Change from "../components/Change";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-sm">
        <Heading
          headingText="Create Account"
          text="Join our community today!"
        />

        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            setValue={setEmail}
          />
          <Input
            type="text"
            placeholder="UserName"
            value={username}
            setValue={setUsername}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          <Button text="Create account" onClick={handleRegister} />
          <Change
            text="Already have an account?"
            linkText="Sign in"
            link="/login"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
