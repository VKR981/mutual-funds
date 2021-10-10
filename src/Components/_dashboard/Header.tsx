import React from "react";
import { useAppSelector } from "../../hooks/redux";

export const Header = () => {
  const userName = useAppSelector((state) => state.user.currentUser?.name);
  return (
    <div className="p-4 flex">
      <div>
        <div className="bg-gray-400 w-8 h-1 rounded-full my-1" />
        <div className="bg-gray-400 w-8 h-1 rounded-full my-1" />
        <div className="bg-gray-400 w-8 h-1 rounded-full my-1" />
      </div>

      <h3 className="ml-auto">{userName || "John"}</h3>
    </div>
  );
};
