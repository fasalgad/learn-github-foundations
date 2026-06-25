import React from 'react';
import { Sun, Moon, Menu, X, GraduationCap, BarChart2 } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

export default function Header({ dark, toggleTheme }) {
  const {
    sidebarOpen, setSidebarOpen,
    studyData, getCourseProgress, navigateToDashboard,
  } = useStudy();

  const pct = studyData ? Math.round(getCourseProgress(studyData.paths) * 100) : 0;

  return (
    <header className="h-14 flex items-center gap-3 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shrink-0 z-20">
      {/* Hamburger */}
      <button
        onClick={() => setSidebarOpen((o) => !o)}
        className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Title (mobile only - hidden on md+) */}
      <button
        onClick={navigateToDashboard}
        className="flex items-center gap-1.5 md:hidden hover:opacity-80"
      >
        <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
        <span className="font-bold text-sm text-gray-900 dark:text-white">GitHub Foundations</span>
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Progress bar */}
      {studyData && (
        <div className="hidden sm:flex items-center gap-2">
          <BarChart2 size={15} className="text-gray-400" />
          <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 min-w-[3rem]">
            {pct}% completado
          </span>
        </div>
      )}

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
        aria-label="Toggle theme"
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}
