import React from 'react';
import {
  Trophy, Target, BookOpen, CheckCircle2, Clock,
  TrendingUp, Award, BarChart2, GraduationCap,
} from 'lucide-react';
import { useStudy } from '../../context/StudyContext';
import { getScoreColorClass } from '../../utils/quizUtils';

function ProgressBar({ value, max, colorClass = 'bg-blue-500' }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClass} rounded-full transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 w-10 text-right">{pct}%</span>
    </div>
  );
}

function ScoreBadge({ score }) {
  if (!score) return <span className="text-xs text-gray-400">Sin intentos</span>;
  const colorClass = getScoreColorClass(score.pct);
  return (
    <span className={`text-sm font-bold ${colorClass}`}>
      {score.pct}% ({score.correct}/{score.total})
    </span>
  );
}

function ModuleCard({ module, onNavigate }) {
  const {
    getModuleProgress, progress, navigateToUnit,
  } = useStudy();

  const pct = Math.round(getModuleProgress(module.units) * 100);
  const bestScore = progress.moduleQuizScores[module.id]?.reduce(
    (b, s) => (!b || s.pct > b.pct ? s : b), null
  );
  const realUnits = module.units.filter(u => u.type !== 'quiz');
  const completedUnits = realUnits.filter(u => progress.completedUnits.has(u.id)).length;

  return (
    <div
      onClick={() => onNavigate(module)}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 cursor-pointer hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-150 hover:shadow-sm"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0 mr-3">
          <h3 className="font-semibold text-sm text-gray-900 dark:text-white leading-tight truncate">
            {module.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {completedUnits}/{realUnits.length} unidades
          </p>
        </div>
        {pct === 100 ? (
          <CheckCircle2 size={18} className="text-green-500 shrink-0" />
        ) : (
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 shrink-0">{pct}%</span>
        )}
      </div>
      <ProgressBar value={completedUnits} max={realUnits.length}
        colorClass={pct === 100 ? 'bg-green-500' : 'bg-blue-500'} />
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-400">Evaluación:</span>
        <ScoreBadge score={bestScore} />
      </div>
    </div>
  );
}

function PathCard({ path }) {
  const {
    getPathProgress, progress, navigateToPathQuiz,
    navigateToUnit,
  } = useStudy();

  const pct = Math.round(getPathProgress(path) * 100);
  const bestPathScore = progress.pathQuizScores[path.id]?.reduce(
    (b, s) => (!b || s.pct > b.pct ? s : b), null
  );
  const allUnits = path.modules.flatMap(m => m.units.filter(u => u.type !== 'quiz'));
  const completedUnits = allUnits.filter(u => progress.completedUnits.has(u.id)).length;

  const handleModuleNav = (module) => {
    const firstUnit = module.units[0];
    if (firstUnit) navigateToUnit(path.id, module.id, firstUnit.id);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-6">
      {/* Path header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h2 className="font-bold text-base text-gray-900 dark:text-white">{path.name}</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {path.modules.length} módulos · {completedUnits}/{allUnits.length} unidades completadas
          </p>
        </div>
        <div className={`text-xl font-black ${pct === 100 ? 'text-green-500' : 'text-blue-600 dark:text-blue-400'}`}>
          {pct}%
        </div>
      </div>

      <ProgressBar value={completedUnits} max={allUnits.length}
        colorClass={pct === 100 ? 'bg-green-500' : 'bg-blue-500'} />

      {/* Modules grid */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {path.modules.map(mod => (
          <ModuleCard key={mod.id} module={mod} onNavigate={handleModuleNav} />
        ))}
      </div>

      {/* Path evaluation */}
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target size={16} className="text-blue-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Evaluación del Path</span>
        </div>
        <div className="flex items-center gap-3">
          <ScoreBadge score={bestPathScore} />
          <button
            onClick={() => navigateToPathQuiz(path.id)}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors"
          >
            {bestPathScore ? 'Repetir' : 'Iniciar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const {
    studyData, getCourseProgress, progress,
    navigateToFinalQuiz,
  } = useStudy();

  if (!studyData) return null;

  const coursePct = Math.round(getCourseProgress(studyData.paths) * 100);
  const allUnits = studyData.paths.flatMap(p => p.modules.flatMap(m => m.units.filter(u => u.type !== 'quiz')));
  const completedCount = allUnits.filter(u => progress.completedUnits.has(u.id)).length;
  const totalModules = studyData.paths.flatMap(p => p.modules).length;
  const completedModules = studyData.paths.flatMap(p => p.modules).filter(m => {
    const realUnits = m.units.filter(u => u.type !== 'quiz');
    return realUnits.length > 0 && realUnits.every(u => progress.completedUnits.has(u.id));
  }).length;

  const finalScore = progress.finalQuizScore;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap size={24} />
              <h1 className="text-xl font-bold">GitHub Foundations Certification</h1>
            </div>
            <p className="text-blue-100 text-sm">Tu progreso en la guía de estudio</p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-4xl font-black">{coursePct}%</div>
            <div className="text-blue-200 text-xs">completado</div>
          </div>
        </div>
        <div className="mt-4 h-3 bg-blue-800/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-700"
            style={{ width: `${coursePct}%` }}
          />
        </div>
        <div className="mt-2 flex gap-6 text-sm text-blue-100">
          <span>{completedCount}/{allUnits.length} unidades</span>
          <span>{completedModules}/{totalModules} módulos</span>
          <span>{studyData.paths.length} paths</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { icon: BookOpen, label: 'Unidades', value: `${completedCount}/${allUnits.length}`, color: 'text-blue-500' },
          { icon: Award, label: 'Módulos', value: `${completedModules}/${totalModules}`, color: 'text-purple-500' },
          { icon: BarChart2, label: 'Evaluaciones', value: Object.values(progress.moduleQuizScores).filter(s => s?.length > 0).length + '/' + totalModules, color: 'text-orange-500' },
          { icon: Trophy, label: 'Examen Final', value: finalScore ? `${finalScore.pct}%` : 'Pendiente', color: finalScore ? getScoreColorClass(finalScore.pct) : 'text-gray-400' },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center">
            <Icon size={20} className={`${color} mx-auto mb-1`} />
            <div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
          </div>
        ))}
      </div>

      {/* Per-path progress */}
      {studyData.paths.map(path => (
        <PathCard key={path.id} path={path} />
      ))}

      {/* Final Exam */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <div className="flex items-center gap-3 mb-3">
          <Trophy size={22} className="text-yellow-500" />
          <div>
            <h2 className="font-bold text-base text-gray-900 dark:text-white">Evaluación Final del Curso</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">30 preguntas · Pool completo de todos los módulos</p>
          </div>
        </div>
        {finalScore ? (
          <div className="flex items-center justify-between">
            <div>
              <span className={`text-2xl font-black ${getScoreColorClass(finalScore.pct)}`}>{finalScore.pct}%</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({finalScore.correct}/{finalScore.total} correctas)</span>
              <p className="text-xs text-gray-400 mt-0.5">{new Date(finalScore.date).toLocaleDateString('es', { dateStyle: 'medium' })}</p>
            </div>
            <button
              onClick={navigateToFinalQuiz}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
            >
              Repetir examen
            </button>
          </div>
        ) : (
          <button
            onClick={navigateToFinalQuiz}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-bold text-sm transition-opacity"
          >
            🎓 Iniciar Evaluación Final
          </button>
        )}
      </div>
    </div>
  );
}
