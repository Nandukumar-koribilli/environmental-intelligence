
import React, { useState } from 'react';
import { IntelligenceReport } from '../types';

interface RiskTimelineProps {
  report: IntelligenceReport | null;
}

const RiskTimeline: React.FC<RiskTimelineProps> = ({ report }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Air' | 'Water'>('All');

  return (
    <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-8">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-xl font-bold">Risk Timeline Projection</h3>
        <div className="flex bg-[#0a0a0a] p-1 rounded-xl border border-zinc-800">
          {(['All', 'Air', 'Water'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFilter === f ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {/* Short Term */}
        <div className="relative pl-10 border-l border-zinc-800">
          <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
          <h4 className="text-[11px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">Short-Term (0-6 Months)</h4>
          <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-6">
            <h5 className="font-bold text-lg mb-2">Immediate Particulate Exposure</h5>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Current filtration systems operating at 85% efficiency. Risk of exceeding daily limits in Sector 4 if output isn't throttled during peak shifts.
            </p>
          </div>
        </div>

        {/* Long Term */}
        <div className="relative pl-10 border-l border-zinc-800">
          <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <h4 className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Long-Term (5+ Years)</h4>
          <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2 text-blue-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
              <h5 className="font-bold text-lg">Groundwater Contamination Risk</h5>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Predictive models suggest slow seepage of persistent chemicals could affect water table by 2030 if containment isn't upgraded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskTimeline;
