
import React from 'react';

interface ImpactMetricCardProps {
  label: string;
  risk: string;
  color: 'emerald' | 'amber' | 'red' | 'blue';
  description: string;
  score: number;
  icon: 'shield' | 'paw' | 'drop' | 'users';
  isTrend?: boolean;
}

const ImpactMetricCard: React.FC<ImpactMetricCardProps> = ({ label, risk, color, description, score, icon, isTrend }) => {
  const colors = {
    red: { text: 'text-red-500', bg: 'bg-red-500', border: 'border-red-500/20', bgMuted: 'bg-red-500/10' },
    amber: { text: 'text-amber-500', bg: 'bg-amber-500', border: 'border-amber-500/20', bgMuted: 'bg-amber-500/10' },
    emerald: { text: 'text-emerald-500', bg: 'bg-emerald-500', border: 'border-emerald-500/20', bgMuted: 'bg-emerald-500/10' },
    blue: { text: 'text-blue-500', bg: 'bg-blue-500', border: 'border-blue-500/20', bgMuted: 'bg-blue-500/10' },
  };

  const icons = {
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    paw: <path d="M11 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-3 2c1.1 0 2-.9 2-2S9.1 4 8 4 6 4.9 6 6s.9 2 2 2zm11 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-1 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>,
    drop: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>,
    users: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/>
  };

  return (
    <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 transition-all hover:border-zinc-700 group">
      <div className="flex justify-between items-start mb-6">
        <div className={`w-10 h-10 rounded-xl ${colors[color].bgMuted} flex items-center justify-center ${colors[color].text}`}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {icons[icon]}
          </svg>
        </div>
        <span className={`text-[11px] font-bold uppercase tracking-wider ${colors[color].text}`}>
          {risk}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2">{label}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed min-h-[40px] mb-8">
        {description}
      </p>

      <div className="space-y-3">
        <div className="h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden">
          <div 
            className={`h-full ${colors[color].bg} transition-all duration-1000 ease-out`}
            style={{ width: `${score}%` }}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
            {score}% Impact Score
          </span>
          {isTrend && (
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">
              Positive Trend
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImpactMetricCard;
