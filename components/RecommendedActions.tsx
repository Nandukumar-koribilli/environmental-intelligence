
import React from 'react';
import { IndustryData } from '../types';

interface RecommendedActionsProps {
  industry: IndustryData;
  recommendations: string[];
}

const RecommendedActions: React.FC<RecommendedActionsProps> = ({ industry, recommendations }) => {
  const displayList = recommendations.length > 0 ? recommendations : industry.mitigationSteps;
  
  const tags = [
    { label: 'High Impact', color: 'text-emerald-500 bg-emerald-500/10' },
    { label: 'Optimization', color: 'text-blue-500 bg-blue-500/10' },
    { label: 'Investigation', color: 'text-amber-500 bg-amber-500/10' },
  ];

  return (
    <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-8">
      <h3 className="text-xl font-bold mb-8">Recommended Actions</h3>

      <div className="space-y-4">
        {displayList.map((action, idx) => (
          <div key={idx} className="bg-[#181818] border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-all group cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${tags[idx % tags.length].color}`}>
                  {tags[idx % tags.length].label}
                </span>
                <h4 className="font-bold text-lg leading-tight group-hover:text-emerald-400 transition-colors">{action}</h4>
                <p className="text-xs text-zinc-500 font-medium">Preventative check for Sector 4 units.</p>
              </div>
              <div className="p-2 bg-zinc-900 rounded-xl group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 py-4 text-[11px] font-bold text-zinc-400 hover:text-white border border-zinc-800 rounded-2xl hover:bg-zinc-800/50 transition-all uppercase tracking-[0.2em]">
        View Full Action Plan
      </button>
    </div>
  );
};

export default RecommendedActions;
