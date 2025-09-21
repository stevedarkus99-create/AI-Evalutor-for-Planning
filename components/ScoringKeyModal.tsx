
import React from 'react';
import type { ScoringLevel } from '../types';

interface ScoringKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  scoringKey: ScoringLevel[];
}

export const ScoringKeyModal: React.FC<ScoringKeyModalProps> = ({ isOpen, onClose, scoringKey }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-brand-primary">Scoring Key</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {scoringKey.map((level) => (
              <div key={level.score} className="p-4 border rounded-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-brand-secondary">{level.level}</h3>
                  <span className="text-xl font-bold text-brand-primary bg-brand-light px-3 py-1 rounded-full">{level.score}</span>
                </div>
                <p className="text-gray-600 mt-2">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
