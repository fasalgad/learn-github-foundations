import React from 'react';
import { useStudy } from '../../context/StudyContext';
import QuizComponent from '../Quiz/QuizComponent';

export default function PathQuizView() {
  const { activePathId, currentPath } = useStudy();

  if (!activePathId) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
      <QuizComponent
        pathId={activePathId}
        pathTitle={currentPath?.shortName || activePathId}
      />
    </div>
  );
}
