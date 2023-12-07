import React from "react";
import "./Chart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { data } from "../../constants/student";

const getIntroOfPage = (label) => {
  if (label === "6th to 12th") {
    return "It's about how many students studied in schools";
  }
  if (label === "Bachelor Degree") {
    return "It's about how many students studied in schools";
  }
  if (label === "Master Degree") {
    return "It's about how many students studied in schools";
  }
  if (label === "Government Jobs") {
    return "It's about how many students studied in schools";
  }
  if (label === "Private Sectors") {
    return "It's about how many students studied in schools";
  }
  if (label === "Others") {
    return "It's about how many students studied in schools";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

const Chart = () => {
  console.log(data);
  return (
    <div className="chart">
      <h3 className="chartTitle">Student Info</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="pv" barSize={20} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
