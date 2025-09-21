
import React, { useState } from 'react';
import type { Question } from '../types';
import { generateAnswer } from '../services/geminiService';
import { SparklesIcon } from './icons/SparklesIcon';

interface QuestionCardProps {
  questionData: Question;
  answer: string;
  onAnswerChange: (answer: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ questionData, answer, onAnswerChange }) => {
  const [isLoading, setIsLoading] = useState(false);
  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;

  const handleGenerateAnswer = async () => {
    setIsLoading(true);
    try {
      const generatedText = await generateAnswer(questionData);
      onAnswerChange(generatedText);
    } catch (error) {
      console.error("Failed to generate answer:", error);
      // Optionally, set an error message in the state to display to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-brand-primary">{questionData.id}. {questionData.title}</h3>
          {questionData.description && <p className="text-gray-600 mt-1">{questionData.description}</p>}
        </div>
        <div className="text-right ml-4 flex-shrink-0">
          <span className="text-sm font-semibold text-gray-700">Weighting: {questionData.weighting}%</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-brand-light p-4 rounded-md">
          <h4 className="font-semibold text-brand-secondary mb-2">Key points</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {questionData.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-gray-800">Answer</h4>
            <button
              onClick={handleGenerateAnswer}
              disabled={isLoading}
              className="flex items-center px-3 py-1.5 text-xs font-medium text-white bg-brand-secondary rounded-md hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
            >
              <SparklesIcon className={`h-4 w-4 mr-1.5 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Generating...' : 'Generate with AI'}
            </button>
          </div>
          <textarea
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            rows={10}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-secondary focus:border-brand-secondary transition"
            placeholder="Provide your detailed answer here..."
          />
          <p className={`text-sm text-right mt-1 ${wordCount > questionData.wordLimit ? 'text-red-600 font-bold' : 'text-gray-500'}`}>
            {wordCount} / {questionData.wordLimit} words
          </p>
        </div>
      </div>
    </div>
  );
};
