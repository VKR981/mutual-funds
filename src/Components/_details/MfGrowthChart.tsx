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

export const MfGrowthChart = ({ data }: Props) => {
  const formatedData = useMemo(
    () =>
      data.map((item) => ({
        date: item.date,
        nav: parseFloat(item.nav || ""),
      })),
    [data]
  );

  const growthPerYear = useMemo(() => {
    const uniqueYears = new Set(
      formatedData.map((item) => item.date.split("-")[2])
    );

    const minMaxDateOfYear = Array.from(uniqueYears).map((year) => {
      const minDate = [...formatedData]
        .reverse()
        .find((item) => item.date.split("-")[2] === year)?.date;
      const maxDate = formatedData.find(
        (item) => item.date.split("-")[2] === year
      )?.date;
      return { year, minDate, maxDate };
    });

    return minMaxDateOfYear.map((item2) => {
      const minNav = formatedData.find(
        (item) => item.date === item2.minDate
      )?.nav;
      const maxNav = formatedData.find(
        (item) => item.date === item2.maxDate
      )?.nav;
      return {
        year: item2.year,
        growth:
          typeof maxNav === "number" && typeof minNav === "number"
            ? ((maxNav - minNav) * 100) / minNav
            : undefined,
      };
    });
  }, [formatedData]);

  return (
    <div className="mb-8">
      <h1 className="px-4 text-gray-600">Growth each year:</h1>
      <div className="w-full overflow-auto h-72 p-4 pr-16 pb-0">
        <ResponsiveContainer width={window.innerWidth * 0.9} height="95%">
          <LineChart
            data={growthPerYear}
            margin={{ top: 5, right: 20, bottom: 5, left: 5 }}
          >
            <Line type="monotone" dataKey="growth" stroke="#f884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              reversed
              dataKey="year"
              label={{ value: "Year", offset: -5, position: "insideBottom" }}
            />
            <YAxis
              label={{ value: "Growth", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
