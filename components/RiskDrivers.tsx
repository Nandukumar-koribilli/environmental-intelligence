
import React from 'react';

const RiskDrivers: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
         <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h8m-8 6h16" />
         </svg>
         <h3 className="text-sm font-bold uppercase tracking-widest">Key Risk Drivers</h3>
      </div>
      
      <div className="space-y-3">
        <div className="bg-[#121212] border border-zinc-800 rounded-lg p-5 flex justify-between items-center group hover:bg-zinc-900 transition-all">
          <div>
            <h4 className="font-bold text-sm text-zinc-200">Chemical Persistence</h4>
            <p className="text-[10px] text-zinc-600 font-medium mt-1">Slow degradation rates observed</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] block mb-1">High</span>
            <div className="flex gap-1">
              <div className="w-3.5 h-1 bg-red-600 rounded-sm"></div>
              <div className="w-3.5 h-1 bg-red-600 rounded-sm"></div>
              <div className="w-3.5 h-1 bg-red-600 rounded-sm"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#121212] border border-zinc-800 rounded-lg p-5 flex justify-between items-center group hover:bg-zinc-900 transition-all">
          <div>
            <h4 className="font-bold text-sm text-zinc-200">Operational Scale</h4>
            <p className="text-[10px] text-zinc-600 font-medium mt-1">Sector 4 output increased by 15%</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] block mb-1">Moderate</span>
            <div className="flex gap-1">
              <div className="w-3.5 h-1 bg-amber-600 rounded-sm"></div>
              <div className="w-3.5 h-1 bg-amber-600 rounded-sm"></div>
              <div className="w-3.5 h-1 bg-zinc-800 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDrivers;
