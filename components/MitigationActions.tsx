
import React, { useState } from 'react';
import { IndustryData } from '../types';

interface MitigationActionsProps {
  industry: IndustryData;
  recommendations: string[];
}

const MitigationActions: React.FC<MitigationActionsProps> = ({ industry, recommendations }) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    'Review monthly effluent report': true
  });

  const displayList = [
    { text: 'Optimize filtration cycle duration', sub: 'Reduce cycle by 4 hours to prevent buildup.' },
    { text: 'Initiate secondary soil sampling', sub: 'Verify edge perimeter saturation levels.' },
    { text: 'Review monthly effluent report', sub: 'Completed by J. Doe today.' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
         <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
         </svg>
         <h3 className="text-sm font-bold uppercase tracking-widest">Suggested Mitigation</h3>
      </div>

      <div className="bg-[#121212] border border-zinc-800 rounded-lg p-6 space-y-6">
        {displayList.map((action, idx) => (
          <div 
            key={idx} 
            className="flex items-start gap-4 cursor-pointer group"
            onClick={() => setChecked(prev => ({...prev, [action.text]: !prev[action.text]}))}
          >
            <div className={`mt-0.5 w-4 h-4 rounded border transition-all flex items-center justify-center ${checked[action.text] ? 'bg-emerald-500 border-emerald-500' : 'border-zinc-700'}`}>
              {checked[action.text] && <svg className="w-3 h-3 text-[#050505]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"/></svg>}
            </div>
            <div>
              <h4 className={`text-xs font-bold transition-all ${checked[action.text] ? 'text-zinc-500 line-through' : 'text-zinc-100'}`}>
                {action.text}
              </h4>
              <p className="text-[10px] text-zinc-600 mt-1 font-medium">{action.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MitigationActions;
