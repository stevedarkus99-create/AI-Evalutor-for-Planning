
export interface Question {
  id: string;
  title: string;
  description?: string;
  wordLimit: number;
  weighting: number;
  keyPoints: string[];
}

export interface QuestionState {
  id: string;
  answer: string;
  scores: (number | null)[];
}

export interface AssessmentDataItem {
  id: string;
  weighting: number;
  scores: (number | null)[];
  maxScore: number;
  weightedScore: number;
}

export interface ScoringLevel {
  level: string;
  description: string;
  score: number;
}
