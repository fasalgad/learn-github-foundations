import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { parseMarkdown, buildNavigationList } from '../utils/markdownParser';
import { useProgress } from '../hooks/useProgress';

const StudyContext = createContext(null);

export function StudyProvider({ children }) {
  const [studyData, setStudyData] = useState(null); // { paths, contentMap }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeView, setActiveView] = useState('dashboard'); // 'dashboard' | 'unit' | 'path-quiz' | 'final-quiz'
  const [activePathId, setActivePathId] = useState(null);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [activeUnitId, setActiveUnitId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const progressAPI = useProgress();

  // Load content.md on mount
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}content.md`)
      .then((r) => {
        if (!r.ok) throw new Error('No se pudo cargar el contenido.');
        return r.text();
      })
      .then((text) => {
        const data = parseMarkdown(text);
        setStudyData(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  // Navigation helpers
  const navList = studyData ? buildNavigationList(studyData.paths) : [];

  const currentNavIdx = navList.findIndex((n) => n.unitId === activeUnitId);

  const navigateToUnit = useCallback((pathId, moduleId, unitId) => {
    setActiveView('unit');
    setActivePathId(pathId);
    setActiveModuleId(moduleId);
    setActiveUnitId(unitId);
    window.scrollTo(0, 0);
  }, []);

  const navigateToPathQuiz = useCallback((pathId) => {
    setActiveView('path-quiz');
    setActivePathId(pathId);
    setActiveModuleId(null);
    setActiveUnitId(`${pathId}-path-quiz`);
    window.scrollTo(0, 0);
  }, []);

  const navigateToFinalQuiz = useCallback(() => {
    setActiveView('final-quiz');
    setActivePathId(null);
    setActiveModuleId(null);
    setActiveUnitId('final-quiz');
    window.scrollTo(0, 0);
  }, []);

  const navigateToDashboard = useCallback(() => {
    setActiveView('dashboard');
    setActivePathId(null);
    setActiveModuleId(null);
    setActiveUnitId(null);
    window.scrollTo(0, 0);
  }, []);

  const navigateNext = useCallback(() => {
    if (currentNavIdx < navList.length - 1) {
      const next = navList[currentNavIdx + 1];
      if (next.type === 'path-quiz') {
        navigateToPathQuiz(next.pathId);
      } else if (next.type === 'final-quiz') {
        navigateToFinalQuiz();
      } else {
        navigateToUnit(next.pathId, next.moduleId, next.unitId);
      }
    }
  }, [currentNavIdx, navList, navigateToUnit, navigateToPathQuiz, navigateToFinalQuiz]);

  const navigatePrev = useCallback(() => {
    if (currentNavIdx > 0) {
      const prev = navList[currentNavIdx - 1];
      if (prev.type === 'path-quiz') {
        navigateToPathQuiz(prev.pathId);
      } else if (prev.type === 'final-quiz') {
        navigateToFinalQuiz();
      } else {
        navigateToUnit(prev.pathId, prev.moduleId, prev.unitId);
      }
    }
  }, [currentNavIdx, navList, navigateToUnit, navigateToPathQuiz, navigateToFinalQuiz]);

  const hasPrev = currentNavIdx > 0;
  const hasNext = currentNavIdx < navList.length - 1;

  // Helpers to find current module/path objects
  const currentPath = studyData?.paths.find((p) => p.id === activePathId);
  const currentModule = currentPath?.modules.find((m) => m.id === activeModuleId);
  const currentUnit = currentModule?.units.find((u) => u.id === activeUnitId);
  const currentContent = currentUnit ? studyData?.contentMap[currentUnit.contentKey] : null;

  const value = {
    studyData,
    loading,
    error,
    activeView,
    activePathId,
    activeModuleId,
    activeUnitId,
    sidebarOpen,
    setSidebarOpen,
    currentPath,
    currentModule,
    currentUnit,
    currentContent,
    hasPrev,
    hasNext,
    navigateToUnit,
    navigateToPathQuiz,
    navigateToFinalQuiz,
    navigateToDashboard,
    navigateNext,
    navigatePrev,
    ...progressAPI,
  };

  return <StudyContext.Provider value={value}>{children}</StudyContext.Provider>;
}

export function useStudy() {
  const ctx = useContext(StudyContext);
  if (!ctx) throw new Error('useStudy must be used within StudyProvider');
  return ctx;
}
