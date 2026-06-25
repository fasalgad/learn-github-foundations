import React, { useEffect, useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CheckCircle2, AlertCircle, FileText, Code2, Award, Star, ClipboardList } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';
import NavigationButtons from './NavigationButtons';
import QuizComponent from '../Quiz/QuizComponent';

const TYPE_ICONS = {
  lesson: FileText,
  exercise: Code2,
  'knowledge-check': Award,
  summary: Star,
  quiz: ClipboardList,
};

const TYPE_BADGES = {
  lesson: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  exercise: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  'knowledge-check': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  summary: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  quiz: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
};

const TYPE_LABELS = {
  lesson: 'Lección',
  exercise: 'Ejercicio',
  'knowledge-check': 'Autoevaluación',
  summary: 'Resumen',
  quiz: 'Evaluación',
};

// Clean markdown content from navigation artifacts
function cleanContent(content) {
  if (!content) return '';
  return content
    .replace(/\[Anterior\]\([^)]+\)/g, '')
    .replace(/\[Siguientes?\]\([^)]+\)/g, '')
    .replace(/\[Volver para finalizar\]\([^)]+\)/g, '')
    .replace(/## Siguiente unidad:[^\n]*/g, '')
    .replace(/## Comentarios\s*[\s\S]*?¿Le resultó útil esta página\?/g, '')
    .replace(/\* \* \*/g, '---')
    .replace(/Completado\s+\d+ XP/g, '')
    .replace(/## Módulo incompleto:/g, '')
    .replace(/## Proporcionar comentarios[\s\S]*?(?=##|$)/g, '')
    .replace(/## Introducción a Azure[\s\S]*?(?=##|$)/g, '')
    .trim();
}

// Custom markdown components for better rendering
const mdComponents = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-5 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-3 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-5 mb-3 space-y-1 text-gray-700 dark:text-gray-300">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-5 mb-3 space-y-1 text-gray-700 dark:text-gray-300">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900 dark:text-gray-100">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-700 dark:text-gray-300">{children}</em>
  ),
  code: ({ node, className, children, ...props }) => {
    const isInline = !className && !String(children).includes('\n');
    return isInline ? (
      <code className="bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-yellow-400 px-1 py-0.5 rounded text-sm font-mono" {...props}>{children}</code>
    ) : (
      <code className="block bg-gray-900 dark:bg-gray-950 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-3" {...props}>{children}</code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-gray-900 dark:bg-gray-950 rounded-lg overflow-x-auto mb-4">{children}</pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-400 dark:border-blue-600 pl-4 py-1 my-3 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg text-gray-700 dark:text-gray-300 italic">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-100 dark:bg-gray-800">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold text-gray-800 dark:text-gray-200">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300">{children}</td>
  ),
  hr: () => <hr className="border-gray-200 dark:border-gray-700 my-5" />,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <span className="inline-block my-2 italic text-xs text-gray-400">[Imagen: {alt || src}]</span>
  ),
};

export default function UnitViewer() {
  const {
    currentUnit, currentModule, currentPath, currentContent,
    markUnitComplete, isUnitComplete, progress,
    activeView,
  } = useStudy();

  const [scrollCompleted, setScrollCompleted] = useState(false);

  const unitId = currentUnit?.id;
  const alreadyDone = unitId && currentUnit.type !== 'quiz' ? isUnitComplete(unitId) : false;

  // Scroll-to-bottom detection
  const handleScroll = useCallback(() => {
    if (alreadyDone || currentUnit?.type === 'quiz') return;
    const mainEl = document.querySelector('main');
    if (!mainEl) return;
    const scrollBottom = mainEl.scrollTop + mainEl.clientHeight;
    const isAtBottom = scrollBottom >= mainEl.scrollHeight - 150; // 150px tolerance
    if (isAtBottom && !scrollCompleted) {
      setScrollCompleted(true);
      markUnitComplete(unitId);
    }
  }, [alreadyDone, currentUnit, scrollCompleted, markUnitComplete, unitId]);

  // Attach scroll listener to window (main content scrolls in AppShell)
  useEffect(() => {
    const mainEl = document.querySelector('main');
    if (!mainEl) return;
    mainEl.addEventListener('scroll', handleScroll);
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Reset scroll state when unit changes
  useEffect(() => {
    setScrollCompleted(false);
  }, [unitId]);

  if (!currentUnit || !currentModule || !currentPath) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400">
        <AlertCircle size={24} className="mr-2" />
        Selecciona una unidad del menú lateral.
      </div>
    );
  }

  // For quiz type, render the QuizComponent
  if (currentUnit.type === 'quiz') {
    return <QuizComponent moduleId={currentModule.id} moduleTitle={currentModule.name} />;
  }

  const Icon = TYPE_ICONS[currentUnit.type] || FileText;
  const badgeClass = TYPE_BADGES[currentUnit.type] || TYPE_BADGES.lesson;
  const badgeLabel = TYPE_LABELS[currentUnit.type] || 'Lección';
  const cleaned = cleanContent(currentContent);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 dark:text-gray-500 mb-4 flex flex-wrap items-center gap-1">
        <span>{currentPath.shortName}</span>
        <span>›</span>
        <span>{currentModule.name}</span>
      </nav>

      {/* Top Navigation */}
      <div className="mb-6">
        <NavigationButtons />
      </div>

      {/* Unit header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${badgeClass}`}>
            <Icon size={12} />
            {badgeLabel}
          </span>
          {(alreadyDone || scrollCompleted) && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle2 size={12} />
              Completado
            </span>
          )}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{currentUnit.title}</h1>
      </div>

      {/* Content */}
      <article className="prose-container">
        {cleaned ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={mdComponents}
          >
            {cleaned}
          </ReactMarkdown>
        ) : (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 text-center">
            <AlertCircle size={24} className="mx-auto mb-2 text-yellow-500" />
            <p className="text-yellow-700 dark:text-yellow-400 font-medium">Contenido no disponible para esta unidad.</p>
            <p className="text-yellow-600 dark:text-yellow-500 text-sm mt-1">Archivo: <code className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">{currentUnit.fileName}</code></p>
          </div>
        )}
      </article>

      {/* Scroll hint */}
      {!alreadyDone && !scrollCompleted && (
        <div className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600 italic">
          Desplázate hasta el final para marcar como completado ✓
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="mt-8">
        <NavigationButtons />
      </div>
    </div>
  );
}
