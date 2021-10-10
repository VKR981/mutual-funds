import React from "react";
import { QueryClient, useQuery } from "react-query";
import { getMutualFunds } from "../../apis";

interface Props {
  url: string;
  filter: string | undefined;
}

export const MfRow = ({ url, filter }: Props) => {
  const { data, error, isLoading } = useQuery(["mf", url], () =>
    getMutualFunds(url)
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  const { fund_house, scheme_category, scheme_name, scheme_type } = data?.meta;
  if (
    filter &&
    !(fund_house + scheme_category + scheme_name + scheme_type)
      .toLowerCase()
      .includes(filter.toLowerCase())
  )
    return null;
  return (
    <tr className="w-full ">
      <td className="px-1 py-2 w-1/3 text-center text-sm">{fund_house}</td>
      <td className="px-1 py-2 w-1/3 text-center text-sm">{scheme_category}</td>
      <td className="px-2 py-2 w-1/3 text-center text-sm">{scheme_type}</td>
    </tr>
  );
};
