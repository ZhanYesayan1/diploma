"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function MarketingRevenuePage() {
  const [revenue, setRevenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRevenue() {
      try {
        const response = await fetch("/api/marketing-revenue");
        if (!response.ok) throw new Error("Failed to load revenue data");
        const data = await response.json();
        setRevenue(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRevenue();
  }, []);

  if (loading) return <p>Loading revenue data...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!revenue) return <p>No data available</p>;

  // Check if revenue properties exist before using toLocaleString
  const totalRevenue = revenue.totalRevenue ? revenue.totalRevenue.toLocaleString() : "N/A";
  const cltv = revenue.cltv ? revenue.cltv.toLocaleString() : "N/A";
  const marketingSpend = revenue.marketingSpend ? revenue.marketingSpend.toLocaleString() : "N/A";
  const revenueGenerated = revenue.revenueGenerated ? revenue.revenueGenerated.toLocaleString() : "N/A";

  const chartData = revenue.monthlyRevenue ? {
    labels: revenue.monthlyRevenue.map((entry) => entry.month),
    datasets: [
      {
        label: "Monthly Revenue",
        data: revenue.monthlyRevenue.map((entry) => entry.revenue),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  } : null;

  return (
    <div className="p-6">   
    <h1 className="text-3xl font-bold mb-4">💰 Marketing Revenue</h1>
        <div className="flex justify-evenly">
        

            {/* Revenue Overview */}
            <div className="bg-bgSoft shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">💼 Revenue Overview</h2>
            <p className="text-lg">
                <strong>Total Revenue:</strong> ${totalRevenue}
            </p>
            <p className="text-lg">
                <strong>Best Performing Category:</strong> {revenue.bestPerformingCategory || "N/A"}
            </p>
            </div>

            {/* Key Insights */}
            <div className="bg-bgSoft shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">📈 Key Insights</h2>
            <p className="text-lg">
                <strong>Revenue Growth:</strong> 10% increase compared to last month
            </p>
            <p className="text-lg">
                <strong>Conversion Rate:</strong> 4.5%
            </p>
            <p className="text-lg">
                <strong>Best Performing Category:</strong> Digital Ads (35% of total revenue)
            </p>
            </div>

            {/* Campaign Revenue Breakdown */}
            <div className="bg-bgSoft shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">📊 Campaign Revenue Breakdown</h2>
            <ul className="space-y-4">
                {revenue.campaigns && revenue.campaigns.map((campaign) => (
                <li key={campaign.name} className="flex justify-between">
                    <span>{campaign.name}</span>
                    <span>
                    ${campaign.revenue ? campaign.revenue.toLocaleString() : "N/A"} ({campaign.percentage}% of total revenue)
                    </span>
                    <span>ROI: {campaign.roi || "N/A"}%</span>
                </li>
                ))}
            </ul>
            </div>
        </div>
      
        <div className="flex justify-evenly">
                                    {/* Customer Lifetime Value */}
                    <div className="bg-bgSoft shadow-lg rounded-lg p-6 mb-6">
                        <h2 className="text-2xl font-semibold mb-4">👥 Customer Lifetime Value (CLTV)</h2>
                        <p className="text-lg">
                        <strong>Average Customer Lifetime Value:</strong> ${cltv}
                        </p>
                        <p className="text-lg">
                        This is the average revenue you can expect from each customer over their entire relationship with your company.
                        </p>
                    </div>

                    {/* Marketing Spend vs Revenue */}
                    <div className="bg-bgSoft shadow-lg rounded-lg p-6 mb-6">
                        <h2 className="text-2xl font-semibold mb-4">💸 Marketing Spend vs Revenue</h2>
                        <p className="text-lg">
                        <strong>Total Marketing Spend:</strong> ${marketingSpend}
                        </p>
                        <p className="text-lg">
                        <strong>Total Revenue Generated:</strong> ${revenueGenerated}
                        </p>
                        <p className="text-lg">
                        <strong>Return on Investment (ROI):</strong> {revenue.roi || "N/A"}%
                        </p>
                    </div>


         </div>
     
      {/* Monthly Revenue Chart */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-4 w-[600px]">
        <h2 className="text-xl font-semibold">📊 Monthly Revenue</h2>
        {chartData && <Bar data={chartData} style={{maxHeight:'300px' }}/>}
      </div>
    </div>
  );
}
