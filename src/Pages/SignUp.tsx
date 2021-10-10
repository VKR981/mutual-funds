import React, { MouseEventHandler, useCallback, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { Select } from "../Components/Select";
import { TimePicker } from "../Components/TimePicker";
import { useAppDispatch } from "../hooks/redux";
import { addUser } from "../redux/userReducer";

export const SignUp = () => {
  type InitialState = typeof initialState;

  const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "Male",
    dob: "",
  };

  const formReducer = (
    state: typeof initialState,
    action: { type: "INPUT_CHANGE"; id: string; value: string }
  ) => {
    switch (action.type) {
      case "INPUT_CHANGE":
        return {
          ...state,
          [action.id]: action.value,
        };
      default:
        return state;
    }
  };

  const [form, dispatch] = useReducer(formReducer, initialState);
  const { name, email, password, gender, dob } = form;
  const dispatchRDX = useAppDispatch();
  const history = useHistory();

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const isFormComplete = Object.keys(form).reduce((isComplete, field) => {
      if (!form[field as keyof InitialState]) {
        alert(`${field} is required`);
        isComplete = false;
      }
      return isComplete;
    }, true);

    if (!isFormComplete) {
      return;
    }

    dispatchRDX(
      addUser({
        name,
        email,
        password,
        dob,
        gender,
        id: new Date().getTime(),
      })
    );
    history.push("/login");
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: "INPUT_CHANGE",
        id: e.target.id,
        value: e.target.value,
      });
    },
    []
  );

  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch({
        type: "INPUT_CHANGE",
        id: e.target.id,
        value: e.target.value,
      });
    },
    []
  );

  return (
    <div className="h-full w-screen flex items-center justify-center">
      <form>
        <Input
          label="Email"
          id="email"
          placeholder="Your Email"
          value={email}
          onChange={handleInputChange}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={handleInputChange}
        />
        <Input
          label="User name"
          id="name"
          placeholder="name"
          value={name}
          onChange={handleInputChange}
        />
        <Select
          options={["Male", "Female", "Other"]}
          value={gender}
          id="gender"
          onChange={handleSelectChange}
        />
        <TimePicker
          type="date"
          id="dob"
          value={dob}
          onChange={handleInputChange}
        />
        <Button onClick={handleSubmit}>
          <span>Sign Up</span>
        </Button>
        <p className="text-center font-bold">or</p>
        <Button onClick={handleSubmit}>
          <span>Login</span>
        </Button>
      </form>
    </div>
  );
};
