
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">Early Warning Indicators</h3>
        <div className="space-y-3">
          <div className="p-4 bg-[#1a140a] border border-amber-900/30 rounded-lg flex items-center gap-4">
            <div className="bg-amber-500/10 p-2 rounded">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-amber-400">Persistent Risk Detected</h4>
              <p className="text-[10px] text-zinc-500">Chemical residue &gt; 5yrs</p>
            </div>
          </div>

          <div className="p-4 bg-[#1a0a0a] border border-red-900/30 rounded-lg flex items-center gap-4">
            <div className="bg-red-500/10 p-2 rounded">
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-red-400">Long-Term Impact Likely</h4>
              <p className="text-[10px] text-zinc-500">Irreversible &gt; 2040 trajectory</p>
            </div>
          </div>

          <div className="p-4 bg-[#0a1210] border border-zinc-800 rounded-lg flex items-center gap-4">
            <div className="bg-zinc-800 p-2 rounded">
              <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.337a4 4 0 01-2.574.345l-2.387-.477a2 2 0 01-1.428-1.428l-.477-2.387a6 6 0 01.517-3.86l.337-.675a4 4 0 00.345-2.574l-.477-2.387a2 2 0 00-1.428-1.428l-2.387-.477a6 6 0 00-3.86.517l-.675.337a4 4 0 01-2.574.345l-2.387-.477a2 2 0 01-1.428-1.428" /></svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-500">Bioaccumulation</h4>
              <p className="text-[10px] text-zinc-600">Currently within safe limits</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#121212] border border-zinc-800 rounded-xl overflow-hidden relative group">
        <div className="h-40 bg-[#1a1a1a] relative">
          <img
            src="https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/26.1025,44.4268,12/400x400?access_token=pk.eyJ1IjoiZGVtbyIsImEiOiJjbTF2ZXZzeG0wMGJnMmxzZ3RqcXJ4cWRpIn0.test"
            alt="Site Map"
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981] animate-pulse"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            <h4 className="text-xs font-bold text-zinc-100">Sector 4 Map View</h4>
          </div>
          <p className="text-[10px] text-zinc-600 mt-1 pl-6 uppercase tracking-widest font-bold">2 active sensors</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
