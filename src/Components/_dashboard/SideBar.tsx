import React from "react";
import { useHistory } from "react-router";

interface Props {
  show: boolean;
  toggle: () => void;
}

export const SideBar = ({ show, toggle }: Props) => {
  const history = useHistory();

  const sideBarOptions = [
    {
      id: 1,
      name: "Dashboard",
      onClick: () => history.push("/dashboard"),
    },
    {
      id: 2,
      name: "Profile",
      onClick: () => history.push("/profile"),
    },
    {
      id: 3,
      name: "Logout",
      onClick: () => history.push("/login"),
    },
    {
      id: 4,
      name: "Close",
      onClick: toggle,
    },
  ];
  return (
    <div
      className={` transform ${
        show ? "translate-x-0" : "-translate-x-full"
      } transition-transform overflow-hidden z-10 bg-cyan-800 text-white text-lg font-bold absolute h-full left-0 top-0 pt-8`}
    >
      {sideBarOptions.map((option) => (
        <h1 key={option.id} onClick={option.onClick} className="py-2 px-4 w-36">
          {option.name}
        </h1>
      ))}
    </div>
  );
};
