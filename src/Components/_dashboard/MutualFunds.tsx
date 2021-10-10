import React, { useState } from "react";
import { Input } from "../Input";
import { MfRow } from "./MfRow";

const mutualFunds = ["100027", "100028", "100029", "100030", "100031"];

export const MutualFunds = () => {
  const [filter, setFilter] = useState<string>();
  return (
    <div className="p-2 m-2">
      <div className="flex items-center w-full">
        <h1 className="text-center font-bold">Mutual Funds</h1>
        <Input
          placeholder="Search"
          className="m-0 ml-2"
          style={{ width: "14rem" }}
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
      </div>
      <div className="shadow-custom p-4 rounded-md">
        <table className="table table-striped w-full">
          <thead className="border-b ">
            <tr>
              <th scope="col" className="pb-2 w-1/3">
                Scheme
              </th>
              <th scope="col" className="pb-2 w-1/3">
                Category
              </th>
              <th scope="col" className="pb-2 w-1/3">
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {mutualFunds.map((mf, index) => {
              return <MfRow key={index} mutualFundId={mf} filter={filter} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
