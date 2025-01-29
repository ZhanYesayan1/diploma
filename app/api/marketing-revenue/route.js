export async function GET(req) {
    const revenueData = {
      totalRevenue: 120000,
      monthlyRevenue: [
        { month: "Jan", revenue: 20000 },
        { month: "Feb", revenue: 25000 },
        { month: "Mar", revenue: 30000 },
      ],
      bestPerformingCategory: "Digital Ads",
    };
  
    return Response.json(revenueData, { status: 200 });
  }
  