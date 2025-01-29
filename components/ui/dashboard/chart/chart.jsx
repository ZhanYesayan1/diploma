"use client";
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Sun',
      visit: 1800,
      click:500,
    },
    {
      name: 'Mon',
      visit: 1500,
      click:200,
    },
    {
      name: 'Tue',
      visit: 1300,
      click:600,
    },
    {
      name: 'Wed',
      visit: 1400,
      click:500,
    },
    {
        name: 'Thu',
        visit: 1700,
        click:900,
      },
      {
        name: 'Fri',
        visit: 1300,
        click:500,
      },
      {
        name: 'Sat',
        visit: 1100,
        click:800,
      },
];


const Chart = () => {
    return (
        <div className="  bg-bgSoft p-5 rounded-lg">
            <h2 className="text-textSoft font-light mb-5">Page Visit</h2>
            <ResponsiveContainer width="100%" height="80%">
             <LineChart
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#d0bdf4"}} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="click" stroke="green"  />
        </LineChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Chart;
