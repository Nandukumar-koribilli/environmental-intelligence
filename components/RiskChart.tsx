
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';
import { CHART_DATA } from '../constants';

const RiskChart: React.FC = () => {
  return (
    <div className="bg-[#121212] border border-zinc-800 rounded-xl p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-lg font-bold">Risk Trajectory Forecast</h3>
          <p className="text-xs text-zinc-500 mt-1">Comparative analysis: Short-Term vs Long-Term Impact</p>
        </div>
        <div className="flex bg-zinc-950 p-1 rounded-lg border border-zinc-800">
          {['Weeks', 'Months', 'Years'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all ${
                tab === 'Years' ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={CHART_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#27272a" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#27272a" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#3f3f46', fontSize: 10, fontWeight: 700 }}
              dy={15}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', fontSize: '10px' }}
              itemStyle={{ color: '#10b981' }}
            />
            <Area 
              type="monotone" 
              dataKey="current" 
              stroke="#27272a" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCurrent)" 
            />
            <Area 
              type="monotone" 
              dataKey="projected" 
              stroke="#10b981" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorProjected)" 
            />
            <ReferenceDot x="2028" y={45} r={4} fill="#10b981" stroke="#050505" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
        
        {/* Custom Labels overlay */}
        <div className="absolute top-[165px] left-[38%] text-[10px] font-bold text-zinc-100 uppercase tracking-tighter flex items-center gap-1">
          <span className="bg-[#050505] px-1 rounded">Current</span>
        </div>
        <div className="absolute top-[45px] right-[40px] text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">
          Projected Peak (2034)
        </div>
      </div>
    </div>
  );
};

export default RiskChart;
