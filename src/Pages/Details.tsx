import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router";
import { getMutualFunds } from "../apis";
import { MfGrowthChart } from "../Components/_details/MfGrowthChart";
import { MfNavChart } from "../Components/_details/MfNavChart";

export const Details = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const history = useHistory();
  const { data, error, isLoading } = useQuery(["mf", id], () =>
    getMutualFunds(id || "")
  );

  useEffect(() => {
    if (!id) {
      history.push("/");
    }
  }, [history, id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  const { fund_house, scheme_category, scheme_name, scheme_type } = data?.meta;

  return (
    <div className="bg-gray-100  w-full overflow-x-hidden">
      <div className="">
        <h1 className="font-bold p-4 text-center text-lg bg-gray-800 text-gray-100 mb-8">
          {scheme_name}
        </h1>
        <h1
          className="pl-4 font-bold underline cursor-pointer"
          onClick={() => history.push("/")}
        >{`<- Back`}</h1>
        <div className="p-4">
          <h2 className="font-bold text-gray-500 mb-1">Scheme type:</h2>
          <h1 className="text-lg mb-2">{scheme_type}</h1>
          <h2 className="font-bold text-gray-500 mb-1">Scheme category:</h2>
          <h1 className="text-lg mb-2">{scheme_category}</h1>
          <h2 className="font-bold text-gray-500 mb-1">Fund house:</h2>
          <h1 className="text-lg mb-2">{fund_house}</h1>
        </div>
      </div>
      <MfGrowthChart data={data.data} />
      <MfNavChart data={data.data} />
    </div>
  );
};
