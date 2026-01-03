
import React from 'react';

interface ImpactPathwayProps {
  pathway: string;
  impacts?: {
    human: string;
    ecosystem: string;
  };
}

const ImpactPathway: React.FC<ImpactPathwayProps> = ({ pathway, impacts }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
         <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
         </svg>
         <h3 className="text-lg font-bold">Impact Pathway Engine</h3>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-red-500/20 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-3">
             <div className="w-20 h-20 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-xl">
               <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
               </svg>
             </div>
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Industrial Activity</h4>
               <p className="text-[10px] text-zinc-500 mt-1">Primary production cycle & chemical usage</p>
             </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
             <div className="w-20 h-20 rounded-2xl bg-zinc-950 border border-emerald-500/30 flex items-center justify-center shadow-xl shadow-emerald-500/5">
               <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.337a4 4 0 01-2.574.345l-2.387-.477a2 2 0 01-1.428-1.428l-.477-2.387a6 6 0 01.517-3.86l.337-.675a4 4 0 00.345-2.574l-.477-2.387a2 2 0 00-1.428-1.428l-2.387-.477a6 6 0 00-3.86.517l-.675.337a4 4 0 01-2.574.345l-2.387-.477a2 2 0 01-1.428-1.428" />
               </svg>
             </div>
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Chemical Release</h4>
               <p className="text-[10px] text-zinc-500 mt-1">Secondary metabolites & byproducts</p>
             </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
             <div className="w-20 h-20 rounded-2xl bg-zinc-950 border border-amber-500/30 flex items-center justify-center shadow-xl shadow-amber-500/5">
               <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">Enviro Pathway</h4>
               <p className="text-[10px] text-zinc-500 mt-1">Migration through air, soil, & water</p>
             </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
             <div className="w-20 h-20 rounded-2xl bg-zinc-950 border border-red-500/30 flex items-center justify-center shadow-xl shadow-red-500/5">
               <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               </svg>
             </div>
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-red-400">Total Impact</h4>
               <p className="text-[10px] text-zinc-500 mt-1">Final biological & ecological effects</p>
             </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
            <h5 className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-2">Transport Engine Summary</h5>
            <p className="text-sm text-zinc-400 leading-relaxed italic">
              {pathway || "Analyzing industrial process linkages to environmental media..."}
            </p>
          </div>
          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-3">
             <div>
               <h5 className="text-[10px] uppercase font-bold text-red-400 tracking-wider mb-1">Human Biological Stress</h5>
               <p className="text-xs text-zinc-500">{impacts?.human || "Calculating potential biomarker disruption..."}</p>
             </div>
             <div>
               <h5 className="text-[10px] uppercase font-bold text-amber-400 tracking-wider mb-1">Ecological Resilience Loss</h5>
               <p className="text-xs text-zinc-500">{impacts?.ecosystem || "Evaluating trophic level bioaccumulation rates..."}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPathway;
