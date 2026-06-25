import React from 'react';
import { StudyProvider, useStudy } from './context/StudyContext';
import { useTheme } from './hooks/useTheme';
import AppShell from './components/Layout/AppShell';
import Dashboard from './components/Dashboard/Dashboard';
import UnitViewer from './components/Study/UnitViewer';
import PathQuizView from './components/Quiz/PathQuizView';
import QuizComponent from './components/Quiz/QuizComponent';
import { Loader2, AlertCircle } from 'lucide-react';

function StudyApp() {
  const { loading, error, activeView } = useStudy();

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <Loader2 size={32} className="animate-spin text-blue-500 mx-auto mb-3" />
          <p className="text-gray-600 dark:text-gray-400">Cargando contenido...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center max-w-sm px-4">
          <AlertCircle size={32} className="text-red-500 mx-auto mb-3" />
          <p className="text-red-600 dark:text-red-400 font-medium">Error al cargar el contenido</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {activeView === 'dashboard' && <Dashboard />}
      {activeView === 'unit' && <UnitViewer />}
      {activeView === 'path-quiz' && <PathQuizView />}
      {activeView === 'final-quiz' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <QuizComponent isFinal />
        </div>
      )}
    </>
  );
}

function AppWithTheme() {
  const { dark, toggleTheme } = useTheme();
  return (
    <StudyProvider>
      <AppShell dark={dark} toggleTheme={toggleTheme}>
        <StudyApp />
      </AppShell>
    </StudyProvider>
  );
}

export default AppWithTheme;
