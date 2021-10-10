import React from "react";
import { useQueryClient } from "react-query";
import { Header } from "../Components/_dashboard/Header";
import { MfRow } from "../Components/_dashboard/MfRow";

const mutualFunds = [
  "https://api.mfapi.in/mf/100027",
  "https://api.mfapi.in/mf/100028",
  "https://api.mfapi.in/mf/100029",
  "https://api.mfapi.in/mf/100030",
  "https://api.mfapi.in/mf/100031",
];

export const Dashboard = () => {
  const queryClient = useQueryClient();

  return (
    <div>
      <Header />
      <h1 className="text-center font-bold">Mutual Funds</h1>
      {/* //table header */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">NAV</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        {/* //table body */}
        <tbody>
          {mutualFunds.map((mf, index) => {
            return <MfRow key={index} url={mf} queryClient={queryClient} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
