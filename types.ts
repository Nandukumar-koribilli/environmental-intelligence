
export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface Chemical {
  name: string;
  persistence: RiskLevel;
  description: string;
}

export interface IndustryData {
  id: string;
  name: string;
  likelyPollutants: string[];
  pathwayDescription?: string;
  mitigationSteps: string[];
}

export interface IntelligenceReport {
  summary: string;
  pathway: string;
  impacts: {
    human: string;
    ecosystem: string;
  };
  recommendations: string[];
}
