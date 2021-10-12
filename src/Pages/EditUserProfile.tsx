import React, { useCallback, useReducer } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setCurrentUser, updateUser } from "../redux/userReducer";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { Select } from "../Components/Select";
import { TimePicker } from "../Components/TimePicker";

export const EditUserProfile = () => {
  type InitialState = typeof initialState;

  const currentUser = useAppSelector((state) => state.user.currentUser);

  const initialState = currentUser || {
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
      setCurrentUser({
        name,
        email,
        password,
        dob,
        gender,
        id: currentUser?.id || new Date().getTime(),
      })
    );

    dispatchRDX(
      updateUser({
        name,
        email,
        password,
        dob,
        gender,
        id: currentUser?.id || new Date().getTime(),
      })
    );
    history.push("/profile");
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
    <div className="p-4 h-full w-full flex items-center justify-center">
      <form>
        <h1 className="text-center font-bold text-gray-500 text-xl">
          Edit Profile
        </h1>
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
          <span>Save</span>
        </Button>
        <p className="text-center font-bold">or</p>
        <Button onClick={() => history.push("/")}>
          <span>Cancel</span>
        </Button>
      </form>
    </div>
  );
};
