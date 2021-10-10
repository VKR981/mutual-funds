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
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 4567, amt: 2400 },
  { name: "Page C", uv: 300, pv: 1398, amt: 2400 },
  { name: "Page D", uv: 200, pv: 9800, amt: 2400 },
  { name: "Page E", uv: 278, pv: 3908, amt: 2400 },
  { name: "Page F", uv: 189, pv: 4800, amt: 2400 },
  { name: "Page G", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page H", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page I", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page J", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page K", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page L", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page M", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page N", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page O", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page P", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page Q", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page R", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page S", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page T", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page U", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page V", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page W", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page X", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page Y", uv: 189, pv: 3800, amt: 2400 },
  { name: "Page Z", uv: 189, pv: 3800, amt: 2400 },
];

interface Props {
  data: MutualFund["data"];
}

export const MfLineChart = ({ data }: Props) => {
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
      <div className="w-full overflow-auto h-96 p-4 pr-16 pb-0">
        <ResponsiveContainer width={900} height="80%">
          <LineChart
            data={formatedData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
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
