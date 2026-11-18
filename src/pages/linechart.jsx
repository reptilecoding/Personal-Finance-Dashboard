import { CartesianGrid, Area, AreaChart, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';


// #region Sample data
const data = [
  {
    name: 'Aug',
    inc: 300,
    exp: 240,
    amt: 2400,
  },
  {
    name: 'Sep',
    inc: 600,
    exp: 450,
    amt: 2400,
  },
  {
    name: 'Oct',
    inc: 750,
    exp: 600,
    amt: 2400,
  },
  {
    name: 'Nov',
    inc: 900,
    exp: 790,
    amt: 2400,
  },
  {
    name: 'Dec',
    inc: 1000,
    exp: 890,
    amt: 2400,
  },
  {
    name: 'Jan',
    inc: 1100,
    exp: 1000,
    amt: 2400,
  },
];

// #endregion

export default function IndexLineChart() {
  return (
    <AreaChart
      width={840}
      height={240}
      data={data}
      margin={{ top: 10, right: 20, left: -15, bottom: 0 }}
    >
      {/* 1. Define the "fog" fade from top to bottom */}
      <defs>
        <linearGradient id="incomeFog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#34d399" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
        </linearGradient>

        <linearGradient id="expenseFog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
        </linearGradient>
      </defs>

      <CartesianGrid strokeDasharray="5 5" stroke="#1f2937" vertical={false} />
      <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
      <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tick={false} width={0}/>
      

      {/* 2. Connect each <Area> to its gradient using fill="url(#id)" */}
      <Legend
       verticalAlign="top"
      align="right"
      iconType="circle"
      iconSize={8}
      wrapperStyle={{ top: -40, right: 0, }}
      />
      <Area
        name="Income"
        type="monotone"
        dataKey="inc"
        stroke="#34d399"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#incomeFog)"
      />
      <Area
        name="Expenses"
        type="monotone"
        dataKey="exp"
        stroke="#f43f5e"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#expenseFog)"
      />
    </AreaChart>
  );
}