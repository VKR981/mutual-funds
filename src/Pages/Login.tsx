import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setCurrentUser } from "../redux/userReducer";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const history = useHistory();

  const users = useAppSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(setCurrentUser(null));
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const user = users.find((user) => user.email === email);
    if (user && user.password === password) {
      dispatch(setCurrentUser(user));
      history.push("/");
    } else {
      !user ? alert("User not found") : alert("Wrong password");
    }
  };

  return (
    <div className="h-full w-screen flex items-center justify-center">
      <form>
        <h1 className="text-center font-bold text-gray-500 text-xl">Login</h1>
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
          type="password"
          placeholder="Your password"
          value={password}
          onChange={handleInputChange}
        />

        <Button onClick={handleSubmit}>
          <span>Login</span>
        </Button>
        <p className="text-center font-bold">or</p>
        <Button onClick={() => history.push("/signup")}>
          <span>Sign up</span>
        </Button>
      </form>
    </div>
  );
};
