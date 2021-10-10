import React from "react";
import { useQueryClient } from "react-query";
import { Header } from "../Components/Header";
import { MfRow } from "../Components/_dashboard/MfRow";
import { MutualFunds } from "../Components/_dashboard/MutualFunds";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <MutualFunds />
    </div>
  );
};
