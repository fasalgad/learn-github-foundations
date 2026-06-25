import React, { useState } from 'react';
import {
  BookOpen, ChevronDown, ChevronRight, CheckCircle2,
  Circle, ClipboardList, Code2, FileText, Award, Star,
  BarChart2, Target, Trophy, GraduationCap,
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

const TYPE_ICONS = {
  lesson: FileText,
  exercise: Code2,
  'knowledge-check': Award,
  summary: Star,
  quiz: ClipboardList,
  'path-quiz': Target,
  'final-quiz': Trophy,
};

const TYPE_COLORS = {
  lesson: 'text-blue-500',
  exercise: 'text-orange-500',
  'knowledge-check': 'text-purple-500',
  summary: 'text-yellow-500',
  quiz: 'text-green-500',
};

function UnitItem({ unit, moduleId, pathId }) {
  const {
    activeUnitId, navigateToUnit, isUnitComplete, progress,
  } = useStudy();

  const isActive = activeUnitId === unit.id;
  const done = unit.type !== 'quiz' ? isUnitComplete(unit.id) : false;
  const quizDone = unit.type === 'quiz'
    ? (progress.moduleQuizScores[moduleId]?.length > 0)
    : false;

  const Icon = TYPE_ICONS[unit.type] || FileText;

  return (
    <button
      onClick={() => navigateToUnit(pathId, moduleId, unit.id)}
      className={`
        w-full text-left flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm
        transition-colors duration-150 group
        ${isActive
          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-medium'
          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
        }
      `}
    >
      <span className="shrink-0">
        {done || quizDone ? (
          <CheckCircle2 size={14} className="text-green-500" />
        ) : (
          <Icon size={14} className={isActive ? '' : (TYPE_COLORS[unit.type] || 'text-gray-400')} />
        )}
      </span>
      <span className="truncate text-xs">{unit.title}</span>
    </button>
  );
}

function ModuleSection({ module, pathId }) {
  const { activeModuleId, getModuleProgress } = useStudy();
  const isActiveModule = activeModuleId === module.id;
  const [open, setOpen] = useState(isActiveModule);
  const pct = Math.round(getModuleProgress(module.units) * 100);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`
          w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm font-medium
          transition-colors duration-150
          hover:bg-gray-100 dark:hover:bg-gray-800
          text-gray-800 dark:text-gray-200
        `}
      >
        {open ? <ChevronDown size={14} className="shrink-0 text-gray-400" /> : <ChevronRight size={14} className="shrink-0 text-gray-400" />}
        <BookOpen size={14} className="shrink-0 text-blue-400" />
        <span className="truncate text-xs flex-1 text-left">{module.name}</span>
        {pct > 0 && (
          <span className={`text-xs font-bold shrink-0 ${pct === 100 ? 'text-green-500' : 'text-blue-500'}`}>
            {pct}%
          </span>
        )}
      </button>

      {open && (
        <div className="ml-4 mt-0.5 space-y-0.5 border-l border-gray-200 dark:border-gray-700 pl-2">
          {module.units.map((unit) => (
            <UnitItem key={unit.id} unit={unit} moduleId={module.id} pathId={pathId} />
          ))}
        </div>
      )}
    </div>
  );
}

function PathSection({ path }) {
  const { activePathId, navigateToPathQuiz, getPathProgress, progress } = useStudy();
  const isActivePath = activePathId === path.id;
  const [open, setOpen] = useState(isActivePath);
  const pct = Math.round(getPathProgress(path) * 100);
  const pathQuizDone = progress.pathQuizScores[path.id]?.length > 0;

  return (
    <div className="mb-3">
      {/* Path Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`
          w-full flex items-center gap-2 px-2 py-2.5 rounded-xl text-sm font-bold
          transition-all duration-150
          bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
          text-gray-900 dark:text-gray-100
        `}
      >
        {open ? <ChevronDown size={15} className="shrink-0" /> : <ChevronRight size={15} className="shrink-0" />}
        <span className="flex-1 text-left truncate text-xs">{path.name}</span>
        {pct > 0 && (
          <span className={`text-xs font-bold shrink-0 ${pct === 100 ? 'text-green-500' : 'text-blue-500'}`}>
            {pct}%
          </span>
        )}
      </button>

      {open && (
        <div className="mt-1 space-y-0.5">
          {path.modules.map((mod) => (
            <ModuleSection key={mod.id} module={mod} pathId={path.id} />
          ))}
          {/* Path Quiz */}
          <button
            onClick={() => navigateToPathQuiz(path.id)}
            className={`
              w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm
              transition-colors duration-150 mt-1
              ${pathQuizDone
                ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                : 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
              }
              hover:opacity-80 font-medium
            `}
          >
            {pathQuizDone
              ? <CheckCircle2 size={14} className="text-green-500 shrink-0" />
              : <Target size={14} className="text-blue-500 shrink-0" />
            }
            <span className="text-xs">Evaluación del Path</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const { studyData, navigateToDashboard, activeView, navigateToFinalQuiz, progress } = useStudy();

  if (!studyData) return null;

  const finalDone = !!progress.finalQuizScore;

  return (
    <aside className="h-full flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      {/* Logo / Title */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={navigateToDashboard}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <GraduationCap size={22} className="text-blue-600 dark:text-blue-400 shrink-0" />
          <div>
            <div className="font-bold text-sm text-gray-900 dark:text-white leading-tight">GitHub Foundations</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Certification Study</div>
          </div>
        </button>
      </div>

      {/* Dashboard link */}
      <div className="px-3 pt-3 pb-1">
        <button
          onClick={navigateToDashboard}
          className={`
            w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
            transition-colors duration-150
            ${activeView === 'dashboard'
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
            }
          `}
        >
          <BarChart2 size={16} className="shrink-0" />
          <span>Dashboard de Progreso</span>
        </button>
      </div>

      {/* Paths & Modules - scrollable */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
        {studyData.paths.map((path) => (
          <PathSection key={path.id} path={path} />
        ))}
      </div>

      {/* Final Quiz */}
      <div className="px-3 pb-3 pt-1 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={navigateToFinalQuiz}
          className={`
            w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold
            transition-colors duration-150
            ${finalDone
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90'
            }
          `}
        >
          {finalDone ? <CheckCircle2 size={16} className="shrink-0" /> : <Trophy size={16} className="shrink-0" />}
          <span>Evaluación Final del Curso</span>
        </button>
      </div>
    </aside>
  );
}
