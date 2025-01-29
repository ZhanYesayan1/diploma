"use client";

import { useEffect, useState } from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function MarketingReportPage() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReport() {
      try {
        const response = await fetch("/api/marketing-report");
        if (!response.ok) throw new Error("Failed to load report data");
        const data = await response.json();
        setReport(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchReport();
  }, []);

  if (loading) return <p>Loading marketing report...</p>;
  if (error) return <p>Error: {error}</p>;

  // Sales Performance Over Time (Line Chart)
  const salesData = {
    labels: report.performanceOverTime.map((entry) => entry.month),
    datasets: [
      {
        label: "Sales Over Time",
        data: report.performanceOverTime.map((entry) => entry.sales),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // Traffic Sources (Pie Chart)
  const trafficData = {
    labels: report.bestTrafficSources.map((entry) => entry.source),
    datasets: [
      {
        label: "Traffic Sources",
        data: report.bestTrafficSources.map((entry) => entry.percentage),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Marketing Campaign Performance (Bar Chart)
  const campaignData = {
    labels: ["Email Open Rate", "Social Media Clicks", "Ad CTR"],
    datasets: [
      {
        label: "Campaign Performance",
        data: [
          report.marketingCampaigns.emailOpenRate,
          report.marketingCampaigns.socialMediaClicks,
          report.marketingCampaigns.adCTR,
        ],
        backgroundColor: ["#4CAF50", "#FFC107", "#FF5722"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom height and width
    height: 250, // Reduced height for smaller charts
    width: 400,  // Set width for smaller charts
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📊 Marketing Report</h1>

      <div className="bg-bgSoft shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">📌 Website Traffic</h2>
        <p><strong>Total Visits:</strong> {report.websiteTraffic.totalVisits}</p>
        <p><strong>Unique Visitors:</strong> {report.websiteTraffic.uniqueVisitors}</p>
        <p><strong>Returning Visitors:</strong> {report.websiteTraffic.returningVisitors}</p>
        <p><strong>Bounce Rate:</strong> {report.websiteTraffic.bounceRate}%</p>
        <p><strong>Avg. Session Duration:</strong> {report.websiteTraffic.avgSessionDuration}</p>
      </div>
      <div className="flex justify-center ">
      <div className="bg-white shadow-md rounded-lg p-4 mt-4 mr-4" style={{ maxWidth: '500px', maxHeight:'500px' }}>
        <h2 className="text-xl font-semibold">📈 Sales Performance</h2>
        <Line data={salesData} options={chartOptions} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mt-4 mr-4" style={{ maxWidth: '500px', maxHeight:'500px'}}>
        <h2 className="text-xl font-semibold">🌍 Traffic Sources</h2>
        <Pie data={trafficData} options={chartOptions} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mt-4" style={{ maxWidth: '500px',maxHeight:'500px' }}>
        <h2 className="text-xl font-semibold">📢 Marketing Campaign Performance</h2>
        <Bar data={campaignData} options={chartOptions} />
      </div>
      </div>
      
    </div>
  );
}
