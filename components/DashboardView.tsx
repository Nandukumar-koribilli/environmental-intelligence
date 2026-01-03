
import React from 'react';
import { IndustryData, IntelligenceReport } from '../types';
import { INDUSTRIES } from '../constants';
import ImpactMetricCard from './ImpactMetricCard';
import RiskTimeline from './RiskTimeline';
import RecommendedActions from './RecommendedActions';
import AIAnalysisCard from './AIAnalysisCard';

interface DashboardViewProps {
  selectedIndustry: IndustryData;
  setSelectedIndustry: (industry: IndustryData) => void;
  report: IntelligenceReport | null;
  loading: boolean;
}

const DashboardView: React.FC<DashboardViewProps> = ({ selectedIndustry, setSelectedIndustry, report, loading }) => {
  return (
    <main className="flex-1 max-w-[1400px] mx-auto w-full p-8 space-y-8">
      {/* Title Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Impact Overview</h1>
          <p className="text-zinc-500 mt-1 text-lg">Making industrial environmental impact visible, understandable, and actionable.</p>
        </div>
        <div className="flex gap-2">
           <div className="relative group">
              <select 
                className="appearance-none bg-[#121212] border border-zinc-800 rounded-lg pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer hover:border-zinc-700"
                value={selectedIndustry.id}
                onChange={(e) => setSelectedIndustry(INDUSTRIES.find(i => i.id === e.target.value) || INDUSTRIES[0])}
              >
                {INDUSTRIES.map(i => (
                  <option key={i.id} value={i.id}>{i.name}</option>
                ))}
              </select>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
           </div>
           <button className="p-2.5 bg-[#121212] border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
              <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
           </button>
        </div>
      </div>

      {/* Top Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <ImpactMetricCard 
          label="Human Health" 
          risk="High Risk" 
          color="red"
          description="Elevated particulate matter detected near residential zones."
          score={78}
          icon="shield"
        />
        <ImpactMetricCard 
          label="Ecosystems" 
          risk="Medium Risk" 
          color="amber"
          description="Local biodiversity index shows slight deviation from baseline."
          score={45}
          icon="paw"
        />
        <ImpactMetricCard 
          label="Environment" 
          risk="Low Risk" 
          color="emerald"
          description="Water and soil quality metrics are within optimal ranges."
          score={12}
          icon="drop"
        />
        <ImpactMetricCard 
          label="Socio-Economic" 
          risk="Stable" 
          color="blue"
          description="Community engagement positive; employment steady."
          score={85}
          icon="users"
          isTrend
        />
      </div>

      {/* Middle Content */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <RiskTimeline report={report} />
          <AIAnalysisCard report={report} loading={loading} />
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <RecommendedActions industry={selectedIndustry} recommendations={report?.recommendations || []} />
          
          <div className="bg-[#0c120e] border border-emerald-900/30 rounded-2xl p-6 flex flex-col justify-between h-[180px] relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg className="w-24 h-24 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
             </div>
             <div>
                <h5 className="text-[11px] font-bold text-emerald-500 uppercase tracking-[0.2em]">Compliance Score</h5>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-5xl font-bold">94</span>
                  <span className="text-zinc-500 text-xl font-medium">/100</span>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-950">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                <p className="text-[10px] text-zinc-500 leading-tight">
                  For decision support only. Always verify with onsite engineering teams.
                </p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardView;
