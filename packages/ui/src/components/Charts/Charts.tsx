import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import React, { FunctionComponent } from "react";

export interface IChartsProps {
  data?: Array<any>;
}

const CustomizedLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, value } = props;

  return (
    <text
      x={x}
      y={y}
      dy={-15}
      fill={"#FF7E5C"}
      fontSize={10}
      style={{ fontWeight: "bold" }}
      textAnchor="middle"
    >
      {value} %
    </text>
  );
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={10}
        textAnchor="end"
        fill="#FF7E5C"
        transform="rotate(-50)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export const Charts = ({ data }: IChartsProps) => {
  return (
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="percentage" stroke="#8884d8">
        <LabelList content={<CustomizedLabel />} />
      </Line>
    </LineChart>
  );
};
