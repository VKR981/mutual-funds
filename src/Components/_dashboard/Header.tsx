import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { SideBar } from "./SideBar";

export const Header = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const userName = useAppSelector((state) => state.user.currentUser?.name);
  return (
    <div className="p-4 flex bg-gray-800">
      <div onClick={() => setIsSideBarVisible(!isSideBarVisible)}>
        <div className="bg-gray-400 w-8 h-1 rounded-full my-1" />
        <div className="bg-gray-400 w-8 h-1 rounded-full my-1" />
        <div className="bg-gray-400 w-8 h-1 rounded-full my-1" />
      </div>
      <SideBar
        show={isSideBarVisible}
        toggle={() => setIsSideBarVisible(!isSideBarVisible)}
      />
      <h3 className="ml-auto text-white">Hi, {userName || "John"}</h3>
    </div>
  );
};
