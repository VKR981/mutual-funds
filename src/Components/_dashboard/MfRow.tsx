import React from "react";
import { QueryClient, useQuery } from "react-query";
import { getMutualFunds } from "../../apis";

interface Props {
  url: string;
  queryClient: QueryClient;
}

export const MfRow = ({ url, queryClient }: Props) => {
  const { data, error, isLoading } = useQuery(["mf", url], () =>
    getMutualFunds(url)
  );
  return (
    <tr className="w-full ">
      <td className="px-1 py-2 w-1/3 text-center text-sm">
        {data?.meta.fund_house}
      </td>
      <td className="px-1 py-2 w-1/3 text-center text-sm">
        {data?.meta.scheme_category}
      </td>
      <td className="px-2 py-2 w-1/3 text-center text-sm">
        {data?.meta.scheme_type}
      </td>
    </tr>
  );
};
