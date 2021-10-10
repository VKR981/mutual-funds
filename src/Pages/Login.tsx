import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { useAppSelector } from "../hooks/redux";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const history = useHistory<"/login">();
  const users = useAppSelector((state) => state.user.users);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const user = users.find((user) => user.email === email);
    if (user && user.password === password) {
      history.push("/");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="h-full w-screen flex items-center justify-center">
      <form>
        <Input
          label="Email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={handleInputChange}
        />

        <Input
          label="Password"
          name="password"
          placeholder="Your password"
          value={password}
          onChange={handleInputChange}
        />

        <Button onClick={handleSubmit}>
          <span>Login</span>
        </Button>
      </form>
    </div>
  );
};
