import React from "react";
import { Route } from "react-router";
import { useAppSelector } from "../hooks/redux";
import { Login } from "../Pages/Login";

export const PrivateRoute = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const currentUser = useAppSelector((state) => state.user.currentUser);

  return <Route path={path}>{currentUser ? children : <Login />}</Route>;
};
