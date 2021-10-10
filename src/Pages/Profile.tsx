import React from "react";
import { useHistory } from "react-router";
import { Button } from "../Components/Button";
import { Header } from "../Components/Header";
import { useAppSelector } from "../hooks/redux";

export const Profile = () => {
  const user = useAppSelector((state) => state.user.currentUser);
  const history = useHistory();
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="text-gray-500 my-4">Profile</h1>
        <p className="font-bold text-xl text-gray-700 my-1">{user?.name}</p>
        <p className="font-bold text-lg text-gray-700 my-1">{user?.email}</p>
        <p className="font-bold text-lg text-gray-700 my-1">{user?.gender}</p>
        <p className="font-bold text-lg text-gray-700 my-1">{user?.dob}</p>
      </div>
      <div className="px-8">
        <Button onClick={() => history.push("/editprofile")}>
          <span>Edit profile</span>
        </Button>
      </div>
    </div>
  );
};
