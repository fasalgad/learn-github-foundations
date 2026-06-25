import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

export default function NavigationButtons() {
  const { hasPrev, hasNext, navigatePrev, navigateNext } = useStudy();

  return (
    <div className="flex justify-between items-center gap-4">
      <button
        onClick={navigatePrev}
        disabled={!hasPrev}
        className={`
          flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm
          transition-all duration-150
          ${hasPrev
            ? 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm'
            : 'opacity-30 cursor-not-allowed bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400'
          }
        `}
      >
        <ChevronLeft size={18} />
        Anterior
      </button>

      <button
        onClick={navigateNext}
        disabled={!hasNext}
        className={`
          flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm
          transition-all duration-150
          ${hasNext
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
            : 'opacity-30 cursor-not-allowed bg-gray-200 dark:bg-gray-700 text-gray-400'
          }
        `}
      >
        Siguiente
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
