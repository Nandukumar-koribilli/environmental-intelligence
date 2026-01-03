
import React from 'react';
import { IntelligenceReport } from '../types';

interface AIAnalysisCardProps {
  report: IntelligenceReport | null;
  loading: boolean;
}

const AIAnalysisCard: React.FC<AIAnalysisCardProps> = ({ report, loading }) => {
  return (
    <div className="bg-[#121212] border border-zinc-800 rounded-xl p-8 h-full relative overflow-hidden flex flex-col">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest">AI Risk Forecast</h3>
        </div>
        <span className="text-[8px] font-bold text-zinc-700 border border-zinc-800 px-2 py-0.5 rounded tracking-widest">GEMINI</span>
      </div>

      <div className="space-y-6 flex-1">
        <div>
          <h4 className="text-xs font-bold text-zinc-100 mb-3">Analysis Summary:</h4>
          {loading ? (
            <div className="animate-pulse space-y-2">
              <div className="h-3 bg-zinc-800 rounded w-full"></div>
              <div className="h-3 bg-zinc-800 rounded w-5/6"></div>
              <div className="h-3 bg-zinc-800 rounded w-4/6"></div>
            </div>
          ) : (
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Based on the correlation between recent heavy rainfall and the operational uptime of Sector 4, the model predicts a <span className="text-zinc-200">15% increase in soil acidity</span> over the next decade if current drainage protocols remain unchanged.
            </p>
          )}
        </div>

        <div className="p-4 bg-zinc-950/50 border-l-2 border-emerald-500 rounded-r-lg">
           <p className="text-xs text-zinc-500 leading-relaxed italic">
             "{report?.summary || "The primary vector for long-term risk is currently groundwater percolation, not atmospheric emission."}"
           </p>
        </div>
        
        <button className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2 hover:underline transition-all">
          View Detailed Reasoning
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default AIAnalysisCard;
