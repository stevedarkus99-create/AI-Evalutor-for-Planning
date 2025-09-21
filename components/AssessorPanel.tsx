
import React from 'react';
import type { AssessmentDataItem } from '../types';

interface AssessorPanelProps {
  assessmentData: AssessmentDataItem[];
  onScoreChange: (questionId: string, assessorIndex: number, score: number | null) => void;
}

const getRiskProfile = (totalWeight: number) => {
  if (totalWeight <= 20) return { level: 'Very low', color: 'bg-green-100 text-green-800', textColor: 'text-green-600' };
  if (totalWeight <= 40) return { level: 'Low risk', color: 'bg-lime-100 text-lime-800', textColor: 'text-lime-600' };
  if (totalWeight <= 60) return { level: 'Mid-range risk', color: 'bg-yellow-100 text-yellow-800', textColor: 'text-yellow-600' };
  if (totalWeight <= 80) return { level: 'High risk', color: 'bg-orange-100 text-orange-800', textColor: 'text-orange-600' };
  return { level: 'Very high risk', color: 'bg-red-100 text-red-800', textColor: 'text-red-600' };
};

export const AssessorPanel: React.FC<AssessorPanelProps> = ({ assessmentData, onScoreChange }) => {
  const totalWeightedScore = assessmentData.reduce((sum, item) => sum + item.weightedScore, 0);
  const riskProfile = getRiskProfile(totalWeightedScore);

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-brand-primary mb-4 text-center">Assessor Scoring</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 font-semibold text-left">Q#</th>
                <th className="p-2 font-semibold text-center">A1</th>
                <th className="p-2 font-semibold text-center">A2</th>
                <th className="p-2 font-semibold text-center">A3</th>
                <th className="p-2 font-semibold text-right">Weighted Score</th>
              </tr>
            </thead>
            <tbody>
              {assessmentData.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="p-2 font-bold">{item.id}</td>
                  {[0, 1, 2].map(assessorIndex => (
                    <td key={assessorIndex} className="p-1">
                      <input
                        type="number"
                        min="0"
                        max="5"
                        value={item.scores[assessorIndex] ?? ''}
                        onChange={e => {
                          const val = e.target.value;
                          onScoreChange(item.id, assessorIndex, val === '' ? null : Math.max(0, Math.min(5, parseInt(val, 10))));
                        }}
                        className="w-12 text-center p-1 border rounded-md focus:ring-brand-secondary focus:border-brand-secondary"
                      />
                    </td>
                  ))}
                  <td className="p-2 text-right font-medium">{item.weightedScore.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-bold bg-gray-100">
                <td colSpan={4} className="p-2 text-right">Total:</td>
                <td className="p-2 text-right text-brand-primary">{totalWeightedScore.toFixed(2)}%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-bold text-brand-primary mb-3">Overall Risk Weight</h3>
        <div className={`inline-block px-6 py-3 rounded-lg ${riskProfile.color}`}>
          <div className="text-3xl font-bold">{totalWeightedScore.toFixed(2)}</div>
          <div className={`mt-1 text-lg font-semibold ${riskProfile.textColor}`}>{riskProfile.level}</div>
        </div>
        <p className="text-xs text-gray-500 mt-4">This score indicates the potential risk based on the provided answers. High scores suggest lower risk.</p>
      </div>
    </div>
  );
};
