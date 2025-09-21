
import React, { useState, useMemo } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { AssessorPanel } from './components/AssessorPanel';
import { Header } from './components/Header';
import { ScoringKeyModal } from './components/ScoringKeyModal';
import { QUESTIONS, SCORING_KEY } from './constants';
import type { QuestionState } from './types';
import { InfoIcon } from './components/icons/InfoIcon';

const App: React.FC = () => {
  const initialQuestionState: QuestionState[] = QUESTIONS.map(q => ({
    id: q.id,
    answer: '',
    scores: [null, null, null],
  }));

  const [questions, setQuestions] = useState<QuestionState[]>(initialQuestionState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnswerChange = (id: string, answer: string) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q => (q.id === id ? { ...q, answer } : q))
    );
  };

  const handleScoreChange = (id: string, assessorIndex: number, score: number | null) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q =>
        q.id === id
          ? {
              ...q,
              scores: q.scores.map((s, i) => (i === assessorIndex ? score : s)),
            }
          : q
      )
    );
  };

  const assessmentData = useMemo(() => {
    return QUESTIONS.map((question, index) => {
      const questionState = questions[index];
      const validScores = questionState.scores.filter(s => s !== null && s >= 0 && s <= 5) as number[];
      const averageScore = validScores.length > 0 ? validScores.reduce((a, b) => a + b, 0) / validScores.length : 0;
      const weightedScore = (averageScore / 5) * question.weighting;

      return {
        id: question.id,
        weighting: question.weighting,
        scores: questionState.scores,
        maxScore: 5,
        weightedScore: weightedScore,
      };
    });
  }, [questions]);
  
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <main className="container mx-auto p-4 lg:p-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-2 text-center">
          Evaluation of AI Tools for Planning
        </h1>
        <p className="text-center text-gray-600 mb-8">Likelihood and Risk of Potential Harm Assessment</p>

        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-6">
            {QUESTIONS.map((q, index) => (
              <QuestionCard
                key={q.id}
                questionData={q}
                answer={questions[index].answer}
                onAnswerChange={(answer) => handleAnswerChange(q.id, answer)}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center text-sm text-brand-secondary hover:text-brand-primary font-medium transition-colors"
                >
                  <InfoIcon className="h-5 w-5 mr-1" />
                  View Scoring Key
                </button>
              </div>
              <AssessorPanel
                assessmentData={assessmentData}
                onScoreChange={handleScoreChange}
              />
            </div>
          </div>
        </div>
      </main>
      <ScoringKeyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        scoringKey={SCORING_KEY}
      />
    </div>
  );
};

export default App;
