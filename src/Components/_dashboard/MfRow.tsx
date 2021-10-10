import { useQuery } from "react-query";
import { useHistory } from "react-router";
import { getMutualFunds } from "../../apis";

interface Props {
  mutualFundId: string;
  filter: string | undefined;
}

export const MfRow = ({ mutualFundId, filter }: Props) => {
  const { data, error, isLoading } = useQuery(["mf", mutualFundId], () =>
    getMutualFunds(mutualFundId)
  );

  const history = useHistory();

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
    <tr
      onClick={() => history.push(`/details/${mutualFundId}`)}
      className="w-full "
    >
      <td className="px-1 py-2 w-1/3 text-center text-sm font-bold text-gray-600">
        {fund_house}
      </td>
      <td className="px-1 py-2 w-1/3 text-center text-sm text-gray-700">
        {scheme_category}
      </td>
      <td className="px-2 py-2 w-1/3 text-center text-sm text-gray-700">
        {scheme_type}
      </td>
    </tr>
  );
};
