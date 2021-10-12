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
      onClick: () => history.push("/"),
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
      className: "md:hidden",
    },
  ];
  return (
    <div
      className={` transform ${
        show ? "translate-x-0" : "-translate-x-full"
      } transition-transform md:translate-x-0 overflow-hidden z-10 bg-gray-200 md:bg-opacity-0 md:flex md:text-white md:pt-2 md:text-base text-gray-800 text-lg font-bold absolute h-full md:h-auto left-0 top-0 pt-8`}
    >
      {sideBarOptions.map((option) => (
        <h1
          key={option.id}
          onClick={option.onClick}
          className={`${
            option.className ? option.className : ""
          } py-2 px-4 md:px-4 md:w-max w-36 cursor-pointer select-none`}
        >
          {option.name}
        </h1>
      ))}
    </div>
  );
};
