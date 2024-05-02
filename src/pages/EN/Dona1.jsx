import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [{ name: 'Group A', value: 67 }];
const COLORS = ['#005148'];


export default class Example extends PureComponent {
  render() {
    return (
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          startAngle={0}
          endAngle={241}
          innerRadius={40}
          outerRadius={50}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="center-value" style={{ fontSize: '28px', fill: 'gray', fontWeight: 'bold' }}>
          {67}
        </text>
      </PieChart>
    );
  }
}
