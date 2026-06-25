import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Trophy, Target, BookOpen } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';
import { QUESTIONS_BANK } from '../../data/questions';
import { selectRandomQuestions, buildPathQuestionPool, buildFinalQuestionPool, calculateScore, getScoreMessage, getScoreColorClass } from '../../utils/quizUtils';
import NavigationButtons from '../Study/NavigationButtons';

// ─── Single Question Card ─────────────────────────────────────────────────────
function QuestionCard({ question, index, answer, onAnswer, submitted }) {
  return (
    <div className={`rounded-xl border p-5 transition-all duration-200 ${submitted ? 'border-gray-200 dark:border-gray-700' : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'}`}>
      <p className="font-medium text-gray-900 dark:text-white mb-4 leading-relaxed">
        <span className="text-blue-500 font-bold mr-2">{index + 1}.</span>
        {question.question}
      </p>
      <div className="space-y-2">
        {question.options.map((opt, i) => {
          let style = 'border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300';

          if (submitted) {
            if (i === question.correct) {
              style = 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium';
            } else if (answer === i && i !== question.correct) {
              style = 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 line-through';
            } else {
              style = 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-500 opacity-60';
            }
          } else if (answer === i) {
            style = 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium';
          }

          return (
            <button
              key={i}
              disabled={submitted}
              onClick={() => onAnswer(question.id, i)}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-150 flex items-center gap-3 ${style} ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${submitted && i === question.correct ? 'border-green-500 bg-green-500 text-white' : submitted && answer === i ? 'border-red-500 bg-red-500 text-white' : answer === i ? 'border-blue-500 bg-blue-500 text-white' : 'border-current'}`}>
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
              {submitted && i === question.correct && (
                <CheckCircle2 size={16} className="ml-auto text-green-500 shrink-0" />
              )}
              {submitted && answer === i && i !== question.correct && (
                <XCircle size={16} className="ml-auto text-red-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
      {/* Explanation after submit */}
      {submitted && question.explanation && (
        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          <strong>💡 Explicación:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
}

// ─── Results Banner ───────────────────────────────────────────────────────────
function ResultsBanner({ score, onRetry }) {
  const msg = getScoreMessage(score.pct);
  const colorClass = getScoreColorClass(score.pct);

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center mb-8">
      <div className="text-5xl mb-3">{msg.emoji}</div>
      <div className={`text-4xl font-black mb-1 ${colorClass}`}>{score.pct}%</div>
      <div className="text-gray-600 dark:text-gray-400 mb-1">
        {score.correct} de {score.total} correctas
      </div>
      <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">{msg.text}</p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors"
      >
        <RotateCcw size={16} />
        Reintentar con nuevas preguntas
      </button>
    </div>
  );
}

// ─── Quiz Component (module, path, final) ────────────────────────────────────
export default function QuizComponent({ moduleId, moduleTitle, pathId, pathTitle, isFinal }) {
  const {
    saveModuleQuiz, savePathQuiz, saveFinalQuiz,
    progress, studyData,
  } = useStudy();

  // Build question pool based on quiz type
  const pool = useMemo(() => {
    if (isFinal) return buildFinalQuestionPool(QUESTIONS_BANK);
    if (pathId) {
      // Gather all moduleIds for this path
      const path = studyData?.paths.find(p => p.id === pathId);
      const moduleIds = path?.modules.map(m => m.id) || [];
      return buildPathQuestionPool(moduleIds, QUESTIONS_BANK);
    }
    return QUESTIONS_BANK[moduleId] || [];
  }, [moduleId, pathId, isFinal, studyData]);

  const questionCount = isFinal ? 30 : pathId ? 20 : 10;

  // Selected questions (re-randomized on retry)
  const [questions, setQuestions] = useState(() => selectRandomQuestions(pool, questionCount));
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? calculateScore(questions, answers) : null;

  // Best previous score
  const prevScores = pathId
    ? progress.pathQuizScores[pathId]
    : isFinal
    ? (progress.finalQuizScore ? [progress.finalQuizScore] : [])
    : progress.moduleQuizScores[moduleId];
  const bestPrev = prevScores?.length ? prevScores.reduce((b, s) => (!b || s.pct > b.pct ? s : b), null) : null;

  const handleAnswer = (qId, optIdx) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = () => {
    if (questions.some(q => answers[q.id] === undefined)) {
      alert('Por favor responde todas las preguntas antes de enviar.');
      return;
    }
    const result = calculateScore(questions, answers);
    setSubmitted(true);
    if (isFinal) saveFinalQuiz(result);
    else if (pathId) savePathQuiz(pathId, result);
    else saveModuleQuiz(moduleId, result);
  };

  const handleRetry = () => {
    setQuestions(selectRandomQuestions(pool, questionCount));
    setAnswers({});
    setSubmitted(false);
    window.scrollTo(0, 0);
  };

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  const quizIcon = isFinal ? <Trophy size={22} className="text-yellow-500" />
    : pathId ? <Target size={22} className="text-blue-500" />
    : <BookOpen size={22} className="text-green-500" />;

  const quizTitle = isFinal ? 'Evaluación Final del Curso'
    : pathId ? `Evaluación del Path: ${pathTitle || pathId}`
    : `Evaluación: ${moduleTitle}`;

  const quizDesc = isFinal
    ? `30 preguntas aleatorias de todo el curso`
    : pathId
    ? `20 preguntas aleatorias de todos los módulos del path`
    : `10 preguntas aleatorias del banco de 20`;

  if (!questions.length) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-center text-gray-500">
        No hay preguntas disponibles para este módulo todavía.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
      {/* Nav top */}
      {!isFinal && !pathId && (
        <div className="mb-6">
          <NavigationButtons />
        </div>
      )}

      {/* Header */}
      <div className="mb-6 flex items-start gap-3">
        {quizIcon}
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">{quizTitle}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{quizDesc}</p>
          {bestPrev && (
            <p className={`text-xs mt-1 font-medium ${getScoreColorClass(bestPrev.pct)}`}>
              Mejor resultado anterior: {bestPrev.pct}% ({bestPrev.correct}/{bestPrev.total})
            </p>
          )}
        </div>
      </div>

      {/* Results Banner */}
      {submitted && score && (
        <ResultsBanner score={score} onRetry={handleRetry} />
      )}

      {/* Questions */}
      <div className="space-y-5">
        {questions.map((q, idx) => (
          <QuestionCard
            key={q.id + '-' + idx}
            question={q}
            index={idx}
            answer={answers[q.id]}
            onAnswer={handleAnswer}
            submitted={submitted}
          />
        ))}
      </div>

      {/* Submit button */}
      {!submitted && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {answeredCount} de {questions.length} respondidas
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / questions.length) * 100}%` }}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`mt-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-150 ${allAnswered ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'}`}
          >
            Enviar Respuestas
          </button>
        </div>
      )}

      {/* Bottom nav */}
      {submitted && !isFinal && !pathId && (
        <div className="mt-8">
          <NavigationButtons />
        </div>
      )}
    </div>
  );
}
