import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useStudy } from '../../context/StudyContext';

export default function AppShell({ dark, toggleTheme, children }) {
  const { sidebarOpen } = useStudy();

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <Header dark={dark} toggleTheme={toggleTheme} />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`
            transition-all duration-300 overflow-hidden shrink-0
            ${sidebarOpen ? 'w-72' : 'w-0'}
          `}
        >
          {sidebarOpen && <Sidebar />}
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
