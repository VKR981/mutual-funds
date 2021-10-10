import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router";
import { getMutualFunds } from "../apis";
import { MfLineChart } from "../Components/_details/MfLineChart";

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
    <div className=" pt-6 w-full overflow-x-hidden">
      <div className="p-5">
        <h1 className="font-bold text-center text-lg text-gray-700 mb-8">
          {scheme_name}
        </h1>
        <h2 className="font-bold text-gray-500 mb-1">Scheme type:</h2>
        <h1 className="text-lg mb-2">{scheme_type}</h1>
        <h2 className="font-bold text-gray-500 mb-1">Scheme category:</h2>
        <h1 className="text-lg mb-2">{scheme_category}</h1>
        <h2 className="font-bold text-gray-500 mb-1">Fund house:</h2>
        <h1 className="text-lg mb-2">{fund_house}</h1>
      </div>
      <MfLineChart data={data.data} />
    </div>
  );
};
