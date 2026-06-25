# 📚 GitHub Foundations Certification — Guía de Estudio Interactiva

Aplicación web de estudio para la certificación **GitHub Foundations**, construida con React 18, Vite y Tailwind CSS v4.

---

## 🚀 Inicio rápido

### Requisitos previos

- **Node.js** v18 o superior — [descargar aquí](https://nodejs.org/)
- **npm** v9 o superior (incluido con Node.js)

Verifica tu versión:
```bash
node -v   # debe ser >= 18
npm -v    # debe ser >= 9
```

---

### 1. Instalar dependencias

Desde la carpeta `github-cert-study/`:

```bash
cd github-cert-study
npm install
```

---

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre tu navegador en: **http://localhost:5173**

> Si el puerto 5173 está ocupado, Vite usará el siguiente disponible (ej. 5174). El puerto exacto se muestra en la terminal.

---

### 3. Build de producción (opcional)

```bash
npm run build
```

Los archivos optimizados se generan en `dist/`.

Para previsualizar el build localmente:

```bash
npm run preview
```

---

## 🗂️ Estructura del proyecto

```
github-cert-study/
├── public/
│   └── content.md              ← Contenido completo del curso (no editar)
├── src/
│   ├── App.jsx                 ← Componente raíz
│   ├── index.css               ← Estilos globales (Tailwind v4)
│   ├── main.jsx                ← Entry point de React
│   ├── context/
│   │   └── StudyContext.jsx    ← Estado global (navegación + progreso)
│   ├── hooks/
│   │   ├── useProgress.js      ← Lógica de progreso y localStorage
│   │   └── useTheme.js         ← Toggle dark/light mode
│   ├── utils/
│   │   ├── markdownParser.js   ← Parser: PATH → Módulo → Unidad
│   │   └── quizUtils.js        ← Aleatorización y cálculo de scores
│   ├── data/
│   │   └── questions.js        ← Banco de preguntas (16 módulos × 20)
│   └── components/
│       ├── Layout/             ← AppShell, Header, Sidebar
│       ├── Study/              ← UnitViewer, NavigationButtons
│       ├── Quiz/               ← QuizComponent, PathQuizView
│       └── Dashboard/          ← Dashboard de progreso
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## ✨ Funcionalidades

| Función | Descripción |
|---|---|
| 📖 **Lector de contenido** | Muestra el contenido completo del libro en Markdown |
| 🗺️ **Sidebar de navegación** | Árbol PATH → Módulo → Unidad con indicador de progreso |
| ✅ **Completado automático** | Una unidad se marca como completa al llegar al fondo del scroll |
| ⬅️ ➡️ **Botones Anterior/Siguiente** | En la parte superior e inferior de cada unidad |
| 🌙 **Dark / Light mode** | Toggle en el header, preferencia guardada automáticamente |
| 🧠 **Quiz por módulo** | 10 preguntas seleccionadas aleatoriamente de un banco de 20 |
| 🎯 **Evaluación de Path** | 20 preguntas aleatorias del pool de todos sus módulos |
| 🏆 **Evaluación Final** | 30 preguntas de todo el curso (banco completo) |
| 📊 **Dashboard** | Progreso por curso, por path y por módulo |
| 💾 **Persistencia** | Todo el progreso y scores se guardan en `localStorage` |

---

## 📐 Estructura del curso

```
GitHub Foundations Certification
├── PATH 1 — Fundamentos de GitHub
│   ├── Módulo 01 · Introducción a Git
│   ├── Módulo 02 · Introducción a GitHub
│   ├── Módulo 03 · Productos y Planes
│   ├── Módulo 04 · Code Scanning y Seguridad
│   ├── Módulo 05 · GitHub Copilot
│   ├── Módulo 06 · GitHub Codespaces
│   ├── Módulo 07 · GitHub Projects
│   └── Módulo 08 · Markdown
│
└── PATH 2 — GitHub Foundations (Avanzado)
    ├── Módulo 09 · Contribuir a Open Source
    ├── Módulo 10 · InnerSource
    ├── Módulo 11 · Seguridad en Repositorios
    ├── Módulo 12 · Administración de GitHub
    ├── Módulo 13 · Identidad, Autenticación y Autorización
    ├── Módulo 14 · Pull Requests
    ├── Módulo 15 · Historial y Búsqueda
    └── Módulo 16 · GitHub Copilot Avanzado
```

Cada módulo termina con una **Evaluación del Módulo** (10/20 preguntas aleatorias).  
Cada Path termina con una **Evaluación del Path** (20 preguntas).  
Al final del curso hay una **Evaluación Final** (30 preguntas).

---

## 💾 Datos guardados en localStorage

El progreso se guarda automáticamente bajo la clave `github-cert-progress-v1`:

```json
{
  "completedUnits": ["module-01-unit-01", "module-01-unit-02", "..."],
  "moduleQuizScores": {
    "module-01": [{ "correct": 8, "total": 10, "pct": 80, "date": "2026-06-24T..." }]
  },
  "pathQuizScores": {
    "path-1": [{ "correct": 17, "total": 20, "pct": 85, "date": "2026-06-24T..." }]
  },
  "finalQuizScore": { "correct": 25, "total": 30, "pct": 83, "date": "2026-06-24T..." }
}
```

### Limpiar el progreso

Desde la consola del navegador (F12 → Consola):

```javascript
localStorage.removeItem('github-cert-progress-v1');
location.reload();
```

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | UI y componentes |
| [Vite](https://vite.dev/) | 8 | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilos utilitarios |
| [react-markdown](https://github.com/remarkjs/react-markdown) | 9 | Renderizado de Markdown |
| [remark-gfm](https://github.com/remarkjs/remark-gfm) | 4 | Tablas, task lists, etc. |
| [lucide-react](https://lucide.dev/) | latest | Iconos |

---

## 🐛 Solución de problemas

### `npm install` falla
Verifica que tienes Node.js >= 18:
```bash
node -v
```

### El contenido no carga
Asegúrate de que el archivo `public/content.md` existe. Es el libro del curso y debe estar en esa ruta para que Vite lo sirva estáticamente.

### Los estilos no se aplican
Tailwind v4 requiere `@tailwindcss/vite` como plugin. Verifica que `vite.config.js` lo incluya:
```js
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Puerto ocupado
Vite selecciona automáticamente el siguiente puerto disponible. El puerto real se muestra en la terminal al ejecutar `npm run dev`.

---

## 📝 Notas

- El contenido se carga desde `public/content.md` vía `fetch()` — no se bundlea en el JS.
- El progreso es 100% local: sin backend, sin cuentas, sin conexión requerida.
- Cada vez que se abre un quiz, las preguntas se seleccionan aleatoriamente del banco.
- Los intentos anteriores del quiz se guardan; el dashboard muestra el **mejor resultado**.
