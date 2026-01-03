
import React from 'react';
import { ViewType } from '../App';

interface HeaderProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="px-6 lg:px-10 py-5 flex items-center justify-between border-b border-zinc-900 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">EcoSphere AI</h2>
        </div>

        <div className="hidden lg:flex items-center bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 w-80 group focus-within:border-emerald-500/50 transition-all">
          <svg className="w-4 h-4 text-zinc-600 group-focus-within:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search facilities..." 
            className="bg-transparent border-none outline-none text-sm ml-3 w-full text-zinc-300 placeholder:text-zinc-600"
          />
        </div>
      </div>

      <nav className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => onViewChange('dashboard')}
            className={`text-xs font-bold transition-all border-b-2 pb-1 ${currentView === 'dashboard' ? 'text-emerald-400 border-emerald-400' : 'text-zinc-500 border-transparent hover:text-white'}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => onViewChange('risk-analysis')}
            className={`text-xs font-bold transition-all border-b-2 pb-1 ${currentView === 'risk-analysis' ? 'text-emerald-400 border-emerald-400' : 'text-zinc-500 border-transparent hover:text-white'}`}
          >
            Risk Analysis
          </button>
          <a href="#" className="text-xs font-bold text-zinc-500 hover:text-white transition-colors">Reports</a>
          <a href="#" className="text-xs font-bold text-zinc-500 hover:text-white transition-colors">Settings</a>
        </div>

        <div className="flex items-center gap-5 pl-8 border-l border-zinc-800">
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900/50 rounded-full border border-zinc-800">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">System Active</span>
          </div>
          <button className="relative text-zinc-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#050505]"></span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-800 flex items-center justify-center">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
