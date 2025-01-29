export async function GET(req) {
    const reportData = {
      totalSales: 50000,
      conversions: 150,
      performanceOverTime: [
        { month: "January", sales: 5000 },
        { month: "February", sales: 7000 },
        { month: "March", sales: 8000 },
      ],
      websiteTraffic: {
        totalVisits: 12000,
        uniqueVisitors: 8000,
        returningVisitors: 4000,
        bounceRate: 40, // percentage
        avgSessionDuration: "3m 25s",
      },
      marketingCampaigns: {
        emailOpenRate: 25, // percentage
        socialMediaClicks: 1800,
        adCTR: 3.2, // percentage
      },
      bestTrafficSources: [
        { source: "Google", percentage: 50 },
        { source: "Facebook", percentage: 30 },
        { source: "Instagram", percentage: 20 },
      ],
    };
  
    return new Response(JSON.stringify(reportData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  