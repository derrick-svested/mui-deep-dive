import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

const data = [
  { time: "00:00", amount: 0 },
  { time: "03:00", amount: 300 },
  { time: "06:00", amount: 600 },
  { time: "09:00", amount: 800 },
  { time: "12:00", amount: 1500 },
  { time: "15:00", amount: 2000 },
  { time: "18:00", amount: 2400 },
  { time: "21:00", amount: 2400 },
  { time: "24:00", amount: 3000 },
];

const Chart = () => {
  const theme = useTheme();

  return (
    <>
      <Title>Today</Title>
      <ResponsiveContainer height="85%">
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Users (people)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
