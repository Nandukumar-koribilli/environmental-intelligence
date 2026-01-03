
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import RiskAnalysisView from './components/RiskAnalysisView';
import { INDUSTRIES } from './constants';
import { generateEnvironmentalIntelligence } from './services/geminiService';
import { IntelligenceReport, IndustryData } from './types';

export type ViewType = 'dashboard' | 'risk-analysis';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('risk-analysis');
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryData>(INDUSTRIES[0]);
  const [report, setReport] = useState<IntelligenceReport | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchIntelligence = async (industry: IndustryData) => {
    setLoading(true);
    const data = await generateEnvironmentalIntelligence(industry.name, industry.likelyPollutants);
    setReport(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchIntelligence(selectedIndustry);
  }, [selectedIndustry]);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      {currentView === 'dashboard' ? (
        <DashboardView 
          selectedIndustry={selectedIndustry} 
          setSelectedIndustry={setSelectedIndustry}
          report={report}
          loading={loading}
        />
      ) : (
        <RiskAnalysisView 
          selectedIndustry={selectedIndustry} 
          report={report} 
          loading={loading} 
          onRunSimulation={() => fetchIntelligence(selectedIndustry)}
        />
      )}

      <footer className="border-t border-zinc-900 bg-[#050505] py-6 px-10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 font-medium">
          <p className="max-w-xl">
            <span className="text-zinc-400 font-bold uppercase mr-2">Ethics Disclaimer:</span>
            AI predictions are probabilistic estimates based on available historical data and should be verified by certified environmental engineers before implementation. This tool is for decision support only.
          </p>
          <div className="flex gap-6 uppercase tracking-widest font-mono">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
