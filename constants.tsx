
import React from 'react';
import { IndustryData } from './types';

export const INDUSTRIES: IndustryData[] = [
  {
    id: 'textile',
    name: 'Textile Industry',
    likelyPollutants: ['PFAS (Forever Chemicals)', 'Synthetic Dyes', 'Chromium VI'],
    mitigationSteps: [
      'Optimize filtration cycle duration',
      'Review monthly effluent report',
      'Switch to bio-based dye alternatives',
      'Install secondary chemical precipitation units'
    ]
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical Industry',
    likelyPollutants: ['VOCs (Benzene, Toluene)', 'Sulfur Compounds', 'Heavy Metals'],
    mitigationSteps: [
      'Upgrade vapor recovery systems',
      'Implement leak detection and repair (LDAR)',
      'Review storage tank seals',
      'Optimize catalyst efficiency'
    ]
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical Industry',
    likelyPollutants: ['Solvent Residues', 'Antibiotic Fragments', 'Active API Traces'],
    mitigationSteps: [
      'Advance oxidation processing for wastewater',
      'Improve solvent distillation efficiency',
      'Implement stricter batch clean-out protocols',
      'Quarterly soil core sampling'
    ]
  },
  {
    id: 'manufacturing',
    name: 'General Manufacturing',
    likelyPollutants: ['Particulate Matter (PM2.5)', 'Industrial Lubricants', 'Nitrogen Oxides'],
    mitigationSteps: [
      'Schedule electrostatic precipitator maintenance',
      'Switch to low-VOC lubricants',
      'Optimize boiler combustion cycles',
      'Install perimeter air quality monitors'
    ]
  }
];

export const CHART_DATA = [
  { year: '2024', current: 40, projected: 40 },
  { year: '2026', current: 42, projected: 45 },
  { year: '2028', current: 45, projected: 55 },
  { year: '2030', projected: 70 },
  { year: '2032', projected: 85 },
  { year: '2034', projected: 92 },
  { year: '2036', projected: 100 },
];
