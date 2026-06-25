/**
 * Quiz utility functions
 */

/**
 * Selects N random questions from a pool, without repetition.
 * Returns questions in random order.
 */
export function selectRandomQuestions(pool, count) {
  if (!pool || pool.length === 0) return [];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Builds the question pool for a path quiz by merging all module banks.
 */
export function buildPathQuestionPool(moduleIds, questionsBank) {
  return moduleIds.flatMap((id) => questionsBank[id] || []);
}

/**
 * Builds the question pool for the final quiz from all modules.
 */
export function buildFinalQuestionPool(questionsBank) {
  return Object.values(questionsBank).flat();
}

/**
 * Calculates score: { correct, total, pct }
 */
export function calculateScore(questions, answers) {
  if (!questions.length) return { correct: 0, total: 0, pct: 0 };
  let correct = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correct) correct++;
  }
  return {
    correct,
    total: questions.length,
    pct: Math.round((correct / questions.length) * 100),
  };
}

/**
 * Returns a motivational message based on percentage score.
 */
export function getScoreMessage(pct) {
  if (pct >= 90) return { text: '¡Excelente! Dominas este tema.', emoji: '🏆' };
  if (pct >= 70) return { text: 'Muy bien. Repasa los temas fallidos.', emoji: '✅' };
  if (pct >= 50) return { text: 'Aprobado. Refuerza los conceptos débiles.', emoji: '📚' };
  return { text: 'Necesitas repasar este módulo con más detalle.', emoji: '💪' };
}

/**
 * Returns CSS color classes based on score percentage.
 */
export function getScoreColorClass(pct) {
  if (pct >= 90) return 'text-green-600 dark:text-green-400';
  if (pct >= 70) return 'text-blue-600 dark:text-blue-400';
  if (pct >= 50) return 'text-yellow-600 dark:text-yellow-400';
  return 'text-red-600 dark:text-red-400';
}
