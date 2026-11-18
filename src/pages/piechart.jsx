import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Housing', value: 400 },
  { name: 'Food & Dining', value: 300 },
  { name: 'Transport', value: 150 },
  { name: 'Entertainment', value: 150 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#6b50c2'];

export default function SimplePieChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="relative w-full h-[300px]">
      {/* Center Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-13">
        <span className="text-xl font-bold text-white">${total.toLocaleString()}</span>
        <span className="text-xs text-[#B8B8B8]">Total Spent</span>
        
      </div>

      <ResponsiveContainer>
        
        <PieChart>
            
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={100}
            paddingAngle={4}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}