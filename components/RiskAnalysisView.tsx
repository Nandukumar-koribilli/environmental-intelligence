
import React from 'react';
import { IndustryData, IntelligenceReport } from '../types';
import MetricCard from './MetricCard';
import RiskChart from './RiskChart';
import AIAnalysisCard from './AIAnalysisCard';
import RiskDrivers from './RiskDrivers';
import MitigationActions from './MitigationActions';
import Sidebar from './Sidebar';

interface RiskAnalysisViewProps {
  selectedIndustry: IndustryData;
  report: IntelligenceReport | null;
  loading: boolean;
  onRunSimulation: () => void;
}

const RiskAnalysisView: React.FC<RiskAnalysisViewProps> = ({ selectedIndustry, report, loading, onRunSimulation }) => {
  return (
    <main className="flex-1 max-w-[1600px] mx-auto w-full p-6 lg:p-10 space-y-8">
      {/* Page Hero Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Environmental Intelligence</span>
              <span className="text-zinc-700">•</span>
              <span className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest">Updated 12 mins ago</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">Environmental Risk Forecast</h1>
            <p className="text-zinc-500 mt-2 text-sm">
              Site: <span className="text-zinc-200">Alpha Facility - Sector 4</span> | Predictive Analysis & Mitigation Planning
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg text-sm font-medium hover:border-zinc-700 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Export Report
            </button>
            <button 
              onClick={onRunSimulation}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-lg text-sm transition-all disabled:opacity-50"
            >
              {loading ? 'Processing...' : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>
                  Run Simulation
                </>
              )}
            </button>
          </div>
        </div>

        {/* Top Metric Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard 
            type="risk"
            label="OVERALL RISK LEVEL" 
            value="MEDIUM" 
            trend="+2%"
            color="amber"
            score={45}
          />
          <MetricCard 
            type="concern"
            label="PRIMARY CONCERN" 
            value="Groundwater Leaching" 
            status="Stable but monitoring"
            color="emerald"
          />
          <MetricCard 
            type="confidence"
            label="MODEL CONFIDENCE" 
            value="High Reliability" 
            percent={94}
            subText="Based on 12k data points"
            color="emerald"
          />
        </div>
      </div>

      {/* Middle Visualization Row */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <RiskChart />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <AIAnalysisCard report={report} loading={loading} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <RiskDrivers />
          <MitigationActions industry={selectedIndustry} recommendations={report?.recommendations || []} />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default RiskAnalysisView;
