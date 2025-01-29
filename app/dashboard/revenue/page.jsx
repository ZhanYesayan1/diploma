'use client'
import { useEffect, useState } from 'react';

// Fetch revenue data
const fetchRevenueData = async () => {
  const response = await fetch('/api/revenue');
  const data = await response.json();
  return data;
};

const Revenue = () => {
  const [revenueData, setRevenueData] = useState(null);

  useEffect(() => {
    fetchRevenueData().then(data => setRevenueData(data));
  }, []);

  if (!revenueData) {
    return <p>Loading revenue data...</p>;
  }

  return (
    <div>
      <h1>Marketing Revenue</h1>
      <div>
        <h2>Total Revenue</h2>
        <p>${revenueData.totalRevenue}</p>
      </div>
      <div>
        <h2>Revenue by Channel</h2>
        <ul>
          {revenueData.channels.map(channel => (
            <li key={channel.name}>
              {channel.name}: ${channel.revenue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Revenue;
