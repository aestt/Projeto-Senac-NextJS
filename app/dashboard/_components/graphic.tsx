"use client"

import { Pie, PieChart, Sector, PieSectorDataItem, Tooltip, TooltipIndex } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

export interface DataProps {
    total: number,
    confirmed: number,
    canceled: number
}

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.name}: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Total ${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

interface GraphicProps {
  value1: number
  value2: number
  value3: number
  isAnimationActive?: boolean
  defaultIndex?: TooltipIndex
}

export default function Graphic({value1, value2, value3, isAnimationActive = true, defaultIndex, }: GraphicProps) {
  const data = [
    { name: "Confirmados", value: value1, fill: "#9f1239" },
    { name: "Pendentes", value: value2, fill: "#fda4af" },
    { name: "Cancelados", value: value3, fill: "#fb7185" },
    ];
  
    return (
    <div >
    <PieChart
      style={{ width: '100%', height: "400px", aspectRatio: 1 }}
      responsive
      margin={{
        top: 10,
        right: 0,
        bottom: 30,
        left: 0,
      }}
    >
      <Pie
        activeShape={renderActiveShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip content={() => null} defaultIndex={defaultIndex} />
      <RechartsDevtools />
    </PieChart>
    </div>
  );
}