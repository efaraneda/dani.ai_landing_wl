import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  LabelList 
} from 'recharts';

const data = [
  {
    name: 'Kyle',
    uv: -45,
    pv: 5
  },
  {
    name: 'Sophia',
    uv: -23,
    pv: 27
  },
  {
    name: 'John',
    uv: -40,
    pv: 10
  },
  {
    name: 'Kenzie',
    uv: -12,
    pv: 38

  },
  {
    name: 'Matt',
    uv: -19,
    pv: 31
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-stacked-by-sign-cbct8';

  render() {
    return (
        
        <BarChart
          width={350}
          height={210}
          data={data}
          stackOffset="sign"
          margin={{
            top: 20,
            right: 18,
            left: 8,
            bottom: 10,
          }}
          layout="vertical" // Cambiamos el layout a vertical
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis type="number" /> {/* Cambiamos a type="number" */}
          <YAxis dataKey="name" type="category" /> {/* Cambiamos a type="category" y dataKey="name" */}
          
          <ReferenceLine x={0} stroke="#000" /> {/* Cambiamos a x={0} */}
          <Bar dataKey="pv" fill="#005148" stackId="stack" >
            <LabelList dataKey="pv" fill="#ffffff" position="insideRight" />
          </Bar>
          <Bar dataKey="uv" fill="#cc4125ff" stackId="stack" >
          <LabelList dataKey="uv" fill="#ffffff" position="insideRight" />
          </Bar>
          
        </BarChart>
    );
  }
}
