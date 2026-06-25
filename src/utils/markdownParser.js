/**
 * Parses the Libro_GitHub_Cert_book.md file into structured data.
 *
 * The file has two logical sections:
 * 1. TOC/Index (top): ## PATH, ### Módulo, | table rows |
 * 2. Content sections: ## P1-01-01-0-introduction.md ... content ...
 *
 * Returns: { paths, contentMap }
 *   paths: Array of { id, name, number, modules[] }
 *   modules: Array of { id, pathId, name, number, units[] }
 *   units: Array of { id, number, fileName, contentKey, title, type }
 *   contentMap: { contentKey → markdownString }
 */

const UNIT_TYPES = {
  exercise: { label: 'Ejercicio', color: 'orange' },
  summary: { label: 'Resumen', color: 'yellow' },
  lesson: { label: 'Lección', color: 'blue' },
  quiz: { label: 'Evaluación del Módulo', color: 'green' },
};

function detectUnitType(fileName) {
  const f = fileName.toLowerCase();
  if (f.includes('exercise')) return 'exercise';
  if (f.includes('summary')) return 'summary';
  return 'lesson';
}

/**
 * Given a PATH index (1-based) and module number (1-based, padded),
 * and a table filename entry like "1-01-0-introduction.md" or "P2-09-01-1-intro.md",
 * returns the content section key used in the markdown.
 */
function resolveContentKey(tableFileName, pathNum, moduleNum) {
  // PATH 2+ entries already have full prefix (P2-09-...)
  if (tableFileName.match(/^P\d+-/)) {
    return tableFileName;
  }
  // PATH 1 entries: "N-REST" → "P{pathNum}-{moduleNumPadded}-REST"
  const dashIdx = tableFileName.indexOf('-');
  if (dashIdx === -1) return tableFileName;
  const rest = tableFileName.substring(dashIdx + 1); // e.g. "01-0-introduction.md"
  const moduleStr = String(moduleNum).padStart(2, '0');
  return `P${pathNum}-${moduleStr}-${rest}`;
}

export function parseMarkdown(text) {
  const lines = text.split('\n');

  // ── Pass 1: Build content map ──────────────────────────────────────────────
  // Content section headers look like:  ## P1-01-01-0-introduction.md
  const contentMap = {};
  let currentContentKey = null;
  let contentLines = [];
  const contentHeaderRe = /^## (P\d+-\d+-[^\s]+\.md)\s*$/;

  for (const line of lines) {
    const m = line.match(contentHeaderRe);
    if (m) {
      if (currentContentKey) {
        contentMap[currentContentKey] = contentLines.join('\n').trim();
      }
      currentContentKey = m[1];
      contentLines = [];
    } else if (currentContentKey) {
      contentLines.push(line);
    }
  }
  if (currentContentKey) {
    contentMap[currentContentKey] = contentLines.join('\n').trim();
  }

  // ── Pass 2: Build structure from TOC ──────────────────────────────────────
  const paths = [];
  let currentPath = null;
  let currentModule = null;
  let pathCounter = 0;
  let moduleCounter = 0;

  const pathHeaderRe = /^## PATH (\d+)\s*[—–-]\s*(.+)$/;
  const moduleHeaderRe = /^### Módulo (\d+)\s*[·•]\s*(.+)$/;
  // Table row: | num | filename.md | description |
  const tableRowRe = /^\|\s*(\d+)\s*\|\s*([^\|]+\.md)\s*\|\s*([^\|]+)\s*\|/;

  for (const line of lines) {
    const trimmed = line.trim();

    const pathMatch = trimmed.match(pathHeaderRe);
    if (pathMatch) {
      pathCounter = parseInt(pathMatch[1]);
      moduleCounter = 0;
      currentPath = {
        id: `path-${pathCounter}`,
        number: pathCounter,
        name: `PATH ${pathMatch[1]} — ${pathMatch[2].replace(/[*_]/g, '').trim()}`,
        shortName: pathMatch[2].replace(/[*_]/g, '').trim(),
        modules: [],
      };
      paths.push(currentPath);
      currentModule = null;
      continue;
    }

    const moduleMatch = trimmed.match(moduleHeaderRe);
    if (moduleMatch && currentPath) {
      moduleCounter = parseInt(moduleMatch[1]);
      const moduleNum = moduleCounter;
      currentModule = {
        id: `module-${String(moduleNum).padStart(2, '0')}`,
        number: moduleNum,
        pathId: currentPath.id,
        name: `Módulo ${String(moduleNum).padStart(2, '0')} · ${moduleMatch[2].replace(/[*_]/g, '').trim()}`,
        shortName: moduleMatch[2].replace(/[*_]/g, '').trim(),
        units: [],
        pathNumber: pathCounter,
      };
      currentPath.modules.push(currentModule);
      continue;
    }

    const rowMatch = trimmed.match(tableRowRe);
    if (rowMatch && currentModule) {
      const rowNum = parseInt(rowMatch[1]);
      const fileName = rowMatch[2].trim();
      const title = rowMatch[3].trim().replace(/^[🛠✅📋]\s*/, '');
      // "knowledge-check" was replaced by the synthetic "Evaluación del Módulo".
      // Skip old autoevaluación rows from the source markdown.
      if (fileName.toLowerCase().includes('knowledge-check')) {
        continue;
      }
      const type = detectUnitType(fileName);

      const contentKey = resolveContentKey(fileName, currentModule.pathNumber, currentModule.number);
      const unitId = `${currentModule.id}-unit-${String(rowNum).padStart(2, '0')}`;

      currentModule.units.push({
        id: unitId,
        number: rowNum,
        fileName,
        contentKey,
        title,
        type,
      });
    }
  }

  // ── Add synthetic quiz units to each module ───────────────────────────────
  for (const path of paths) {
    for (const mod of path.modules) {
      mod.units.push({
        id: `${mod.id}-quiz`,
        number: 99,
        fileName: 'quiz',
        contentKey: 'QUIZ',
        title: 'Evaluación del Módulo',
        type: 'quiz',
      });
    }
  }

  return { paths, contentMap };
}

export function getUnitTypeInfo(type) {
  return UNIT_TYPES[type] || UNIT_TYPES.lesson;
}

/**
 * Flat list of all units in order (for prev/next navigation).
 * Includes path-level evaluations and final course evaluation as special entries.
 */
export function buildNavigationList(paths) {
  const list = [];
  for (const path of paths) {
    for (const mod of path.modules) {
      for (const unit of mod.units) {
        list.push({
          pathId: path.id,
          moduleId: mod.id,
          unitId: unit.id,
          type: unit.type,
        });
      }
    }
    // Path evaluation (synthetic)
    list.push({
      pathId: path.id,
      moduleId: null,
      unitId: `${path.id}-path-quiz`,
      type: 'path-quiz',
    });
  }
  // Final course evaluation
  list.push({
    pathId: null,
    moduleId: null,
    unitId: 'final-quiz',
    type: 'final-quiz',
  });
  return list;
}
