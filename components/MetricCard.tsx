
import React from 'react';

interface MetricCardProps {
  type: 'risk' | 'concern' | 'confidence';
  label: string;
  value: string;
  trend?: string;
  status?: string;
  percent?: number;
  subText?: string;
  color: 'emerald' | 'amber' | 'red';
  score?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ type, label, value, trend, status, percent, subText, color, score }) => {
  return (
    <div className="bg-[#121212] border border-zinc-800 rounded-xl p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{label}</span>
          {type === 'risk' && (
            <div className="bg-amber-500/10 border border-amber-500/20 p-1.5 rounded-lg">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {type === 'confidence' && percent !== undefined && (
            <div className="relative w-12 h-12">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-zinc-800" />
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={126} strokeDashoffset={126 - (126 * percent) / 100} className="text-emerald-500" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold">{percent}%</span>
              </div>
            </div>
          )}
          
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-2xl font-black tracking-tight ${type === 'risk' ? 'text-amber-400' : 'text-zinc-100'}`}>
                {value}
              </h3>
              {trend && (
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  {trend}
                </span>
              )}
            </div>
            {status && (
              <div className="flex items-center gap-2 mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest italic">Status: <span className="text-zinc-300 not-italic">{status}</span></span>
              </div>
            )}
            {subText && (
              <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest font-medium">{subText}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {type === 'risk' && (
          <div className="space-y-2">
            <p className="text-[10px] text-zinc-600 leading-tight">Slight elevation due to recent rainfall patterns.</p>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: '45%' }}></div>
            </div>
          </div>
        )}
        {type === 'confidence' && (
          <div className="h-0.5 w-12 bg-zinc-800"></div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
