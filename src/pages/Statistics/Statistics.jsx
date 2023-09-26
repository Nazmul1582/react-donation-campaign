import { Cell, Pie, PieChart } from "recharts";
import { getStoredDonation } from "../../localStorage/localStorage";

const Statistics = () => {
  const storedDonation = getStoredDonation();
  const totalDonation = 12 - storedDonation.length;
  const data = [
    { name: "Total donation", value: totalDonation },
    { name: "stored donation", value: storedDonation.length },
  ];
  const COLORS = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section>
      <div className="container mx-auto pt-20 pb-24">
        <div className="flex items-center justify-center">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
          <div className="flex justify-center gap-14 text-lg mt-3">
            <div className="flex items-center gap-2">
              <p>Your Donation</p>
              <p className="h-3 w-24 bg-[#00C49F]"></p>
            </div>
            <div className="flex items-center gap-2">
              <p>Your Donation</p>
              <p className="h-3 w-24 bg-[#FF444A]"></p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Statistics;
