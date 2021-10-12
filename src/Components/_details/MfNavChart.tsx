import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MutualFund } from "../../apis";

interface Props {
  data: MutualFund["data"];
}

export const MfNavChart = ({ data }: Props) => {
  const formatedData = useMemo(
    () =>
      data.map((item) => ({
        date: item.date,
        nav: parseFloat(item.nav || ""),
      })),
    [data]
  );

  const getMaxNav = useMemo(() => {
    const nav = Math.max(...formatedData.map((item) => item.nav));
    const date = formatedData.find((item) => item.nav === nav)?.date;
    return { nav, date };
  }, [formatedData]);

  const getMinNav = useMemo(() => {
    const nav = Math.min(...formatedData.map((item) => item.nav));
    const date = formatedData.find((item) => item.nav === nav)?.date;
    return { nav, date };
  }, [formatedData]);

  return (
    <div>
      <div className="p-4 pt-0">
        <h1 className=" text-green-500">MAX NAV:</h1>
        <span>
          {getMaxNav.nav}, at {getMaxNav.date}
        </span>
        <h1 className="mt-4 text-red-500">MIN NAV:</h1>
        <span>
          {getMinNav.nav}, at {getMinNav.date}
        </span>
      </div>
      <div className="w-full overflow-auto h-72 p-4 pr-16 pb-0">
        <ResponsiveContainer width="100%" height={16 * 17}>
          <LineChart
            data={formatedData}
            margin={{ top: 5, right: 10, bottom: 15, left: 0 }}
          >
            <Line type="monotone" dataKey="nav" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              reversed
              dataKey="date"
              label={{ value: "date", offset: -5, position: "insideBottom" }}
            />
            <YAxis
              label={{ value: "NAV", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
