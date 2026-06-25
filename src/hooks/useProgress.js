import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'github-cert-progress-v1';

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    // completedUnits stored as array, restore to Set
    data.completedUnits = new Set(data.completedUnits || []);
    return data;
  } catch {
    return null;
  }
}

function saveToStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...state,
      completedUnits: Array.from(state.completedUnits),
    }));
  } catch {
    // Storage might be full or disabled
  }
}

const initialState = () => ({
  completedUnits: new Set(),
  moduleQuizScores: {},   // { 'module-01': [{ score, total, pct, date }] }
  pathQuizScores: {},     // { 'path-1': [{ score, total, pct, date }] }
  finalQuizScore: null,   // { score, total, pct, date }
});

export function useProgress() {
  const [progress, setProgress] = useState(() => loadFromStorage() || initialState());

  // Persist on every change
  useEffect(() => {
    saveToStorage(progress);
  }, [progress]);

  const markUnitComplete = useCallback((unitId) => {
    setProgress((prev) => {
      const next = new Set(prev.completedUnits);
      next.add(unitId);
      return { ...prev, completedUnits: next };
    });
  }, []);

  const isUnitComplete = useCallback((unitId) => {
    return progress.completedUnits.has(unitId);
  }, [progress.completedUnits]);

  const saveModuleQuiz = useCallback((moduleId, result) => {
    setProgress((prev) => {
      const existing = prev.moduleQuizScores[moduleId] || [];
      return {
        ...prev,
        moduleQuizScores: {
          ...prev.moduleQuizScores,
          [moduleId]: [...existing, { ...result, date: new Date().toISOString() }],
        },
      };
    });
  }, []);

  const savePathQuiz = useCallback((pathId, result) => {
    setProgress((prev) => {
      const existing = prev.pathQuizScores[pathId] || [];
      return {
        ...prev,
        pathQuizScores: {
          ...prev.pathQuizScores,
          [pathId]: [...existing, { ...result, date: new Date().toISOString() }],
        },
      };
    });
  }, []);

  const saveFinalQuiz = useCallback((result) => {
    setProgress((prev) => ({
      ...prev,
      finalQuizScore: { ...result, date: new Date().toISOString() },
    }));
  }, []);

  const getBestScore = useCallback((scores) => {
    if (!scores || scores.length === 0) return null;
    return scores.reduce((best, s) => (!best || s.pct > best.pct ? s : best), null);
  }, []);

  /** Progress fraction for a module (0–1) */
  const getModuleProgress = useCallback((moduleUnits) => {
    if (!moduleUnits.length) return 0;
    const realUnits = moduleUnits.filter(u => u.type !== 'quiz');
    if (!realUnits.length) return 0;
    const done = realUnits.filter(u => progress.completedUnits.has(u.id)).length;
    return done / realUnits.length;
  }, [progress.completedUnits]);

  /** Progress fraction for a path (0–1) */
  const getPathProgress = useCallback((path) => {
    const allUnits = path.modules.flatMap(m => m.units.filter(u => u.type !== 'quiz'));
    if (!allUnits.length) return 0;
    const done = allUnits.filter(u => progress.completedUnits.has(u.id)).length;
    return done / allUnits.length;
  }, [progress.completedUnits]);

  /** Overall course progress fraction (0–1) */
  const getCourseProgress = useCallback((paths) => {
    const allUnits = paths.flatMap(p => p.modules.flatMap(m => m.units.filter(u => u.type !== 'quiz')));
    if (!allUnits.length) return 0;
    const done = allUnits.filter(u => progress.completedUnits.has(u.id)).length;
    return done / allUnits.length;
  }, [progress.completedUnits]);

  const resetProgress = useCallback(() => {
    setProgress(initialState());
  }, []);

  return {
    progress,
    markUnitComplete,
    isUnitComplete,
    saveModuleQuiz,
    savePathQuiz,
    saveFinalQuiz,
    getBestScore,
    getModuleProgress,
    getPathProgress,
    getCourseProgress,
    resetProgress,
  };
}
