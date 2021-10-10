type MutualFund = {
  meta: {
    fund_house: string;
    scheme_type: string;
    scheme_category: string;
    scheme_code: number;
    scheme_name: string;
  };
  data: {
    date: string;
    nav: string;
  }[];
  status: string;
};

export const getMutualFunds = async (
  mutualFundId: string
): Promise<MutualFund> => {
  const response = await fetch("https://api.mfapi.in/mf/" + mutualFundId);
  const data = await response.json();
  return data;
};
