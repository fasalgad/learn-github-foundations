// GitHub Foundations Certification - Banco de Preguntas
// 16 módulos × 20 preguntas = 320 preguntas
// Cada módulo: 10 preguntas se seleccionan aleatoriamente en el quiz

export const QUESTIONS_BANK = {
  'module-01': [
    {
      id: 'q1',
      question: "¿Qué describe mejor a un sistema de control de versiones o VCS?",
      options: ["Una herramienta para rastrear cambios en archivos a lo largo del tiempo", "Un compilador de aplicaciones web", "Un servicio para alojar imágenes", "Un antivirus para repositorios"],
      correct: 0,
      explanation: "Un VCS permite registrar, comparar y recuperar cambios realizados en archivos."
    },
    {
      id: 'q2',
      question: "¿Cuál es una diferencia clave entre un VCS centralizado y Git?",
      options: ["Git requiere un servidor obligatorio para cada operación", "En Git cada clon suele tener el historial completo", "Los VCS centralizados no permiten historial", "Git solo funciona con archivos binarios"],
      correct: 1,
      explanation: "Git es distribuido: cada clon contiene el historial del repositorio."
    },
    {
      id: 'q3',
      question: "¿Qué es un repositorio en Git?",
      options: ["Un editor de texto integrado", "El conjunto de archivos y metadatos que Git usa para almacenar el proyecto y su historial", "Una sola rama remota", "Una lista de usuarios del proyecto"],
      correct: 1,
      explanation: "El repositorio contiene el historial, referencias y objetos del proyecto."
    },
    {
      id: 'q4',
      question: "¿Qué representa un commit en Git?",
      options: ["Una instantánea registrada del proyecto en un momento determinado", "Un conflicto sin resolver", "Un servidor remoto", "Una carpeta ignorada"],
      correct: 0,
      explanation: "Un commit guarda un conjunto de cambios como parte del historial."
    },
    {
      id: 'q5',
      question: "¿Qué es una rama o branch en Git?",
      options: ["Una copia física del disco duro", "Un puntero móvil a una línea de desarrollo", "Un archivo obligatorio del repositorio", "Una regla de protección"],
      correct: 1,
      explanation: "Una rama apunta normalmente al commit más reciente de una línea de trabajo."
    },
    {
      id: 'q6',
      question: "¿Qué se entiende por remote en Git?",
      options: ["Una referencia a otro repositorio, normalmente hospedado en un servidor", "Una rama oculta local", "Un mensaje de commit largo", "Un tipo de merge automático"],
      correct: 0,
      explanation: "Los remotes conectan tu repositorio local con otros repositorios."
    },
    {
      id: 'q7',
      question: "¿Qué suele indicar HEAD en Git?",
      options: ["El usuario propietario del repositorio", "La referencia al commit o rama actualmente revisada", "El primer commit creado", "La rama remota predeterminada"],
      correct: 1,
      explanation: "HEAD apunta normalmente al commit actual de la rama activa."
    },
    {
      id: 'q8',
      question: "¿Qué es un blob en el modelo de objetos de Git?",
      options: ["El contenido de un archivo almacenado por Git", "Un alias de rama remota", "Una lista de commits fusionados", "Una etiqueta firmada"],
      correct: 0,
      explanation: "Un blob almacena datos de archivo, sin nombre de archivo ni estructura de carpetas."
    },
    {
      id: 'q9',
      question: "¿Qué representa un tree en Git?",
      options: ["La estructura de directorios y referencias a blobs u otros trees", "Un servidor de respaldo", "El mensaje de un commit", "Una lista de issues abiertas"],
      correct: 0,
      explanation: "Los objetos tree modelan carpetas y cómo se organizan los archivos en un commit."
    },
    {
      id: 'q10',
      question: "¿Qué función cumple un hash en Git?",
      options: ["Identificar de forma única objetos según su contenido", "Ordenar alfabéticamente las ramas", "Asignar permisos de lectura", "Comprimir automáticamente imágenes"],
      correct: 0,
      explanation: "Git usa hashes para identificar commits, blobs, trees y otros objetos."
    },
    {
      id: 'q11',
      question: "¿Qué es el working tree o directorio de trabajo?",
      options: ["La copia visible de los archivos del proyecto que editas en tu máquina", "La base de datos remota de GitHub", "La colección de etiquetas del repositorio", "El historial de notificaciones"],
      correct: 0,
      explanation: "El working tree es el conjunto de archivos con los que trabajas directamente."
    },
    {
      id: 'q12',
      question: "¿Qué comando muestra el estado del working tree y del staging area?",
      options: ["git status", "git log", "git help", "git branch"],
      correct: 0,
      explanation: "git status muestra archivos modificados, preparados y no rastreados."
    },
    {
      id: 'q13',
      question: "¿Para qué sirve git add?",
      options: ["Para mover cambios al área de preparación antes de hacer commit", "Para publicar cambios en GitHub", "Para borrar el historial local", "Para crear un remoto"],
      correct: 0,
      explanation: "git add prepara cambios específicos para incluirlos en el próximo commit."
    },
    {
      id: 'q14',
      question: "¿Qué hace git commit normalmente?",
      options: ["Registra en el historial los cambios preparados", "Descarga commits del remoto", "Elimina archivos ignorados", "Cambia de rama automáticamente"],
      correct: 0,
      explanation: "git commit crea una nueva entrada del historial con los cambios en staging."
    },
    {
      id: 'q15',
      question: "¿Qué comando se usa para revisar el historial de commits?",
      options: ["git log", "git status", "git add", "git help commit"],
      correct: 0,
      explanation: "git log muestra la secuencia de commits del repositorio."
    },
    {
      id: 'q16',
      question: "¿Qué comando es apropiado para consultar ayuda sobre Git o un subcomando?",
      options: ["git help", "git open", "git learn", "git docs"],
      correct: 0,
      explanation: "git help y variantes como git help commit muestran documentación del comando."
    },
    {
      id: 'q17',
      question: "¿Cuál es la relación correcta entre Git y GitHub?",
      options: ["Git es el VCS y GitHub es una plataforma que hospeda y amplía flujos basados en Git", "GitHub reemplaza completamente a Git", "Git y GitHub son dos nombres del mismo binario", "Git es una función exclusiva de GitHub Enterprise"],
      correct: 0,
      explanation: "Git es la herramienta de control de versiones; GitHub ofrece colaboración alrededor de Git."
    },
    {
      id: 'q18',
      question: "¿Para qué sirve el staging area en Git?",
      options: ["Para seleccionar exactamente qué cambios entrarán en el siguiente commit", "Para almacenar backups remotos", "Para reemplazar las ramas locales", "Para ejecutar pipelines de CI"],
      correct: 0,
      explanation: "El área de preparación permite confirmar solo una parte de los cambios realizados."
    },
    {
      id: 'q19',
      question: "Si dos archivos tienen exactamente el mismo contenido, ¿qué ocurrirá con su identificación interna en Git?",
      options: ["Git puede representar ese contenido con el mismo hash de blob", "Cada archivo siempre recibe un hash distinto por su nombre", "Git no usa hashes para archivos", "Solo los archivos Markdown reciben hash"],
      correct: 0,
      explanation: "Los blobs se identifican por contenido, no por el nombre del archivo."
    },
    {
      id: 'q20',
      question: "¿Qué significa que el working tree esté limpio?",
      options: ["Que no hay cambios pendientes por confirmar en los archivos rastreados", "Que ya no existe historial en el repositorio", "Que el remoto fue eliminado", "Que todas las ramas se fusionaron"],
      correct: 0,
      explanation: "Un working tree limpio indica que no hay modificaciones pendientes en seguimiento."
    }
  ],
  'module-02': [
    {
      id: 'q1',
      question: "¿Qué es principalmente GitHub?",
      options: ["Un compilador de lenguajes", "Una plataforma para alojar y colaborar en repositorios Git", "Un sistema operativo", "Una base de datos relacional"],
      correct: 1,
      explanation: "GitHub ofrece hospedaje para repositorios Git y herramientas de colaboración."
    },
    {
      id: 'q2',
      question: "¿Qué puede contener un repositorio en GitHub?",
      options: ["Solo código fuente", "Solo archivos Markdown", "Código, documentación, historial y configuración", "Únicamente binarios ejecutables"],
      correct: 2,
      explanation: "Un repositorio puede incluir muchos tipos de archivos y su historial de cambios."
    },
    {
      id: 'q3',
      question: "¿Para qué sirve un fork en GitHub?",
      options: ["Para cambiar el nombre de una rama", "Para crear una copia de un repositorio bajo tu cuenta", "Para cerrar un issue", "Para eliminar el historial Git"],
      correct: 1,
      explanation: "Un fork permite trabajar sobre una copia propia de otro repositorio."
    },
    {
      id: 'q4',
      question: "¿Cuál es el propósito de un pull request?",
      options: ["Solicitar la revisión e integración de cambios", "Descargar dependencias automáticamente", "Borrar ramas remotas", "Ver métricas de facturación"],
      correct: 0,
      explanation: "Un pull request propone cambios y facilita su revisión antes de fusionarlos."
    },
    {
      id: 'q5',
      question: "¿Para qué se usa un issue en GitHub?",
      options: ["Para compilar el proyecto", "Para registrar tareas, errores o mejoras", "Para cifrar secretos", "Para publicar paquetes"],
      correct: 1,
      explanation: "Los issues ayudan a gestionar trabajo, bugs y solicitudes de funcionalidad."
    },
    {
      id: 'q6',
      question: "¿Qué indica normalmente una estrella o star en GitHub?",
      options: ["Que el repositorio fue archivado", "Que el usuario marcó el repositorio como favorito o de interés", "Que el repositorio no tiene licencia", "Que el proyecto es privado"],
      correct: 1,
      explanation: "Las stars sirven para guardar y mostrar interés por un repositorio."
    },
    {
      id: 'q7',
      question: "¿Qué efecto tiene Watch sobre un repositorio?",
      options: ["Activa notificaciones sobre actividad del repositorio", "Convierte el repositorio en público", "Bloquea nuevos commits", "Crea una rama de seguimiento local"],
      correct: 0,
      explanation: "Watch se usa para recibir notificaciones de actividad del repositorio."
    },
    {
      id: 'q8',
      question: "¿Qué significa seguir a un usuario en GitHub?",
      options: ["Copiar todos sus repositorios", "Recibir actividad pública relevante de ese usuario", "Obtener permisos de escritura", "Fusionar automáticamente sus pull requests"],
      correct: 1,
      explanation: "Seguir a un usuario permite ver parte de su actividad pública en GitHub."
    },
    {
      id: 'q9',
      question: "¿Qué función cumple normalmente README.md?",
      options: ["Ejecutar pruebas de seguridad", "Servir como introducción y documentación inicial del proyecto", "Definir permisos de la organización", "Configurar Git localmente"],
      correct: 1,
      explanation: "README suele explicar qué hace el proyecto y cómo usarlo."
    },
    {
      id: 'q10',
      question: "¿Cómo se activa el README de perfil en GitHub?",
      options: ["Creando un repositorio público con el mismo nombre que tu usuario", "Editando cualquier gist", "Creando una rama llamada profile", "Abriendo un issue en GitHub Support"],
      correct: 0,
      explanation: "GitHub muestra un README especial si existe un repositorio público con tu nombre de usuario."
    },
    {
      id: 'q11',
      question: "¿Para qué sirve GitHub Discussions?",
      options: ["Para almacenar secretos cifrados", "Para mantener conversaciones comunitarias fuera de issues y PR", "Para reemplazar Git", "Para gestionar facturación"],
      correct: 1,
      explanation: "Discussions ofrece un espacio para preguntas, ideas y conversaciones de comunidad."
    },
    {
      id: 'q12',
      question: "¿Qué permite GitHub Actions?",
      options: ["Automatizar flujos de trabajo como CI/CD", "Editar imágenes vectoriales", "Cambiar el sistema de archivos local", "Reescribir todo el historial Git"],
      correct: 0,
      explanation: "GitHub Actions automatiza tareas en respuesta a eventos del repositorio."
    },
    {
      id: 'q13',
      question: "¿Qué es la rama predeterminada de un repositorio?",
      options: ["La única rama protegida", "La rama principal que GitHub muestra por defecto", "Una rama temporal para conflictos", "La primera rama remota creada por un fork"],
      correct: 1,
      explanation: "La rama predeterminada es la base principal del trabajo visible por defecto."
    },
    {
      id: 'q14',
      question: "¿Qué puede hacer un colaborador con permisos de escritura?",
      options: ["Cambiar el propietario de GitHub", "Hacer push o fusionar cambios según la configuración del repositorio", "Ver contraseñas del servidor", "Modificar planes de facturación de toda la empresa"],
      correct: 1,
      explanation: "Los permisos de escritura permiten contribuir directamente al repositorio dentro de las reglas definidas."
    },
    {
      id: 'q15',
      question: "¿Qué caracteriza a un pull request en borrador o draft?",
      options: ["No puede tener commits", "Indica que aún no está listo para revisión final", "Se fusiona automáticamente", "Solo puede abrirse desde la rama principal"],
      correct: 1,
      explanation: "Un draft PR comunica que el trabajo sigue en progreso."
    },
    {
      id: 'q16',
      question: "¿Para qué se usan las Releases en GitHub?",
      options: ["Para administrar equipos internos", "Para publicar versiones identificables de un proyecto", "Para ocultar commits del historial", "Para reemplazar tags de Git"],
      correct: 1,
      explanation: "Las releases organizan y describen versiones del software, a menudo basadas en tags."
    },
    {
      id: 'q17',
      question: "¿Qué es un Gist?",
      options: ["Un tipo de licencia", "Una forma sencilla de compartir fragmentos o archivos pequeños", "Un entorno de ejecución para Actions", "Una alerta de seguridad"],
      correct: 1,
      explanation: "Gist está pensado para compartir código o texto de forma rápida."
    },
    {
      id: 'q18',
      question: "¿Qué diferencia principal hay entre una cuenta personal y una organización?",
      options: ["La organización no puede tener repositorios", "La organización está orientada a trabajo colaborativo con miembros y equipos", "La cuenta personal no puede usar Git", "La organización no admite repositorios privados"],
      correct: 1,
      explanation: "Las organizaciones facilitan la gestión de miembros, equipos y repositorios compartidos."
    },
    {
      id: 'q19',
      question: "¿Para qué sirven los topics de un repositorio?",
      options: ["Para ejecutar despliegues", "Para mejorar la clasificación y descubribilidad del repositorio", "Para reemplazar las etiquetas Git", "Para asignar permisos a ramas"],
      correct: 1,
      explanation: "Los topics ayudan a describir el contenido del repositorio y hacerlo más fácil de encontrar."
    },
    {
      id: 'q20',
      question: "¿Qué permite GitHub Pages?",
      options: ["Publicar sitios web estáticos desde un repositorio", "Compilar código nativo en la nube", "Ejecutar análisis estático de seguridad", "Administrar secretos de Codespaces"],
      correct: 0,
      explanation: "GitHub Pages sirve para hospedar sitios estáticos directamente desde GitHub."
    }
  ],
  'module-03': [
    {
      id: 'q1',
      question: "¿Para quién está pensado principalmente GitHub Free?",
      options: ["Usuarios individuales y equipos pequeños con funciones básicas", "Solo gobiernos", "Solo entornos sin repositorios privados", "Exclusivamente grandes corporaciones reguladas"],
      correct: 0,
      explanation: "GitHub Free cubre necesidades básicas de colaboración para muchos usuarios y equipos."
    },
    {
      id: 'q2',
      question: "¿Qué añade GitHub Pro frente a Free para uso personal?",
      options: ["Control total del centro de datos de GitHub", "Funciones avanzadas para desarrolladores individuales", "Autoalojamiento obligatorio", "Gestión de miles de usuarios empresariales"],
      correct: 1,
      explanation: "GitHub Pro amplía funciones para desarrolladores individuales más allá del plan Free."
    },
    {
      id: 'q3',
      question: "¿Qué plan está orientado a equipos que necesitan colaborar con controles compartidos?",
      options: ["GitHub Team", "GitHub Pages", "GitHub Gist", "GitHub Free Solo"],
      correct: 0,
      explanation: "GitHub Team está diseñado para colaboración estructurada en equipos."
    },
    {
      id: 'q4',
      question: "¿Qué plan suele elegirse para necesidades empresariales avanzadas de cumplimiento y administración?",
      options: ["GitHub Desktop", "GitHub Enterprise", "GitHub Gist", "GitHub Free"],
      correct: 1,
      explanation: "GitHub Enterprise está orientado a organizaciones grandes con requisitos avanzados."
    },
    {
      id: 'q5',
      question: "¿Qué describe mejor GitHub Enterprise Cloud?",
      options: ["Una edición autoalojada en servidores propios", "Una edición empresarial alojada por GitHub", "Un cliente de escritorio para Windows", "Un reemplazo de Git local"],
      correct: 1,
      explanation: "Enterprise Cloud se ejecuta en la infraestructura administrada por GitHub."
    },
    {
      id: 'q6',
      question: "¿Qué describe mejor GitHub Enterprise Server?",
      options: ["Una edición empresarial autoalojada por la organización", "Un sitio estático generado por Actions", "La app móvil oficial de GitHub", "Un plan personal de bajo costo"],
      correct: 0,
      explanation: "Enterprise Server permite ejecutar GitHub dentro de la infraestructura propia."
    },
    {
      id: 'q7',
      question: "¿Para qué sirve GitHub Mobile?",
      options: ["Para programar kernels de dispositivos", "Para revisar notificaciones, issues y PR desde el móvil", "Para reemplazar todo el trabajo de escritorio", "Para alojar repositorios locales sin internet"],
      correct: 1,
      explanation: "GitHub Mobile facilita seguimiento y acciones rápidas desde un teléfono."
    },
    {
      id: 'q8',
      question: "¿Qué es GitHub Desktop?",
      options: ["Un entorno de nube para ejecutar contenedores", "Una aplicación gráfica para trabajar con Git y GitHub", "Una consola Linux integrada en el navegador", "Un sistema de tickets"],
      correct: 1,
      explanation: "GitHub Desktop ofrece una interfaz gráfica para tareas comunes con Git y GitHub."
    },
    {
      id: 'q9',
      question: "¿Qué es GitHub CLI?",
      options: ["Una herramienta de línea de comandos para interactuar con GitHub", "Una licencia comercial para empresas", "Un sustituto del protocolo HTTPS", "Un formato de empaquetado de dependencias"],
      correct: 0,
      explanation: "GitHub CLI permite trabajar con repositorios, PR, issues y más desde terminal."
    },
    {
      id: 'q10',
      question: "¿Qué afirmación sobre GitHub Actions y los planes es correcta?",
      options: ["Todos los planes incluyen exactamente el mismo consumo incluido", "El uso incluido y la facturación adicional pueden variar según el plan", "Actions solo existe en Enterprise Server", "Actions no puede automatizar pruebas"],
      correct: 1,
      explanation: "Los minutos y cuotas incluidas de Actions dependen del plan contratado."
    },
    {
      id: 'q11',
      question: "¿Para qué sirve GitHub Packages?",
      options: ["Para crear ramas protegidas", "Para alojar y distribuir paquetes y contenedores", "Para escribir documentación automáticamente", "Para reemplazar Git tags"],
      correct: 1,
      explanation: "GitHub Packages permite publicar y consumir paquetes asociados a proyectos."
    },
    {
      id: 'q12',
      question: "¿Qué producto de GitHub se usa para publicar un sitio estático?",
      options: ["GitHub Mobile", "GitHub Pages", "GitHub Sponsors", "GitHub Projects"],
      correct: 1,
      explanation: "GitHub Pages está orientado al alojamiento de sitios web estáticos."
    },
    {
      id: 'q13',
      question: "¿Cómo suele cobrarse GitHub Codespaces?",
      options: ["Solo por número de commits", "Por consumo de cómputo y almacenamiento", "Solo por cantidad de ramas", "Por número de etiquetas creadas"],
      correct: 1,
      explanation: "Codespaces se basa normalmente en recursos consumidos, como tiempo de cómputo y almacenamiento."
    },
    {
      id: 'q14',
      question: "¿Qué opción de Copilot está orientada a organizaciones con políticas centralizadas?",
      options: ["GitHub Copilot Business", "GitHub Gist Pro", "GitHub Markdown Plus", "GitHub Pages Enterprise"],
      correct: 0,
      explanation: "Copilot Business ofrece controles organizacionales para administrar el uso de Copilot."
    },
    {
      id: 'q15',
      question: "¿Qué conjunto de funciones avanzadas de seguridad ofrece GitHub para organizaciones elegibles?",
      options: ["GitHub Advanced Security", "GitHub Basic Security Pack", "GitHub Pages Shield", "GitHub Desktop Secure"],
      correct: 0,
      explanation: "GitHub Advanced Security reúne capacidades como code scanning y secret scanning avanzados."
    },
    {
      id: 'q16',
      question: "¿Qué necesidad empresarial suele resolverse con funciones como SAML SSO?",
      options: ["Edición de imágenes", "Integración de identidad y acceso centralizado", "Compresión del historial Git", "Creación automática de etiquetas"],
      correct: 1,
      explanation: "SAML SSO ayuda a integrar autenticación empresarial y control de acceso."
    },
    {
      id: 'q17',
      question: "¿GitHub Free permite repositorios privados?",
      options: ["No, solo públicos", "Sí, permite repositorios privados", "Solo en Enterprise Server", "Solo si no se usa Git"],
      correct: 1,
      explanation: "GitHub Free admite repositorios privados, aunque con límites según funciones y consumo."
    },
    {
      id: 'q18',
      question: "¿Qué ventaja aporta GitHub Team frente a un uso puramente individual?",
      options: ["Quita la necesidad de usar Git", "Mejora la colaboración y la administración compartida del equipo", "Convierte todo proyecto en autoalojado", "Elimina la necesidad de revisar código"],
      correct: 1,
      explanation: "GitHub Team está pensado para coordinación y gestión colaborativa."
    },
    {
      id: 'q19',
      question: "¿Qué producto de GitHub permite apoyar económicamente a mantenedores de proyectos?",
      options: ["GitHub Sponsors", "GitHub Packages", "GitHub Actions", "GitHub Desktop"],
      correct: 0,
      explanation: "GitHub Sponsors facilita apoyo financiero a desarrolladores y proyectos open source."
    },
    {
      id: 'q20',
      question: "¿Dónde se encuentran integraciones y aplicaciones de terceros para ampliar GitHub?",
      options: ["GitHub Marketplace", "GitHub Archive", "GitHub Canvas", "GitHub Mirror"],
      correct: 0,
      explanation: "GitHub Marketplace reúne herramientas e integraciones que se conectan con GitHub."
    }
  ],
  'module-04': [
    {
      id: 'q1',
      question: "¿Cuál es el objetivo principal de Code Scanning en GitHub?",
      options: ["Detectar vulnerabilidades y problemas en el código", "Subir archivos al repositorio remoto", "Crear ramas automáticamente", "Diseñar la interfaz del proyecto"],
      correct: 0,
      explanation: "Code Scanning analiza el código para encontrar fallos de seguridad y calidad relevantes."
    },
    {
      id: 'q2',
      question: "¿Qué es CodeQL en el contexto de GitHub?",
      options: ["Un gestor de paquetes", "Un motor de análisis semántico para code scanning", "Un formato de imagen", "Un cliente móvil de GitHub"],
      correct: 1,
      explanation: "CodeQL es una tecnología de análisis que permite detectar patrones problemáticos en el código."
    },
    {
      id: 'q3',
      question: "¿Qué ventaja ofrece la configuración predeterminada de code scanning?",
      options: ["Evita por completo los falsos positivos", "Permite empezar rápidamente con una configuración mínima", "Reemplaza todas las pruebas unitarias", "Solo funciona en repositorios archivados"],
      correct: 1,
      explanation: "La configuración predeterminada ayuda a habilitar análisis rápidamente sin mucha personalización."
    },
    {
      id: 'q4',
      question: "¿Qué detecta Secret Scanning?",
      options: ["Ramas obsoletas", "Credenciales o secretos expuestos en el repositorio", "Errores de compilación", "Conflictos de fusión"],
      correct: 1,
      explanation: "Secret Scanning busca claves, tokens y otros secretos comprometidos."
    },
    {
      id: 'q5',
      question: "¿Qué hace Push Protection en secret scanning?",
      options: ["Impide pushes que contienen secretos detectados", "Protege contra commits vacíos", "Cifra automáticamente cada commit", "Elimina el historial remoto"],
      correct: 0,
      explanation: "Push Protection intenta detener el envío de secretos antes de que lleguen al repositorio."
    },
    {
      id: 'q6',
      question: "¿Para qué sirve el Dependency Graph?",
      options: ["Para dibujar diagramas UML", "Para mostrar dependencias y relaciones del proyecto", "Para ocultar paquetes inseguros", "Para asignar revisores de PR"],
      correct: 1,
      explanation: "El grafo de dependencias ayuda a entender qué paquetes usa el proyecto."
    },
    {
      id: 'q7',
      question: "¿Qué informa Dependabot Alerts?",
      options: ["Vulnerabilidades conocidas en dependencias usadas", "Cambios de permisos en ramas", "Errores tipográficos en README", "Fallas del editor local"],
      correct: 0,
      explanation: "Dependabot Alerts avisa cuando una dependencia tiene una vulnerabilidad conocida."
    },
    {
      id: 'q8',
      question: "¿Qué hacen las Dependabot Security Updates?",
      options: ["Crean PR para actualizar dependencias vulnerables a versiones seguras", "Borran dependencias sin preguntar", "Reescriben el historial Git", "Desactivan los workflows de Actions"],
      correct: 0,
      explanation: "Dependabot puede abrir pull requests para corregir dependencias vulnerables."
    },
    {
      id: 'q9',
      question: "¿En qué se diferencian las version updates de Dependabot respecto a las security updates?",
      options: ["Las version updates buscan mantener dependencias al día aunque no haya una vulnerabilidad", "Las version updates solo funcionan en repositorios privados", "Las version updates deshabilitan el dependency graph", "No existe diferencia entre ambas"],
      correct: 0,
      explanation: "Las version updates actualizan versiones por mantenimiento general, no solo por seguridad."
    },
    {
      id: 'q10',
      question: "¿Para qué sirve SARIF en GitHub?",
      options: ["Para definir permisos de organización", "Para importar resultados de herramientas de análisis estático", "Para publicar paquetes npm", "Para configurar Pages"],
      correct: 1,
      explanation: "SARIF es un formato estándar para reportar hallazgos de análisis estático."
    },
    {
      id: 'q11',
      question: "¿Qué archivo suele documentar cómo reportar vulnerabilidades de seguridad?",
      options: ["SECURITY.md", "LICENSE.md", "CONTRIBUTING.md", "CODEOWNERS"],
      correct: 0,
      explanation: "SECURITY.md suele explicar políticas y canales de reporte de vulnerabilidades."
    },
    {
      id: 'q12',
      question: "¿Qué es GitHub Advisory Database?",
      options: ["Una base de datos de vulnerabilidades y avisos de seguridad", "Una lista de issues cerrados", "Un registro de commits firmados", "Una colección de plantillas Markdown"],
      correct: 0,
      explanation: "GitHub Advisory Database centraliza información sobre vulnerabilidades conocidas."
    },
    {
      id: 'q13',
      question: "¿Qué permite Private Vulnerability Reporting?",
      options: ["Reportar una vulnerabilidad de forma no pública al mantenedor", "Hacer público cualquier secreto detectado", "Desactivar Dependabot", "Fusionar PR sin revisión"],
      correct: 0,
      explanation: "Esta función facilita reportar fallos de seguridad sin exponerlos públicamente."
    },
    {
      id: 'q14',
      question: "¿Qué ofrece Security Overview en un entorno organizacional?",
      options: ["Un panel consolidado del estado de seguridad", "Una copia de seguridad automática de cada repositorio", "Un editor de dependencias", "Un reemplazo de GitHub Projects"],
      correct: 0,
      explanation: "Security Overview ayuda a ver riesgos y cobertura de seguridad en varios repositorios."
    },
    {
      id: 'q15',
      question: "¿Puede code scanning ejecutarse sobre pull requests?",
      options: ["Sí, para detectar problemas antes de fusionar cambios", "No, solo después de publicar una release", "Solo en forks privados", "Solo si el repositorio no usa Git"],
      correct: 0,
      explanation: "Analizar PR permite encontrar problemas de seguridad antes de que entren a la rama principal."
    },
    {
      id: 'q16',
      question: "¿Qué ocurre a menudo cuando una corrección elimina el patrón vulnerable detectado por code scanning?",
      options: ["La alerta puede cerrarse al volver a analizarse el código", "GitHub borra automáticamente el repositorio", "Se desactiva secret scanning", "El commit se convierte en tag"],
      correct: 0,
      explanation: "Cuando el problema desaparece en análisis posteriores, la alerta puede resolverse."
    },
    {
      id: 'q17',
      question: "¿Dónde se consultan normalmente alertas de seguridad de un repositorio?",
      options: ["En la pestaña Security", "En la pestaña Insights únicamente", "En el archivo .gitignore", "En GitHub Pages"],
      correct: 0,
      explanation: "La pestaña Security centraliza funciones y alertas relacionadas con seguridad."
    },
    {
      id: 'q18',
      question: "¿Qué afirmación es correcta sobre muchos análisis de seguridad en repositorios públicos?",
      options: ["No están disponibles nunca", "Varias capacidades están disponibles ampliamente para repositorios públicos", "Solo funcionan en Enterprise Server", "Exigen autoalojamiento obligatorio"],
      correct: 1,
      explanation: "GitHub ofrece varias capacidades de seguridad de forma amplia en repositorios públicos."
    },
    {
      id: 'q19',
      question: "¿Puede GitHub mostrar resultados de herramientas de análisis distintas de CodeQL?",
      options: ["Sí, por ejemplo mediante carga de resultados SARIF", "No, GitHub solo acepta errores de compilación", "Solo si se convierten a Markdown", "Solo en la app móvil"],
      correct: 0,
      explanation: "GitHub puede ingerir resultados de herramientas externas usando formatos compatibles como SARIF."
    },
    {
      id: 'q20',
      question: "¿Por qué una dependencia transitiva también importa para seguridad?",
      options: ["Porque nunca afecta al proyecto", "Porque una vulnerabilidad en dependencias indirectas también puede impactar al software", "Porque Git no rastrea dependencias directas", "Porque solo las dependencias transitivas pueden corregirse"],
      correct: 1,
      explanation: "Las dependencias indirectas forman parte de la cadena de suministro y pueden introducir riesgos."
    }
  ],
  'module-05': [
    {
      id: 'q1',
      question: "¿Qué describe mejor a GitHub Copilot?",
      options: ["Un asistente de IA para ayudar a programar", "Un sistema de control de versiones distribuido", "Una base de datos para issues", "Un servicio de despliegue web"],
      correct: 0,
      explanation: "GitHub Copilot es una herramienta de asistencia basada en IA para tareas de desarrollo."
    },
    {
      id: 'q2',
      question: "¿Qué tipo de contexto usa Copilot para generar sugerencias?",
      options: ["Comentarios, código cercano y archivos relevantes abiertos", "Solo el nombre del repositorio", "Solo la hora del sistema", "Únicamente los commits firmados"],
      correct: 0,
      explanation: "Copilot se apoya en el contexto disponible del editor y del prompt."
    },
    {
      id: 'q3',
      question: "¿Cuál es un uso típico de Copilot dentro de un editor?",
      options: ["Sugerir código en línea mientras escribes", "Reemplazar el sistema operativo", "Ejecutar builds sin comandos", "Eliminar automáticamente ramas remotas"],
      correct: 0,
      explanation: "Copilot puede ofrecer completado de líneas, bloques o funciones enteras."
    },
    {
      id: 'q4',
      question: "¿Qué suele hacerse cuando una sugerencia de Copilot es correcta y útil?",
      options: ["Aceptarla en el editor y luego revisarla", "Ignorarla siempre", "Cerrar el repositorio", "Cambiar la licencia del proyecto"],
      correct: 0,
      explanation: "Las sugerencias útiles pueden aceptarse, pero deben revisarse como cualquier cambio."
    },
    {
      id: 'q5',
      question: "Si una sugerencia de Copilot no encaja con lo que necesitas, ¿qué conviene hacer?",
      options: ["Rechazarla o seguir escribiendo para pedir otra", "Publicarla igualmente", "Desinstalar Git", "Borrar el historial del proyecto"],
      correct: 0,
      explanation: "Copilot ofrece ayuda opcional; puedes ignorar una sugerencia y continuar."
    },
    {
      id: 'q6',
      question: "¿Para qué sirve Copilot Chat?",
      options: ["Para conversar en lenguaje natural sobre el código y pedir ayuda", "Para administrar facturas de GitHub", "Para reemplazar pull requests", "Para almacenar secretos del entorno"],
      correct: 0,
      explanation: "Copilot Chat permite pedir explicaciones, cambios y sugerencias conversacionales."
    },
    {
      id: 'q7',
      question: "¿Qué paso suele formar parte de la configuración inicial de Copilot en un IDE?",
      options: ["Instalar la extensión o integración y autenticarse con GitHub", "Crear un nuevo repositorio obligatorio", "Desactivar GitHub Actions", "Configurar una IP allowlist"],
      correct: 0,
      explanation: "Para usar Copilot normalmente se instala su integración y se inicia sesión."
    },
    {
      id: 'q8',
      question: "¿Cuál de los siguientes entornos es compatible habitualmente con GitHub Copilot?",
      options: ["VS Code, Visual Studio, JetBrains y otras integraciones compatibles", "Solo Bloc de notas de Windows", "Solo GitHub Mobile", "Solo navegadores sin editor"],
      correct: 0,
      explanation: "Copilot ofrece soporte en varios IDEs y editores populares."
    },
    {
      id: 'q9',
      question: "¿Qué diferencia destaca entre Copilot Individual y Copilot Business?",
      options: ["Business añade administración centralizada y políticas para organizaciones", "Individual permite administrar equipos grandes y Business no", "Business no funciona en editores", "Individual requiere GitHub Enterprise Server siempre"],
      correct: 0,
      explanation: "Copilot Business incorpora controles y gobierno para organizaciones."
    },
    {
      id: 'q10',
      question: "¿Qué idea se asocia a GitHub Copilot X?",
      options: ["La ampliación de Copilot con chat y experiencias más integradas en el flujo de desarrollo", "Un reemplazo de Git por IA", "Una edición de GitHub Desktop sin internet", "Un motor para facturación de Actions"],
      correct: 0,
      explanation: "Copilot X se usó para describir capacidades ampliadas alrededor de Copilot."
    },
    {
      id: 'q11',
      question: "¿Puede Copilot ayudar a generar pruebas unitarias?",
      options: ["Sí, puede sugerir casos de prueba y código de ejemplo", "No, solo genera títulos de issues", "Solo en repositorios públicos", "Solo si no existe código previo"],
      correct: 0,
      explanation: "Una de sus utilidades frecuentes es proponer pruebas a partir del código existente."
    },
    {
      id: 'q12',
      question: "¿Puede Copilot ayudar a redactar comentarios, docstrings o documentación?",
      options: ["Sí, también puede asistir con documentación técnica", "No, solo trabaja con binarios", "Solo si el archivo es YAML", "Solo después de crear un release"],
      correct: 0,
      explanation: "Copilot puede ayudar tanto con código como con explicaciones y documentación."
    },
    {
      id: 'q13',
      question: "¿Qué tipo de prompt suele producir mejores resultados en Copilot?",
      options: ["Uno claro, específico y con restricciones explícitas", "Uno ambiguo sin contexto", "Uno formado solo por el nombre de la rama", "Uno que mezcle tareas no relacionadas"],
      correct: 0,
      explanation: "Los prompts precisos ayudan a orientar mejor la respuesta de la IA."
    },
    {
      id: 'q14',
      question: "¿Por qué no conviene aceptar código de Copilot sin revisión?",
      options: ["Porque puede contener errores lógicos, de seguridad o de estilo", "Porque siempre está incompleto por diseño", "Porque solo funciona en texto plano", "Porque desactiva el control de versiones"],
      correct: 0,
      explanation: "Las sugerencias deben validarse igual que cualquier otra contribución de código."
    },
    {
      id: 'q15',
      question: "¿Puede Copilot ayudar a explicar código existente?",
      options: ["Sí, puede resumir y explicar funciones, clases o archivos", "No, solo crea repositorios", "Solo si el código está en producción", "Solo si el archivo está vacío"],
      correct: 0,
      explanation: "Explicar código heredado o desconocido es un uso común de Copilot Chat."
    },
    {
      id: 'q16',
      question: "¿Qué información adicional suele ser útil al pedir ayuda para depurar con Copilot?",
      options: ["Mensajes de error, stack traces y comportamiento esperado", "Solo el color del tema del editor", "Solo el número de estrellas del repositorio", "Únicamente el nombre de usuario"],
      correct: 0,
      explanation: "Los síntomas concretos mejoran el contexto para sugerir diagnósticos y soluciones."
    },
    {
      id: 'q17',
      question: "¿Cómo puede ayudar Copilot durante una refactorización?",
      options: ["Sugiriendo versiones más legibles o reutilizables del código", "Fusionando ramas protegidas sin aprobación", "Cambiando automáticamente la facturación", "Eliminando el historial de commits"],
      correct: 0,
      explanation: "Copilot puede proponer reorganización, simplificación y mejoras estructurales."
    },
    {
      id: 'q18',
      question: "¿Qué ventaja tiene el completado multilínea de Copilot?",
      options: ["Puede proponer bloques completos de código coherentes con el contexto", "Solo cambia el nombre de variables", "Evita cualquier necesidad de pruebas", "Funciona únicamente con Markdown"],
      correct: 0,
      explanation: "Copilot puede sugerir funciones, condicionales o estructuras enteras, no solo una palabra."
    },
    {
      id: 'q19',
      question: "¿Qué práctica de uso responsable aplica a Copilot?",
      options: ["Revisar, probar y asegurar el código sugerido antes de integrarlo", "Delegar todas las decisiones críticas a la IA", "Aceptar cualquier sugerencia automáticamente", "Asumir que toda salida es legalmente perfecta"],
      correct: 0,
      explanation: "La supervisión humana sigue siendo esencial al usar herramientas de IA."
    },
    {
      id: 'q20',
      question: "¿Qué valor ofrece Copilot para equipos además de generar código?",
      options: ["Acelerar tareas de aprendizaje, documentación, pruebas y revisión técnica", "Reemplazar por completo los procesos de ingeniería", "Eliminar la necesidad de repositorios", "Sustituir la autenticación de GitHub"],
      correct: 0,
      explanation: "Copilot puede apoyar múltiples actividades del ciclo de desarrollo, no solo escribir código."
    }
  ],
  'module-06': [
    {
      id: 'q1',
      question: "¿Qué es un GitHub Codespace?",
      options: ["Un entorno de desarrollo en la nube listo para usar", "Un tipo de pull request", "Una política de seguridad", "Una base de datos de dependencias"],
      correct: 0,
      explanation: "Codespaces proporciona un entorno de desarrollo hospedado y configurable."
    },
    {
      id: 'q2',
      question: "¿Qué archivo suele definir la configuración del contenedor en Codespaces?",
      options: ["devcontainer.json", "package-lock.json", ".gitconfig", "README.md"],
      correct: 0,
      explanation: "devcontainer.json describe cómo construir y personalizar el entorno."
    },
    {
      id: 'q3',
      question: "¿Desde dónde puede abrirse un Codespace?",
      options: ["Solo desde el navegador", "Desde el navegador o herramientas compatibles como VS Code", "Solo desde GitHub Mobile", "Solo desde GitHub Desktop"],
      correct: 1,
      explanation: "Codespaces puede usarse en navegador y también integrarse con clientes compatibles."
    },
    {
      id: 'q4',
      question: "¿Qué objetivo tienen los prebuilds en Codespaces?",
      options: ["Aumentar el número de conflictos", "Reducir el tiempo de arranque y configuración del entorno", "Eliminar el repositorio original", "Sustituir los commits por imágenes"],
      correct: 1,
      explanation: "Los prebuilds preparan parte del entorno con antelación para acelerar el inicio."
    },
    {
      id: 'q5',
      question: "¿Qué permite elegir el tipo de máquina de un Codespace?",
      options: ["La cantidad de recursos como CPU y memoria", "El idioma del README", "La licencia del repositorio", "La rama predeterminada de Git"],
      correct: 0,
      explanation: "El tipo de máquina define recursos disponibles para el entorno."
    },
    {
      id: 'q6',
      question: "¿Para qué sirve el reenvío de puertos en Codespaces?",
      options: ["Para acceder a servicios en ejecución dentro del codespace", "Para renombrar ramas remotas", "Para desactivar Git", "Para ocultar secretos del repositorio"],
      correct: 0,
      explanation: "El port forwarding expone aplicaciones locales del codespace para poder probarlas."
    },
    {
      id: 'q7',
      question: "¿Cómo deben manejarse los secretos en Codespaces?",
      options: ["Guardándolos en texto plano en el repositorio", "Usando mecanismos de secretos o variables seguras del entorno", "Escribiéndolos en README.md", "Añadiéndolos al nombre de la rama"],
      correct: 1,
      explanation: "Los secretos no deben almacenarse en el código; deben gestionarse con funciones seguras."
    },
    {
      id: 'q8',
      question: "¿Para qué sirven los dotfiles en Codespaces?",
      options: ["Para personalizar herramientas y preferencias del entorno", "Para bloquear todos los pushes", "Para crear forks automáticamente", "Para desinstalar Git"],
      correct: 0,
      explanation: "Los dotfiles permiten aplicar configuraciones personales al entorno de desarrollo."
    },
    {
      id: 'q9',
      question: "¿Qué diferencia hay entre detener y eliminar un Codespace?",
      options: ["Detenerlo pausa el uso; eliminarlo borra el entorno", "No hay ninguna diferencia", "Detenerlo borra el repositorio remoto", "Eliminarlo mantiene el almacenamiento intacto siempre"],
      correct: 0,
      explanation: "Detener conserva el codespace para luego retomarlo; eliminar lo suprime."
    },
    {
      id: 'q10',
      question: "¿Qué suele pasar con el almacenamiento al detener un Codespace?",
      options: ["Se pierde inmediatamente todo el trabajo", "El almacenamiento persiste hasta que se elimine el codespace", "Se publica como release", "Se convierte en un gist"],
      correct: 1,
      explanation: "Normalmente los datos del codespace siguen disponibles tras detenerlo."
    },
    {
      id: 'q11',
      question: "¿Cuándo puede ser útil reconstruir o rebuild el contenedor de un Codespace?",
      options: ["Cuando cambia la configuración del entorno o sus dependencias base", "Solo para cambiar el nombre del repositorio", "Para ver el historial Git", "Para cerrar un issue"],
      correct: 0,
      explanation: "Rebuild aplica cambios en la definición del contenedor o reinstala componentes base."
    },
    {
      id: 'q12',
      question: "¿Puede crearse un Codespace a partir de una rama concreta?",
      options: ["Sí, puede iniciarse desde una rama específica", "No, solo desde tags", "Solo desde forks públicos", "Solo desde la rama eliminada"],
      correct: 0,
      explanation: "Es habitual crear un codespace sobre la rama en la que se va a trabajar."
    },
    {
      id: 'q13',
      question: "¿Qué ventaja aporta Codespaces en incorporación de nuevos miembros al equipo?",
      options: ["Ofrece entornos consistentes y reduce configuración local", "Evita usar control de versiones", "Impide ejecutar pruebas", "Elimina la necesidad de dependencias"],
      correct: 0,
      explanation: "Un entorno preconfigurado reduce fricción y acelera el inicio del trabajo."
    },
    {
      id: 'q14',
      question: "¿Cómo pueden preinstalarse extensiones o herramientas en un Codespace?",
      options: ["Mediante la configuración del dev container", "Solo editando el archivo LICENSE", "No es posible", "Únicamente desde la app móvil"],
      correct: 0,
      explanation: "La configuración del entorno puede incluir extensiones y herramientas necesarias."
    },
    {
      id: 'q15',
      question: "¿Qué factor influye directamente en el costo de Codespaces?",
      options: ["La cantidad de stars del repositorio", "Los recursos consumidos y el tiempo de uso", "El número de issues abiertos", "La cantidad de etiquetas Git"],
      correct: 1,
      explanation: "La facturación depende del cómputo y almacenamiento consumidos."
    },
    {
      id: 'q16',
      question: "¿Qué puede ocurrir con un Codespace inactivo según la configuración?",
      options: ["Puede suspenderse o detenerse tras un tiempo de inactividad", "Se convierte automáticamente en fork", "Se fusiona con la rama principal", "Pierde el historial Git del repositorio"],
      correct: 0,
      explanation: "Los tiempos de inactividad ayudan a controlar consumo y costos."
    },
    {
      id: 'q17',
      question: "¿Qué describe mejor el aislamiento de Codespaces?",
      options: ["Es un entorno de desarrollo separado del equipo local", "Comparte directamente todos los procesos del sistema anfitrión", "No tiene conexión con GitHub", "Solo funciona sin contenedores"],
      correct: 0,
      explanation: "Codespaces ejecuta el entorno de desarrollo de forma aislada en la nube."
    },
    {
      id: 'q18',
      question: "¿Cómo se guardan los cambios hechos dentro de un Codespace normalmente?",
      options: ["Usando Git para hacer commit y push al repositorio", "Reiniciando el navegador", "Editando únicamente la página del repositorio", "Cerrando el puerto reenviado"],
      correct: 0,
      explanation: "Dentro del codespace se trabaja con Git como en cualquier entorno de desarrollo."
    },
    {
      id: 'q19',
      question: "¿Qué permisos suele usar un Codespace al acceder al repositorio?",
      options: ["Los permisos asociados a la cuenta y configuración correspondiente", "Siempre permisos de propietario absoluto", "Ningún permiso sobre GitHub", "Permisos tomados del último commit"],
      correct: 0,
      explanation: "El acceso del codespace depende de la identidad y permisos con que se crea."
    },
    {
      id: 'q20',
      question: "¿Qué beneficio adicional ofrecen los prebuilds a equipos grandes?",
      options: ["Uniformidad y menor espera al abrir entornos repetidamente", "Eliminación total del costo de cómputo", "Conversión automática de issues en releases", "Desactivación de GitHub Actions"],
      correct: 0,
      explanation: "Los prebuilds mejoran consistencia y velocidad en entornos usados con frecuencia."
    }
  ],
  'module-07': [
    {
      id: 'q1',
      question: "¿Para qué sirve GitHub Projects?",
      options: ["Para planificar y seguir trabajo", "Para reemplazar Git local", "Para hospedar paquetes npm", "Para crear cuentas de usuario"],
      correct: 0,
      explanation: "Projects ayuda a organizar tareas, prioridades y progreso del trabajo."
    },
    {
      id: 'q2',
      question: "¿Qué tipo de elementos puede incluir un proyecto de GitHub?",
      options: ["Issues, pull requests y draft issues", "Solo commits firmados", "Solo etiquetas Git", "Solo archivos Markdown"],
      correct: 0,
      explanation: "Projects puede reunir diferentes tipos de trabajo en un mismo tablero."
    },
    {
      id: 'q3',
      question: "¿Qué son las vistas en GitHub Projects?",
      options: ["Copias físicas del repositorio", "Formas de visualizar los mismos elementos con distintos enfoques", "Permisos de lectura", "Versiones antiguas del proyecto"],
      correct: 1,
      explanation: "Las vistas permiten adaptar cómo se observa y organiza el mismo conjunto de items."
    },
    {
      id: 'q4',
      question: "¿Qué ventaja ofrece una vista de tabla en Projects?",
      options: ["Permite ordenar, filtrar y editar campos de forma estructurada", "Oculta todos los metadatos", "Solo muestra imágenes", "Impide usar automatizaciones"],
      correct: 0,
      explanation: "La tabla es útil para trabajo detallado con columnas y campos."
    },
    {
      id: 'q5',
      question: "¿Qué representa mejor una vista de tablero o board?",
      options: ["Columnas por estado o categoría para mover trabajo visualmente", "Un sitio web estático del proyecto", "Un historial de commits", "Un informe de facturación"],
      correct: 0,
      explanation: "La vista tipo board organiza tarjetas en columnas como To do, In progress y Done."
    },
    {
      id: 'q6',
      question: "¿Cuándo resulta útil la vista roadmap?",
      options: ["Cuando se quiere seguir trabajo a lo largo del tiempo", "Solo para editar README", "Para crear tags automáticamente", "Para reemplazar issues"],
      correct: 0,
      explanation: "Roadmap ayuda a visualizar iniciativas según fechas o iteraciones."
    },
    {
      id: 'q7',
      question: "¿Qué es un campo personalizado en GitHub Projects?",
      options: ["Un archivo oculto del repositorio", "Un dato adicional definido para clasificar o seguir items", "Una rama protegida", "Una acción de seguridad"],
      correct: 1,
      explanation: "Los campos personalizados permiten adaptar el proyecto al proceso del equipo."
    },
    {
      id: 'q8',
      question: "¿Para qué sirve un campo de iteración?",
      options: ["Para agrupar trabajo en periodos repetitivos, como sprints", "Para cifrar issues", "Para almacenar binarios grandes", "Para fusionar ramas automáticamente"],
      correct: 0,
      explanation: "Las iteraciones son útiles para planificaciones por ciclos temporales."
    },
    {
      id: 'q9',
      question: "¿Qué permite un campo de selección única?",
      options: ["Elegir un valor entre varias opciones predefinidas", "Adjuntar cualquier archivo ejecutable", "Escribir múltiples párrafos enriquecidos", "Cambiar el propietario del repositorio"],
      correct: 0,
      explanation: "Los campos single select ayudan a estandarizar estados, prioridades u otras categorías."
    },
    {
      id: 'q10',
      question: "¿Qué es un draft issue en Projects?",
      options: ["Una tarea preliminar creada directamente en el proyecto sin issue completo aún", "Un commit no enviado", "Una rama temporal oculta", "Un tipo de alerta de seguridad"],
      correct: 0,
      explanation: "Los draft issues sirven para capturar ideas o trabajo antes de formalizarlo."
    },
    {
      id: 'q11',
      question: "¿Qué aportan las automatizaciones o workflows en Projects?",
      options: ["Actualizan campos o agregan items según reglas y eventos", "Borran el historial Git del repositorio", "Sustituyen todos los pull requests", "Impiden usar filtros"],
      correct: 0,
      explanation: "Las automatizaciones reducen trabajo manual en la gestión del proyecto."
    },
    {
      id: 'q12',
      question: "¿Qué ejemplo describe una automatización útil en Projects?",
      options: ["Cambiar el estado a Hecho cuando se cierra un issue", "Desactivar GitHub Pages al crear un PR", "Eliminar estrellas del repositorio", "Renombrar al autor de commits"],
      correct: 0,
      explanation: "Las reglas pueden sincronizar el estado del proyecto con eventos reales del trabajo."
    },
    {
      id: 'q13',
      question: "¿Para qué sirven los filtros en una vista de Projects?",
      options: ["Para mostrar solo items que cumplen ciertas condiciones", "Para borrar campos personalizados", "Para exportar el repositorio a ZIP", "Para compilar el proyecto"],
      correct: 0,
      explanation: "Los filtros ayudan a concentrarse en subconjuntos relevantes de trabajo."
    },
    {
      id: 'q14',
      question: "¿Qué permite agrupar elementos en una vista de proyecto?",
      options: ["Organizarlos visualmente por un campo como estado o responsable", "Convertirlos en ramas Git", "Firmar digitalmente cada issue", "Publicarlos en GitHub Pages"],
      correct: 0,
      explanation: "Agrupar muestra los items ordenados por categorías útiles para el equipo."
    },
    {
      id: 'q15',
      question: "¿Puede un proyecto de GitHub seguir trabajo de varios repositorios?",
      options: ["Sí, puede centralizar trabajo de múltiples repositorios", "No, solo admite un archivo", "Solo en cuentas personales sin organización", "Solo si no hay pull requests"],
      correct: 0,
      explanation: "Projects puede servir como capa unificada de planificación entre repositorios."
    },
    {
      id: 'q16',
      question: "¿Dónde puede existir un GitHub Project moderno?",
      options: ["A nivel de usuario u organización", "Solo dentro de un commit", "Únicamente en GitHub Desktop", "Solo en la aplicación móvil"],
      correct: 0,
      explanation: "Los proyectos pueden crearse en ámbitos como usuarios u organizaciones."
    },
    {
      id: 'q17',
      question: "¿Qué ventaja tiene vincular issues y pull requests a un proyecto?",
      options: ["Mejora la trazabilidad entre planificación y ejecución", "Elimina la necesidad de ramas", "Convierte automáticamente el repositorio en público", "Desactiva notificaciones"],
      correct: 0,
      explanation: "Relacionar trabajo y cambios facilita seguimiento del progreso real."
    },
    {
      id: 'q18',
      question: "¿Qué uso típico tiene un campo de estado en Projects?",
      options: ["Indicar fase del trabajo, como Pendiente o En progreso", "Guardar tokens secretos", "Mostrar la IP del servidor", "Definir la licencia del repositorio"],
      correct: 0,
      explanation: "El estado permite ver rápidamente en qué etapa está cada item."
    },
    {
      id: 'q19',
      question: "¿Por qué guardar varias vistas en un proyecto puede ser útil?",
      options: ["Porque distintos roles necesitan perspectivas diferentes del mismo trabajo", "Porque cada vista crea un repositorio nuevo", "Porque Git exige una vista por rama", "Porque sin varias vistas no se pueden usar issues"],
      correct: 0,
      explanation: "Un mismo proyecto puede requerir vistas para planificación, seguimiento ejecutivo o trabajo diario."
    },
    {
      id: 'q20',
      question: "¿Qué aspecto de un proyecto puede controlarse según el contexto?",
      options: ["Su visibilidad y quién puede acceder o editarlo", "La sintaxis básica de Git", "La temperatura de la CPU", "El tipo de licencia de todos los repositorios automáticamente"],
      correct: 0,
      explanation: "Los proyectos pueden configurarse con diferentes niveles de acceso y visibilidad."
    }
  ],
  'module-08': [
    {
      id: 'q1',
      question: "¿Qué sintaxis crea un encabezado de nivel 1 en Markdown?",
      options: ["# Título", "* Título", "> Título", "[Título]"],
      correct: 0,
      explanation: "Un símbolo # al inicio crea un encabezado de nivel 1."
    },
    {
      id: 'q2',
      question: "¿Cómo se escribe texto en negrita en Markdown?",
      options: ["**texto**", "_texto_", "`texto`", "> texto"],
      correct: 0,
      explanation: "La negrita suele escribirse rodeando el texto con dos asteriscos."
    },
    {
      id: 'q3',
      question: "¿Cómo se escribe texto en cursiva en Markdown?",
      options: ["_texto_", "~~texto~~", "# texto", "[texto](url)"],
      correct: 0,
      explanation: "La cursiva puede escribirse con guiones bajos o asteriscos simples."
    },
    {
      id: 'q4',
      question: "¿Cuál es la sintaxis correcta para un enlace?",
      options: ["[texto](https://ejemplo.com)", "(texto)[https://ejemplo.com]", "{texto}(https://ejemplo.com)", "<texto><https://ejemplo.com>"],
      correct: 0,
      explanation: "Los enlaces usan el formato texto entre corchetes y URL entre paréntesis."
    },
    {
      id: 'q5',
      question: "¿Cómo se inserta una imagen en Markdown?",
      options: ["![alt](imagen.png)", "[img](imagen.png)", "#[imagen.png]", "`imagen.png`"],
      correct: 0,
      explanation: "Las imágenes usan la misma sintaxis que enlaces, precedida por !."
    },
    {
      id: 'q6',
      question: "¿Qué sintaxis representa código en línea?",
      options: ["`codigo`", "```codigo```", "**codigo**", "> codigo"],
      correct: 0,
      explanation: "El código en línea se encierra entre comillas invertidas simples."
    },
    {
      id: 'q7',
      question: "¿Cómo se crea un bloque de código cercado?",
      options: ["Con triple comilla invertida antes y después", "Con tres almohadillas", "Con doble guion bajo", "Con corchetes dobles"],
      correct: 0,
      explanation: "Los bloques de código usan normalmente tres comillas invertidas al inicio y fin."
    },
    {
      id: 'q8',
      question: "¿Qué símbolo puede iniciar una lista no ordenada en Markdown?",
      options: ["-", "@", "=", "\\"],
      correct: 0,
      explanation: "Las listas no ordenadas pueden comenzar con -, * o +."
    },
    {
      id: 'q9',
      question: "¿Cómo se inicia normalmente una lista ordenada?",
      options: ["1. Elemento", "- Elemento", "# Elemento", "> Elemento"],
      correct: 0,
      explanation: "Las listas ordenadas se escriben con números seguidos de punto."
    },
    {
      id: 'q10',
      question: "¿Qué símbolo se usa para una cita o blockquote?",
      options: [">", "*", "!", "&"],
      correct: 0,
      explanation: "El signo mayor que crea bloques de cita."
    },
    {
      id: 'q11',
      question: "¿Qué sintaxis crea una task list en GitHub Flavored Markdown?",
      options: ["- [ ] Tarea", "* { } Tarea", "[ ] - Tarea", "> [ ] Tarea"],
      correct: 0,
      explanation: "Las listas de tareas usan casillas como - [ ] o - [x]."
    },
    {
      id: 'q12',
      question: "¿Qué se usa normalmente para crear tablas en GitHub Flavored Markdown?",
      options: ["Barras verticales y una fila separadora", "Solo comas", "Solo tabulaciones reales", "Etiquetas XML obligatorias"],
      correct: 0,
      explanation: "Las tablas se construyen con | y una línea de separación con guiones."
    },
    {
      id: 'q13',
      question: "¿Cómo se escapa un carácter especial en Markdown?",
      options: ["Anteponiendo una barra invertida", "Encerrándolo entre llaves", "Escribiéndolo en mayúsculas", "Duplicándolo tres veces"],
      correct: 0,
      explanation: "La barra invertida evita que un carácter se interprete con significado Markdown."
    },
    {
      id: 'q14',
      question: "¿Qué suele crear una línea horizontal en Markdown?",
      options: ["---", "###", "___texto___", "[---]"],
      correct: 0,
      explanation: "Tres guiones o asteriscos en línea separada suelen generar una regla horizontal."
    },
    {
      id: 'q15',
      question: "¿Cómo se escribe texto tachado en GitHub Flavored Markdown?",
      options: ["~~texto~~", "__texto__", "`texto`", ">texto<"],
      correct: 0,
      explanation: "El tachado se representa rodeando el texto con dos tildes."
    },
    {
      id: 'q16',
      question: "¿Qué ventaja tienen los enlaces relativos en un repositorio GitHub?",
      options: ["Permiten enlazar archivos internos sin depender del dominio completo", "Funcionan solo fuera de GitHub", "Reemplazan a los enlaces absolutos en internet", "Crean ramas automáticamente"],
      correct: 0,
      explanation: "Los enlaces relativos facilitan mover documentación dentro del repositorio."
    },
    {
      id: 'q17',
      question: "¿Cómo se suele anidar una lista dentro de otra en Markdown?",
      options: ["Usando sangría antes del elemento hijo", "Repitiendo el título del documento", "Añadiendo una URL", "Escribiendo el texto en mayúsculas"],
      correct: 0,
      explanation: "La indentación ayuda a expresar jerarquía entre elementos de lista."
    },
    {
      id: 'q18',
      question: "¿Para qué sirve indicar un lenguaje tras las comillas invertidas de un bloque de código?",
      options: ["Para habilitar resaltado de sintaxis", "Para comprimir el archivo", "Para convertir el bloque en ejecutable", "Para ocultar el contenido a GitHub"],
      correct: 0,
      explanation: "Especificar el lenguaje mejora la presentación y legibilidad del código."
    },
    {
      id: 'q19',
      question: "¿Cuál de las siguientes es una extensión típica de GitHub Flavored Markdown?",
      options: ["Tablas y listas de tareas", "Compilación de binarios", "Gestión de ramas remotas", "Cifrado de secretos"],
      correct: 0,
      explanation: "GitHub Flavored Markdown añade funciones útiles como tablas y task lists."
    },
    {
      id: 'q20',
      question: "¿Qué ocurre con un README.md en la página principal de un repositorio GitHub?",
      options: ["GitHub suele renderizarlo automáticamente", "Se ignora por completo", "Solo puede verse descargándolo", "Sustituye a la licencia del proyecto"],
      correct: 0,
      explanation: "GitHub muestra el README renderizado para presentar el proyecto de forma legible."
    }
  ],
  'module-09': [
    {
      id: 'q1',
      question: "¿Cuál es normalmente el primer paso para contribuir a un proyecto open source en GitHub si no tienes permisos de escritura?",
      options: ["Hacer un fork del repositorio", "Eliminar la rama principal", "Crear un release", "Cambiar la licencia"],
      correct: 0,
      explanation: "Cuando no tienes permisos directos, lo habitual es hacer un fork para trabajar en tu propia copia."
    },
    {
      id: 'q2',
      question: "¿Qué archivo suele explicar cómo proponer cambios en un proyecto open source?",
      options: ["CONTRIBUTING.md", "package-lock.json", "LICENSE.log", "settings.json"],
      correct: 0,
      explanation: "CONTRIBUTING.md suele incluir reglas, flujo de trabajo y requisitos para colaborar."
    },
    {
      id: 'q3',
      question: "¿Para qué sirve abrir un issue antes de implementar un cambio grande?",
      options: ["Para discutir la propuesta y validar el enfoque", "Para fusionar automáticamente el código", "Para cambiar los permisos del repositorio", "Para crear una nueva organización"],
      correct: 0,
      explanation: "Abrir un issue ayuda a alinear expectativas antes de invertir tiempo en el desarrollo."
    },
    {
      id: 'q4',
      question: "¿Qué información indica cómo puede usarse, modificarse y redistribuirse un proyecto?",
      options: ["La licencia del repositorio", "La cantidad de stars", "El número de ramas", "El tema visual"],
      correct: 0,
      explanation: "La licencia define los términos legales de uso, modificación y distribución."
    },
    {
      id: 'q5',
      question: "¿Cuál es una buena práctica al enviar un pull request a un proyecto open source?",
      options: ["Mantener el cambio enfocado y bien descrito", "Incluir cambios no relacionados para ahorrar tiempo", "Hacer merge directamente en main", "Borrar el historial de commits"],
      correct: 0,
      explanation: "Los PR pequeños y bien explicados facilitan la revisión y aumentan la probabilidad de aceptación."
    },
    {
      id: 'q6',
      question: "¿Qué suele indicar la etiqueta \"good first issue\"?",
      options: ["Que el issue es adecuado para nuevos contribuidores", "Que el issue ya fue resuelto", "Que el issue solo lo puede cerrar un administrador", "Que el issue requiere acceso de propietario"],
      correct: 0,
      explanation: "La etiqueta señala tareas accesibles para personas que empiezan a contribuir."
    },
    {
      id: 'q7',
      question: "¿Qué documento describe expectativas de comportamiento en la comunidad?",
      options: ["CODE_OF_CONDUCT.md", "README.lock", "SECURITY.json", "HEAD"],
      correct: 0,
      explanation: "El código de conducta define normas de interacción respetuosa en el proyecto."
    },
    {
      id: 'q8',
      question: "¿Qué acción ayuda a mantener tu fork actualizado con el repositorio original?",
      options: ["Sincronizar con el repositorio upstream", "Cambiar el nombre del fork", "Borrar los issues", "Desactivar Git"],
      correct: 0,
      explanation: "Sincronizar con upstream permite traer los cambios más recientes del proyecto fuente."
    },
    {
      id: 'q9',
      question: "¿Cuál es el propósito principal del archivo README en un proyecto open source?",
      options: ["Explicar qué hace el proyecto y cómo usarlo", "Gestionar secretos del repositorio", "Definir reglas de firewall", "Reemplazar el historial de commits"],
      correct: 0,
      explanation: "El README suele presentar el proyecto, instalación, uso y contexto general."
    },
    {
      id: 'q10',
      question: "¿Qué práctica mejora la claridad de un commit en una contribución?",
      options: ["Escribir mensajes descriptivos y específicos", "Usar siempre el mismo mensaje genérico", "Combinar todos los cambios del mes", "Omitir el mensaje para ahorrar tiempo"],
      correct: 0,
      explanation: "Los mensajes claros facilitan revisar, entender y rastrear los cambios."
    },
    {
      id: 'q11',
      question: "Si un mantenedor solicita cambios en tu pull request, ¿qué debes hacer normalmente?",
      options: ["Actualizar la rama y responder a la retroalimentación", "Cerrar el repositorio", "Crear otra cuenta", "Eliminar la discusión"],
      correct: 0,
      explanation: "Lo normal es ajustar el PR según los comentarios y continuar la conversación."
    },
    {
      id: 'q12',
      question: "¿Qué ventaja tiene leer issues y PR anteriores antes de contribuir?",
      options: ["Entender decisiones previas y evitar duplicar trabajo", "Obtener permisos de administrador", "Cambiar la visibilidad del repositorio", "Forzar despliegues"],
      correct: 0,
      explanation: "Revisar discusiones previas ayuda a comprender el contexto técnico y comunitario."
    },
    {
      id: 'q13',
      question: "¿Cuál es una forma común de proponer una corrección pequeña en la documentación?",
      options: ["Crear una rama, editar y abrir un pull request", "Modificar directamente el historial de GitHub", "Cambiar la licencia del proyecto", "Abrir una organización nueva"],
      correct: 0,
      explanation: "Incluso cambios de documentación suelen proponerse mediante una rama y un PR."
    },
    {
      id: 'q14',
      question: "¿Qué significa que un proyecto sea \"maintainer-friendly\"?",
      options: ["Que facilita revisar y aceptar contribuciones", "Que bloquea a nuevos usuarios", "Que solo admite cambios internos", "Que no usa control de versiones"],
      correct: 0,
      explanation: "Un proyecto amigable para mantenedores define procesos claros y reduce fricción en la colaboración."
    },
    {
      id: 'q15',
      question: "¿Cuál es la razón principal para mantener conversaciones respetuosas en open source?",
      options: ["Favorecer una comunidad sostenible y colaborativa", "Aumentar el tamaño de los binarios", "Evitar usar ramas", "Reducir el número de commits"],
      correct: 0,
      explanation: "El respeto mejora la colaboración y la salud de la comunidad a largo plazo."
    },
    {
      id: 'q16',
      question: "¿Qué representa \"upstream\" en un flujo de fork?",
      options: ["El repositorio original del proyecto", "Tu copia local exclusivamente", "La carpeta .git", "La rama temporal de revisión"],
      correct: 0,
      explanation: "Upstream suele referirse al repositorio fuente del que hiciste fork."
    },
    {
      id: 'q17',
      question: "¿Cuál es una señal de que debes leer primero la documentación del proyecto?",
      options: ["Cuando el proyecto tiene guías de instalación y contribución publicadas", "Cuando GitHub muestra tu avatar", "Cuando la rama main está vacía", "Cuando no existe internet"],
      correct: 0,
      explanation: "La documentación suele contener el proceso esperado para colaborar correctamente."
    },
    {
      id: 'q18',
      question: "¿Qué práctica ayuda a que tu contribución sea más fácil de revisar?",
      options: ["Separar cambios funcionales de cambios de formato", "Mezclar refactor, fixes y documentación en un solo commit", "Subir archivos temporales del editor", "Cambiar múltiples dependencias sin explicación"],
      correct: 0,
      explanation: "Separar tipos de cambio reduce ruido y facilita validar el propósito del PR."
    },
    {
      id: 'q19',
      question: "¿Qué beneficio ofrece una discusión previa antes de implementar una función compleja?",
      options: ["Reduce trabajo desperdiciado si la idea no encaja", "Garantiza merge automático", "Elimina la necesidad de pruebas", "Permite omitir la licencia"],
      correct: 0,
      explanation: "Validar la idea antes de codificar evita esfuerzos que podrían no ser aceptados."
    },
    {
      id: 'q20',
      question: "¿Cuál es el objetivo principal de contribuir a open source en GitHub?",
      options: ["Mejorar un proyecto compartiendo cambios de forma colaborativa", "Evitar usar control de versiones", "Reemplazar toda la administración del sistema", "Crear permisos fuera de la plataforma"],
      correct: 0,
      explanation: "Contribuir implica colaborar abiertamente para mejorar software, documentación o procesos."
    }
  ],
  'module-10': [
    {
      id: 'q1',
      question: "¿Qué describe mejor InnerSource?",
      options: ["Aplicar prácticas open source dentro de una organización", "Publicar todo el código interno como software libre", "Eliminar revisiones de código internas", "Usar solo repositorios públicos"],
      correct: 0,
      explanation: "InnerSource adopta colaboración abierta dentro de una empresa u organización."
    },
    {
      id: 'q2',
      question: "¿Cuál es un beneficio clave de InnerSource?",
      options: ["Reutilización de conocimiento y reducción de silos", "Ocultar más información entre equipos", "Evitar documentación compartida", "Restringir toda contribución externa"],
      correct: 0,
      explanation: "InnerSource facilita compartir código, contexto y experiencia entre equipos."
    },
    {
      id: 'q3',
      question: "¿Qué elemento ayuda a otros equipos a contribuir en un repositorio InnerSource?",
      options: ["Guías claras en README y CONTRIBUTING.md", "Ramas sin nombres descriptivos", "Permisos indefinidos", "Commits sin contexto"],
      correct: 0,
      explanation: "La documentación clara reduce la fricción para contribuir entre equipos."
    },
    {
      id: 'q4',
      question: "¿Cuál es el propósito de usar pull requests en InnerSource?",
      options: ["Revisar y discutir cambios de forma colaborativa", "Desactivar el historial del repositorio", "Reemplazar los permisos de la organización", "Eliminar la trazabilidad"],
      correct: 0,
      explanation: "Los PR permiten revisión, comentarios y decisiones transparentes."
    },
    {
      id: 'q5',
      question: "¿Qué práctica favorece la descubribilidad en InnerSource?",
      options: ["Usar topics, descripciones y documentación útiles", "Ocultar el nombre del repositorio", "Evitar etiquetas y README", "Usar nombres ambiguos para todo"],
      correct: 0,
      explanation: "Los metadatos y la documentación ayudan a encontrar proyectos reutilizables."
    },
    {
      id: 'q6',
      question: "¿Qué papel tienen los maintainers en un proyecto InnerSource?",
      options: ["Guiar contribuciones y mantener la calidad del repositorio", "Aprobar automáticamente cualquier cambio", "Eliminar todo issue abierto", "Evitar comentarios en revisiones"],
      correct: 0,
      explanation: "Los maintainers siguen siendo responsables de orientar y revisar cambios."
    },
    {
      id: 'q7',
      question: "¿Qué problema busca reducir InnerSource en una empresa?",
      options: ["Los silos entre equipos", "El uso de control de versiones", "La existencia de repositorios", "La autenticación de usuarios"],
      correct: 0,
      explanation: "InnerSource mejora la colaboración transversal y reduce barreras organizacionales."
    },
    {
      id: 'q8',
      question: "¿Por qué usar issues en InnerSource puede ser útil?",
      options: ["Porque hacen visibles necesidades, bugs y propuestas", "Porque sustituyen a Git por completo", "Porque impiden crear ramas", "Porque solo funcionan en repositorios públicos"],
      correct: 0,
      explanation: "Los issues centralizan conversaciones y trabajo pendiente de forma visible."
    },
    {
      id: 'q9',
      question: "¿Cuál es una señal de madurez en un repositorio InnerSource?",
      options: ["Tener un proceso claro de revisión y ownership", "No permitir contribuciones entre equipos", "No documentar dependencias", "Borrar el historial de cambios"],
      correct: 0,
      explanation: "Un flujo claro de ownership y revisión facilita la colaboración escalable."
    },
    {
      id: 'q10',
      question: "¿Qué ventaja tiene usar plantillas de issues y pull requests en InnerSource?",
      options: ["Estandarizan la información necesaria para colaborar", "Impiden usar etiquetas", "Reemplazan los permisos del repositorio", "Obligan a hacer merge sin revisar"],
      correct: 0,
      explanation: "Las plantillas ayudan a recolectar contexto consistente y útil."
    },
    {
      id: 'q11',
      question: "¿Qué métrica puede indicar adopción de InnerSource?",
      options: ["Contribuciones entre equipos a repositorios compartidos", "Cantidad de archivos ocultos", "Número de cambios sin revisar", "Total de ramas locales borradas"],
      correct: 0,
      explanation: "Las contribuciones cruzadas muestran que otros equipos reutilizan y mejoran proyectos."
    },
    {
      id: 'q12',
      question: "¿Qué significa tratar un proyecto interno como \"producto\" en InnerSource?",
      options: ["Cuidar su documentación, soporte y usabilidad para otros equipos", "Cobrar por cada commit", "Prohibir cualquier fork", "Usarlo solo dentro de un área"],
      correct: 0,
      explanation: "Un enfoque de producto mejora la experiencia de quienes consumen o contribuyen al proyecto."
    },
    {
      id: 'q13',
      question: "¿Cuál es un riesgo si InnerSource no define ownership claramente?",
      options: ["Confusión sobre quién revisa y mantiene cambios", "Mayor velocidad garantizada", "Menos necesidad de documentación", "Eliminación automática de conflictos"],
      correct: 0,
      explanation: "Sin ownership, las contribuciones pueden quedar sin respuesta o dirección."
    },
    {
      id: 'q14',
      question: "¿Qué herramienta de GitHub ayuda a organizar responsabilidad por archivos específicos?",
      options: ["CODEOWNERS", "git stash", "git rebase interactivo", "Submódulos"],
      correct: 0,
      explanation: "CODEOWNERS asigna revisores u owners a rutas concretas del repositorio."
    },
    {
      id: 'q15',
      question: "¿Por qué la transparencia es importante en InnerSource?",
      options: ["Porque facilita que otros entiendan y mejoren el trabajo", "Porque evita usar repositorios", "Porque reemplaza la autenticación", "Porque impide abrir discussions"],
      correct: 0,
      explanation: "La transparencia reduce dependencia de conocimiento tácito y fomenta colaboración."
    },
    {
      id: 'q16',
      question: "¿Qué práctica promueve la reutilización en InnerSource?",
      options: ["Diseñar componentes bien documentados y fáciles de consumir", "Escribir APIs internas sin ejemplos", "Ocultar decisiones de arquitectura", "Cambiar interfaces sin aviso"],
      correct: 0,
      explanation: "La reutilización mejora cuando los componentes son claros, estables y documentados."
    },
    {
      id: 'q17',
      question: "¿Qué tipo de cultura apoya mejor InnerSource?",
      options: ["Colaboración abierta y compartición de conocimiento", "Aislamiento estricto por equipo", "Cambios sin revisión", "Acceso basado en cuentas compartidas"],
      correct: 0,
      explanation: "InnerSource prospera en culturas que recompensan colaboración y visibilidad."
    },
    {
      id: 'q18',
      question: "¿Qué ventaja tiene recibir contribuciones de otros equipos?",
      options: ["Se detectan mejoras y casos de uso que el equipo original no vio", "Se pierde toda trazabilidad", "Se eliminan las pruebas", "Se evita documentar"],
      correct: 0,
      explanation: "Las contribuciones externas aportan nuevas perspectivas y necesidades reales."
    },
    {
      id: 'q19',
      question: "¿Cuál es un buen punto de inicio para un programa InnerSource?",
      options: ["Abrir repositorios internos clave con procesos claros de contribución", "Hacer todos los repositorios públicos de inmediato", "Eliminar revisiones para acelerar", "Prohibir issues y discussions"],
      correct: 0,
      explanation: "Suele comenzarse habilitando colaboración interna en proyectos con alto valor compartido."
    },
    {
      id: 'q20',
      question: "¿Qué relación tiene InnerSource con open source?",
      options: ["Adopta prácticas de open source en un entorno interno", "Es exactamente lo mismo legalmente", "Solo aplica a software público", "Requiere cambiar todas las licencias a MIT"],
      correct: 0,
      explanation: "InnerSource comparte el modelo de colaboración, pero ocurre dentro de la organización."
    }
  ],
  'module-11': [
    {
      id: 'q1',
      question: "¿Qué función de GitHub detecta dependencias con vulnerabilidades conocidas?",
      options: ["Dependabot alerts", "GitHub Pages", "Projects", "Gists"],
      correct: 0,
      explanation: "Dependabot alerts informa sobre dependencias afectadas por vulnerabilidades conocidas."
    },
    {
      id: 'q2',
      question: "¿Qué característica ayuda a encontrar credenciales expuestas en un repositorio?",
      options: ["Secret scanning", "Wiki", "Milestones", "Fork syncing"],
      correct: 0,
      explanation: "Secret scanning busca patrones de secretos como tokens, claves y credenciales."
    },
    {
      id: 'q3',
      question: "¿Para qué sirve code scanning en GitHub?",
      options: ["Para analizar código en busca de problemas de seguridad y calidad", "Para eliminar ramas antiguas", "Para comprimir el repositorio", "Para crear etiquetas de releases"],
      correct: 0,
      explanation: "Code scanning detecta patrones inseguros o errores mediante análisis estático."
    },
    {
      id: 'q4',
      question: "¿Qué archivo indica a los investigadores cómo reportar vulnerabilidades de forma responsable?",
      options: ["SECURITY.md", "README.md", "CODEOWNERS", "LICENSE"],
      correct: 0,
      explanation: "SECURITY.md suele documentar el proceso de divulgación responsable."
    },
    {
      id: 'q5',
      question: "¿Qué hace Dependabot security updates?",
      options: ["Crea pull requests para actualizar dependencias vulnerables", "Borra dependencias automáticamente", "Cambia permisos de la organización", "Desactiva el escaneo de secretos"],
      correct: 0,
      explanation: "Dependabot puede proponer actualizaciones mediante PR para corregir vulnerabilidades conocidas."
    },
    {
      id: 'q6',
      question: "¿Cuál es una buena práctica respecto a secretos en repositorios?",
      options: ["No almacenarlos en el código ni en archivos versionados", "Ponerlos en README para compartirlos", "Subirlos y borrarlos después", "Guardar todos en texto plano"],
      correct: 0,
      explanation: "Los secretos no deben versionarse; deben gestionarse con mecanismos seguros."
    },
    {
      id: 'q7',
      question: "¿Qué protección reduce el riesgo de cambios directos no revisados en ramas críticas?",
      options: ["Branch protection rules", "Git tags", "Stars", "Pinned issues"],
      correct: 0,
      explanation: "Las reglas de protección pueden exigir revisiones y bloquear pushes directos."
    },
    {
      id: 'q8',
      question: "¿Qué ventaja tiene exigir revisiones antes del merge?",
      options: ["Reduce el riesgo de introducir cambios inseguros o defectuosos", "Elimina la necesidad de autenticación", "Convierte el repositorio en público", "Evita usar ramas"],
      correct: 0,
      explanation: "La revisión de pares añade control de calidad y seguridad antes de integrar cambios."
    },
    {
      id: 'q9',
      question: "¿Qué opción ayuda a evitar que código con checks fallidos llegue a main?",
      options: ["Requerir status checks exitosos", "Desactivar Actions", "Usar solo commits locales", "Eliminar CODEOWNERS"],
      correct: 0,
      explanation: "Exigir checks exitosos bloquea merges hasta que la validación pase."
    },
    {
      id: 'q10',
      question: "¿Qué describe mejor la divulgación privada de vulnerabilidades?",
      options: ["Reportar un fallo de seguridad sin exponerlo públicamente de inmediato", "Publicar el exploit en un issue abierto", "Hacer merge del problema en main", "Borrar el repositorio"],
      correct: 0,
      explanation: "La divulgación privada permite corregir la vulnerabilidad antes de hacerla pública."
    },
    {
      id: 'q11',
      question: "¿Cuál es el objetivo de una política de menor privilegio?",
      options: ["Dar solo los permisos necesarios para una tarea", "Conceder acceso de administrador por defecto", "Compartir una cuenta entre varios usuarios", "Eliminar toda autenticación"],
      correct: 0,
      explanation: "El menor privilegio reduce impacto potencial ante errores o compromisos."
    },
    {
      id: 'q12',
      question: "¿Qué ayuda a auditar actividad relacionada con seguridad en una organización?",
      options: ["Audit log", "GitHub Pages", "Discussions", "Releases"],
      correct: 0,
      explanation: "El audit log registra acciones relevantes para supervisión y cumplimiento."
    },
    {
      id: 'q13',
      question: "¿Qué función permite analizar automáticamente el código con consultas de seguridad avanzadas?",
      options: ["CodeQL", "Git LFS", "Actions cache", "Subversion bridge"],
      correct: 0,
      explanation: "CodeQL es una tecnología de análisis usada en code scanning para encontrar vulnerabilidades."
    },
    {
      id: 'q14',
      question: "Si se expone un token en un commit, ¿qué acción es prioritaria además de limpiar el historial si aplica?",
      options: ["Revocar o rotar el token comprometido", "Cambiar el color del repositorio", "Crear más ramas", "Mover el archivo a otra carpeta"],
      correct: 0,
      explanation: "La revocación o rotación corta el acceso comprometido inmediatamente."
    },
    {
      id: 'q15',
      question: "¿Qué ventaja tienen las reglas o rulesets de repositorio?",
      options: ["Aplicar políticas consistentes sobre ramas y flujos de trabajo", "Reemplazar la autenticación multifactor", "Borrar automáticamente todos los forks", "Desactivar el historial de cambios"],
      correct: 0,
      explanation: "Los rulesets ayudan a estandarizar protección y cumplimiento."
    },
    {
      id: 'q16',
      question: "¿Qué tipo de alertas muestra Dependabot además de actualizaciones automáticas?",
      options: ["Alertas sobre vulnerabilidades en dependencias", "Alertas sobre diseño de interfaz", "Alertas sobre colores de temas", "Alertas sobre tamaño del monitor"],
      correct: 0,
      explanation: "Dependabot alerts informa cuando una dependencia usada tiene una vulnerabilidad conocida."
    },
    {
      id: 'q17',
      question: "¿Qué práctica mejora la seguridad de colaboración en pull requests?",
      options: ["Revisar cambios sensibles y limitar quién puede aprobarlos", "Permitir merge directo a cualquiera", "Desactivar historial de revisiones", "Aceptar cambios sin leer el diff"],
      correct: 0,
      explanation: "Los cambios sensibles deben revisarse cuidadosamente y con controles apropiados."
    },
    {
      id: 'q18',
      question: "¿Qué es más adecuado para credenciales usadas por flujos de CI/CD en GitHub?",
      options: ["Usar secrets o mecanismos seguros de credenciales", "Guardarlas en un archivo .txt del repo", "Escribirlas en comentarios del PR", "Publicarlas en un gist"],
      correct: 0,
      explanation: "Las credenciales de automatización deben almacenarse en secretos gestionados de forma segura."
    },
    {
      id: 'q19',
      question: "¿Qué beneficio aporta habilitar secret scanning preventivo o push protection cuando está disponible?",
      options: ["Ayuda a bloquear secretos antes de que lleguen al repositorio", "Elimina la necesidad de revisar código", "Hace públicos los repositorios privados", "Convierte issues en secretos"],
      correct: 0,
      explanation: "La protección en push puede advertir o bloquear la subida accidental de secretos."
    },
    {
      id: 'q20',
      question: "¿Cuál es el propósito principal de la seguridad en repositorios de GitHub?",
      options: ["Reducir riesgos en código, dependencias, secretos y colaboración", "Aumentar el número de estrellas", "Evitar el uso de ramas", "Reemplazar todas las pruebas automáticas"],
      correct: 0,
      explanation: "La seguridad del repositorio abarca controles sobre código, acceso y cadena de suministro."
    }
  ],
  'module-12': [
    {
      id: 'q1',
      question: "¿Qué entidad de GitHub agrupa personas y repositorios para colaboración centralizada?",
      options: ["Organización", "Fork", "Commit", "Tag"],
      correct: 0,
      explanation: "Una organización permite administrar miembros, equipos y repositorios de forma centralizada."
    },
    {
      id: 'q2',
      question: "¿Para qué sirven los equipos en una organización de GitHub?",
      options: ["Para agrupar usuarios y asignar permisos de forma más sencilla", "Para reemplazar los repositorios", "Para eliminar la necesidad de autenticación", "Para fusionar ramas automáticamente"],
      correct: 0,
      explanation: "Los equipos simplifican la asignación y mantenimiento de permisos."
    },
    {
      id: 'q3',
      question: "¿Qué rol suele tener control administrativo completo sobre una organización?",
      options: ["Owner", "Outside collaborator", "Triager", "Reader"],
      correct: 0,
      explanation: "Los owners tienen capacidades administrativas amplias sobre la organización."
    },
    {
      id: 'q4',
      question: "¿Qué ventaja ofrece asignar permisos a equipos en lugar de a individuos uno por uno?",
      options: ["Facilita la administración y escalabilidad del acceso", "Impide usar pull requests", "Reduce la trazabilidad", "Desactiva el audit log"],
      correct: 0,
      explanation: "Gestionar permisos por equipos es más mantenible y consistente."
    },
    {
      id: 'q5',
      question: "¿Qué registro ayuda a revisar quién hizo cambios administrativos o de acceso?",
      options: ["Audit log", "README", "Release notes", "Pinned repos"],
      correct: 0,
      explanation: "El audit log proporciona trazabilidad de acciones relevantes en la organización."
    },
    {
      id: 'q6',
      question: "¿Cuál es una configuración útil para proteger ramas críticas en muchos repositorios?",
      options: ["Rulesets o reglas de protección", "Cambiar la foto del perfil", "Crear más etiquetas", "Desactivar las revisiones"],
      correct: 0,
      explanation: "Las reglas permiten aplicar controles consistentes como revisiones o checks requeridos."
    },
    {
      id: 'q7',
      question: "¿Qué significa que un repositorio sea privado?",
      options: ["Solo usuarios autorizados pueden acceder a él", "Cualquiera puede verlo pero no clonarlo", "No tiene historial", "No admite issues"],
      correct: 0,
      explanation: "Los repositorios privados restringen el acceso a usuarios con permiso."
    },
    {
      id: 'q8',
      question: "¿Qué opción permite dar acceso a una persona externa sin hacerla miembro de la organización?",
      options: ["Outside collaborator", "Owner", "Billing manager", "Security policy"],
      correct: 0,
      explanation: "Un outside collaborator puede recibir acceso específico a repositorios concretos."
    },
    {
      id: 'q9',
      question: "¿Qué práctica mejora la administración de acceso en GitHub?",
      options: ["Aplicar el principio de menor privilegio", "Dar permisos de admin por defecto", "Compartir cuentas entre equipos", "Evitar usar equipos"],
      correct: 0,
      explanation: "Dar solo el acceso necesario reduce riesgos y simplifica el control."
    },
    {
      id: 'q10',
      question: "¿Qué función ayuda a definir revisores requeridos por ruta de archivo?",
      options: ["CODEOWNERS", "GitHub Pages", "Gists", "Reactions"],
      correct: 0,
      explanation: "CODEOWNERS asigna propietarios o revisores para archivos o directorios específicos."
    },
    {
      id: 'q11',
      question: "¿Qué beneficio tiene estandarizar plantillas de repositorios en una organización?",
      options: ["Promueve consistencia en estructura y archivos comunes", "Elimina la necesidad de permisos", "Hace todos los repositorios públicos", "Reemplaza Git por completo"],
      correct: 0,
      explanation: "Las plantillas facilitan crear repositorios con convenciones y archivos base compartidos."
    },
    {
      id: 'q12',
      question: "¿Qué se administra normalmente desde la configuración de un repositorio?",
      options: ["Visibilidad, colaboradores, reglas y características habilitadas", "La conexión física a internet", "El sistema operativo del usuario", "La memoria RAM del equipo"],
      correct: 0,
      explanation: "La configuración del repositorio controla acceso y funciones relacionadas con colaboración."
    },
    {
      id: 'q13',
      question: "¿Cuál es una ventaja de usar una organización en vez de repositorios bajo cuentas personales para equipos?",
      options: ["Mejor control centralizado de acceso y propiedad", "Menos necesidad de auditoría", "Imposibilidad de usar equipos", "Ausencia total de roles"],
      correct: 0,
      explanation: "Las organizaciones ofrecen estructuras y controles pensados para colaboración en equipo."
    },
    {
      id: 'q14',
      question: "¿Qué práctica ayuda a mantener ordenados los repositorios de una organización?",
      options: ["Usar nombres descriptivos, topics y descripciones", "Nombrarlos todos igual", "Ocultar la documentación", "Evitar crear equipos"],
      correct: 0,
      explanation: "Metadatos claros mejoran navegación, búsqueda y gobernanza."
    },
    {
      id: 'q15',
      question: "¿Qué se puede exigir con la protección de ramas?",
      options: ["Revisiones, checks exitosos y restricciones de push", "Más estrellas para hacer merge", "Que el repositorio sea público", "Que todos usen la misma contraseña"],
      correct: 0,
      explanation: "La protección de ramas impone requisitos antes de integrar cambios."
    },
    {
      id: 'q16',
      question: "¿Qué capacidad suele tener un maintainer o admin de repositorio?",
      options: ["Gestionar configuración y permisos del repositorio", "Controlar todas las organizaciones de GitHub", "Modificar cuentas ajenas fuera del repositorio", "Anular autenticación multifactor global"],
      correct: 0,
      explanation: "Los administradores del repositorio gestionan su configuración y acceso dentro de ese ámbito."
    },
    {
      id: 'q17',
      question: "¿Qué función ayuda a organizar trabajo sin salir de GitHub?",
      options: ["Projects", "SSH agent", "Git daemon", "Subversion server"],
      correct: 0,
      explanation: "Projects permite planificar y visualizar trabajo relacionado con issues y pull requests."
    },
    {
      id: 'q18',
      question: "¿Por qué conviene revisar periódicamente los permisos de acceso?",
      options: ["Para retirar accesos innecesarios y reducir riesgo", "Para aumentar el tamaño del repositorio", "Para desactivar todos los checks", "Para evitar crear ramas"],
      correct: 0,
      explanation: "La revisión periódica mantiene el acceso alineado con necesidades reales."
    },
    {
      id: 'q19',
      question: "¿Qué archivo comúnmente define instrucciones o políticas compartidas para contribuir?",
      options: ["CONTRIBUTING.md", "Thumbs.db", "node_modules", "HEAD.lock"],
      correct: 0,
      explanation: "CONTRIBUTING.md ayuda a estandarizar cómo colaborar en el repositorio."
    },
    {
      id: 'q20',
      question: "¿Cuál es el objetivo principal de la administración en GitHub?",
      options: ["Gestionar acceso, políticas y colaboración de forma segura y eficiente", "Eliminar el historial de versiones", "Reemplazar todas las herramientas de desarrollo", "Convertir cada issue en un release"],
      correct: 0,
      explanation: "La administración busca equilibrio entre control, seguridad y productividad colaborativa."
    }
  ],
  'module-13': [
    {
      id: 'q1',
      question: "¿Qué significa autenticación en GitHub?",
      options: ["Verificar la identidad de quien accede", "Definir qué acciones puede realizar un usuario", "Crear una rama nueva", "Sincronizar un fork"],
      correct: 0,
      explanation: "Autenticación es el proceso de demostrar quién eres."
    },
    {
      id: 'q2',
      question: "¿Qué significa autorización en GitHub?",
      options: ["Determinar a qué recursos y acciones tienes acceso", "Cambiar tu contraseña automáticamente", "Verificar que tu correo exista", "Publicar un release"],
      correct: 0,
      explanation: "La autorización define permisos después de autenticar la identidad."
    },
    {
      id: 'q3',
      question: "¿Qué mejora principalmente la autenticación de dos factores (2FA)?",
      options: ["La seguridad al requerir una segunda prueba de identidad", "La velocidad de los commits", "El tamaño máximo del repositorio", "La cantidad de reviewers"],
      correct: 0,
      explanation: "2FA reduce el riesgo de acceso no autorizado si la contraseña se ve comprometida."
    },
    {
      id: 'q4',
      question: "¿Qué método se usa comúnmente para autenticar operaciones Git sobre SSH?",
      options: ["Claves SSH", "Cookies del navegador", "Issues cerrados", "Tags firmados visualmente"],
      correct: 0,
      explanation: "Las claves SSH permiten autenticación segura para operaciones Git por SSH."
    },
    {
      id: 'q5',
      question: "¿Qué ventaja tiene un fine-grained personal access token frente a uno clásico?",
      options: ["Permisos más específicos y alcance más limitado", "Mayor acceso por defecto a toda la cuenta", "No requiere revocación nunca", "Sustituye automáticamente 2FA"],
      correct: 0,
      explanation: "Los tokens de granularidad fina permiten restringir mejor repositorios y permisos."
    },
    {
      id: 'q6',
      question: "¿Cuál es una buena práctica para tokens de acceso personal?",
      options: ["Darles el menor alcance y duración posibles", "Compartirlos con el equipo por chat", "Guardarlos en el repositorio", "Usarlos como sustituto de usuarios"],
      correct: 0,
      explanation: "Reducir alcance y vigencia limita el impacto ante exposición."
    },
    {
      id: 'q7',
      question: "¿Qué hace SAML SSO en contextos empresariales?",
      options: ["Integra inicio de sesión con un proveedor de identidad", "Crea forks automáticamente", "Desactiva los permisos por equipo", "Convierte repositorios privados en públicos"],
      correct: 0,
      explanation: "SAML SSO permite usar identidad corporativa para acceder a recursos de GitHub."
    },
    {
      id: 'q8',
      question: "¿Qué tipo de credencial no debería subirse a un repositorio?",
      options: ["Un token de acceso personal", "Un archivo README", "Una licencia MIT", "Una plantilla de issue"],
      correct: 0,
      explanation: "Los tokens son secretos y no deben almacenarse en el código ni en el repositorio."
    },
    {
      id: 'q9',
      question: "¿Cuál es la diferencia clave entre autenticación y autorización?",
      options: ["Autenticación verifica identidad; autorización define permisos", "Autenticación crea ramas; autorización crea tags", "Autenticación revisa PR; autorización borra issues", "No existe diferencia"],
      correct: 0,
      explanation: "Primero se verifica quién eres y luego qué puedes hacer."
    },
    {
      id: 'q10',
      question: "¿Qué opción representa un mecanismo de autorización?",
      options: ["Permiso de escritura en un repositorio", "Código de un autenticador TOTP", "Clave de recuperación de 2FA", "Correo de verificación"],
      correct: 0,
      explanation: "Un permiso de escritura es una decisión de acceso, no un método de autenticación."
    },
    {
      id: 'q11',
      question: "¿Qué herramienta suele usarse para autenticación web delegada a aplicaciones de terceros?",
      options: ["OAuth", "Git blame", "Git LFS", "Dependabot"],
      correct: 0,
      explanation: "OAuth permite a una app obtener acceso autorizado sin compartir la contraseña."
    },
    {
      id: 'q12',
      question: "¿Qué ventaja ofrecen las GitHub Apps frente a credenciales compartidas amplias?",
      options: ["Permisos más controlados y específicos para integraciones", "Acceso ilimitado por defecto", "Eliminación de auditoría", "Sustituyen todos los repositorios"],
      correct: 0,
      explanation: "Las GitHub Apps están diseñadas con permisos acotados y mejor trazabilidad."
    },
    {
      id: 'q13',
      question: "¿Qué ocurre si un usuario está autenticado pero no autorizado a un repositorio privado?",
      options: ["No podrá acceder al repositorio", "Podrá hacer push pero no pull", "Podrá verlo solo en modo lectura anónima", "Podrá cambiar la licencia"],
      correct: 0,
      explanation: "Autenticarse no basta; también se necesitan permisos adecuados."
    },
    {
      id: 'q14',
      question: "¿Cuál es una buena práctica con cuentas de usuario?",
      options: ["No compartir cuentas entre varias personas", "Usar la misma cuenta en todo el equipo", "Desactivar 2FA para simplificar", "Publicar la contraseña en un gestor común sin controles"],
      correct: 0,
      explanation: "Las cuentas deben ser individuales para trazabilidad y seguridad."
    },
    {
      id: 'q15',
      question: "¿Qué tipo de permiso permite fusionar cambios en un repositorio si la política lo admite?",
      options: ["Permiso de escritura o superior", "Solo tener avatar configurado", "Ser seguidor del propietario", "Haber hecho fork del repositorio"],
      correct: 0,
      explanation: "Las acciones de escritura suelen requerir permisos de escritura o administrativos según la configuración."
    },
    {
      id: 'q16',
      question: "¿Qué función cumple una clave de recuperación de 2FA?",
      options: ["Permitir acceso si no dispones del segundo factor habitual", "Aumentar permisos en la organización", "Crear tokens ilimitados", "Firmar commits automáticamente"],
      correct: 0,
      explanation: "Las claves de recuperación ayudan a restaurar acceso en caso de perder el segundo factor."
    },
    {
      id: 'q17',
      question: "¿Por qué conviene revocar credenciales que ya no se usan?",
      options: ["Porque reducen la superficie de ataque", "Porque aumentan la velocidad de Git", "Porque crean más issues", "Porque mejoran la búsqueda"],
      correct: 0,
      explanation: "Las credenciales inactivas pueden ser un riesgo innecesario si quedan expuestas."
    },
    {
      id: 'q18',
      question: "¿Qué opción describe mejor el principio de menor privilegio?",
      options: ["Asignar solo los permisos necesarios para una tarea", "Dar siempre acceso de admin", "Permitir acceso global por comodidad", "Eliminar todos los equipos"],
      correct: 0,
      explanation: "El menor privilegio limita riesgos y errores."
    },
    {
      id: 'q19',
      question: "¿Qué autenticación es común al operar Git desde la línea de comandos vía HTTPS?",
      options: ["Un token de acceso personal", "Una reacción en un issue", "Un release firmado visualmente", "Una etiqueta del repositorio"],
      correct: 0,
      explanation: "En GitHub, para HTTPS suele usarse un token en lugar de contraseña."
    },
    {
      id: 'q20',
      question: "¿Cuál es el objetivo conjunto de identidad, autenticación y autorización?",
      options: ["Asegurar quién accede y qué puede hacer", "Aumentar el número de commits", "Eliminar las ramas de trabajo", "Reemplazar los pull requests"],
      correct: 0,
      explanation: "Estos conceptos permiten controlar acceso de forma segura y trazable."
    }
  ],
  'module-14': [
    {
      id: 'q1',
      question: "¿Cuál es el propósito principal de un pull request en GitHub?",
      options: ["Proponer, revisar y discutir cambios antes de integrarlos", "Eliminar el historial de commits", "Crear automáticamente una organización", "Sustituir todas las ramas"],
      correct: 0,
      explanation: "Un pull request centraliza la propuesta de cambio y su revisión colaborativa."
    },
    {
      id: 'q2',
      question: "¿Qué ventaja tiene abrir un pull request pequeño y enfocado?",
      options: ["Es más fácil de revisar y validar", "Impide hacer comentarios", "Evita usar ramas", "Elimina la necesidad de pruebas"],
      correct: 0,
      explanation: "Los PR pequeños reducen complejidad y facilitan detectar problemas."
    },
    {
      id: 'q3',
      question: "¿Qué significa marcar un pull request como draft?",
      options: ["Que aún no está listo para revisión final o merge", "Que se fusionará automáticamente", "Que ya fue aprobado por todos", "Que no tiene historial"],
      correct: 0,
      explanation: "Un draft PR comunica que el trabajo sigue en progreso."
    },
    {
      id: 'q4',
      question: "¿Qué archivo puede solicitar revisores automáticamente según rutas de archivos?",
      options: ["CODEOWNERS", "LICENSE", "SECURITY.md", ".gitignore"],
      correct: 0,
      explanation: "CODEOWNERS define responsables o revisores por partes del repositorio."
    },
    {
      id: 'q5',
      question: "¿Qué acción permite sugerir cambios línea por línea durante una revisión?",
      options: ["Agregar comentarios de revisión con sugerencias", "Borrar el repositorio", "Crear un release", "Cambiar la visibilidad del repo"],
      correct: 0,
      explanation: "Las revisiones permiten comentar y, en muchos casos, sugerir modificaciones concretas."
    },
    {
      id: 'q6',
      question: "¿Qué indica una revisión \"Request changes\"?",
      options: ["Que el revisor considera necesarios cambios antes del merge", "Que el PR ya se fusionó", "Que el repositorio es público", "Que se eliminó la rama base"],
      correct: 0,
      explanation: "Solicitar cambios señala que el PR no debería fusionarse todavía."
    },
    {
      id: 'q7',
      question: "¿Qué sucede si la rama del pull request tiene conflictos con la rama base?",
      options: ["Debe resolverse el conflicto antes de fusionar", "GitHub hace merge correcto siempre sin intervención", "Se desactiva el PR automáticamente para siempre", "Se borran ambos historiales"],
      correct: 0,
      explanation: "Los conflictos deben resolverse para integrar cambios de forma coherente."
    },
    {
      id: 'q8',
      question: "¿Qué beneficio tiene enlazar un issue a un pull request?",
      options: ["Mejorar trazabilidad entre problema y solución", "Aumentar permisos del autor", "Desactivar revisiones", "Crear equipos automáticamente"],
      correct: 0,
      explanation: "Relacionar issue y PR conecta el contexto del trabajo con la implementación."
    },
    {
      id: 'q9',
      question: "¿Qué opción de merge deja un solo commit en la rama base combinando los del PR?",
      options: ["Squash and merge", "Rebase and merge", "Create a merge commit", "Cherry-pick automático"],
      correct: 0,
      explanation: "Squash and merge compacta los commits del PR en uno solo."
    },
    {
      id: 'q10',
      question: "¿Qué opción de merge preserva commits individuales sin crear un merge commit adicional?",
      options: ["Rebase and merge", "Squash and merge", "Close pull request", "Draft merge"],
      correct: 0,
      explanation: "Rebase and merge reescribe la base manteniendo commits lineales sin merge commit."
    },
    {
      id: 'q11',
      question: "¿Qué utilidad tiene la pestaña \"Files changed\" en un pull request?",
      options: ["Revisar el diff exacto de los cambios propuestos", "Administrar facturación", "Cambiar la licencia del repositorio", "Configurar el sistema operativo"],
      correct: 0,
      explanation: "Muestra los archivos modificados y sus diferencias para revisión."
    },
    {
      id: 'q12',
      question: "¿Qué significa aprobar un pull request?",
      options: ["Indicar que el cambio parece correcto según la revisión", "Fusionarlo automáticamente sin reglas", "Cambiar al revisor a owner", "Cerrar todos los issues relacionados"],
      correct: 0,
      explanation: "La aprobación expresa conformidad, aunque el merge puede seguir sujeto a reglas."
    },
    {
      id: 'q13',
      question: "¿Qué práctica mejora la calidad de un pull request?",
      options: ["Incluir una descripción clara del problema y la solución", "Dejar el título vacío", "Subir cambios sin contexto", "Mezclar tareas no relacionadas"],
      correct: 0,
      explanation: "Una buena descripción acelera comprensión y revisión del PR."
    },
    {
      id: 'q14',
      question: "¿Qué puede exigir una regla de protección antes de fusionar un PR?",
      options: ["Checks de estado exitosos", "Más de cien estrellas", "Que el autor sea owner", "Que no existan tags"],
      correct: 0,
      explanation: "Las reglas pueden requerir CI exitosa, revisiones y otras condiciones."
    },
    {
      id: 'q15',
      question: "¿Qué es la rama base en un pull request?",
      options: ["La rama hacia la que se propone fusionar los cambios", "La rama local temporal del navegador", "La copia automática del fork", "La rama que siempre se elimina"],
      correct: 0,
      explanation: "La rama base es el destino de los cambios propuestos."
    },
    {
      id: 'q16',
      question: "¿Qué es la rama compare o head en un pull request?",
      options: ["La rama que contiene los cambios propuestos", "La rama protegida de producción necesariamente", "La rama generada por un tag", "La rama que GitHub borra al crear el PR"],
      correct: 0,
      explanation: "La rama compare/head es donde vive el trabajo que se quiere integrar."
    },
    {
      id: 'q17',
      question: "¿Por qué es útil responder comentarios en un pull request?",
      options: ["Porque mantiene la discusión técnica y deja trazabilidad", "Porque reemplaza los commits", "Porque evita usar ramas", "Porque cambia permisos"],
      correct: 0,
      explanation: "Responder ayuda a cerrar dudas y documentar decisiones."
    },
    {
      id: 'q18',
      question: "¿Qué ocurre al cerrar un pull request sin hacer merge?",
      options: ["La propuesta queda cerrada y los cambios no se integran", "Los commits se borran siempre", "La rama base se elimina automáticamente", "Se convierten los cambios en release"],
      correct: 0,
      explanation: "Cerrar sin merge deja el PR archivado sin integrar esos cambios a la base."
    },
    {
      id: 'q19',
      question: "¿Qué ventaja tiene eliminar la rama después del merge cuando ya no se necesita?",
      options: ["Mantiene el repositorio más limpio", "Desactiva el historial de cambios", "Elimina revisiones previas", "Evita usar issues"],
      correct: 0,
      explanation: "Borrar ramas ya integradas reduce desorden y confusión."
    },
    {
      id: 'q20',
      question: "¿Cuál es el objetivo de la revisión de pull requests?",
      options: ["Mejorar calidad, compartir contexto y reducir riesgos antes del merge", "Reemplazar el control de versiones", "Evitar escribir documentación", "Eliminar la necesidad de pruebas"],
      correct: 0,
      explanation: "La revisión ayuda a detectar problemas y mejorar la colaboración técnica."
    }
  ],
  'module-15': [
    {
      id: 'q1',
      question: "¿Qué vista muestra la secuencia de commits de un repositorio?",
      options: ["El historial de commits", "La lista de forks", "La pestaña Insights solamente", "La configuración de Pages"],
      correct: 0,
      explanation: "El historial de commits permite revisar cambios a lo largo del tiempo."
    },
    {
      id: 'q2',
      question: "¿Para qué sirve comparar dos ramas o commits en GitHub?",
      options: ["Para ver diferencias entre estados del código", "Para crear usuarios nuevos", "Para cambiar permisos de equipo", "Para firmar tokens"],
      correct: 0,
      explanation: "La comparación ayuda a entender qué cambió entre dos puntos del historial."
    },
    {
      id: 'q3',
      question: "¿Qué información suele mostrar una página de commit?",
      options: ["Autor, mensaje, archivos modificados y diff", "Solo el nombre del repositorio", "Solo la licencia", "Solo los reviewers"],
      correct: 0,
      explanation: "Un commit muestra metadatos y el contenido del cambio realizado."
    },
    {
      id: 'q4',
      question: "¿Qué herramienta permite buscar texto o código dentro de un repositorio en GitHub?",
      options: ["La búsqueda del repositorio", "GitHub Pages", "Actions cache", "Milestones"],
      correct: 0,
      explanation: "La búsqueda del repositorio permite encontrar contenido, archivos y más."
    },
    {
      id: 'q5',
      question: "¿Qué hace la búsqueda con calificadores como \"is:issue\" o \"repo:owner/name\"?",
      options: ["Restringe y afina los resultados", "Cierra resultados automáticamente", "Otorga permisos temporales", "Elimina resultados antiguos"],
      correct: 0,
      explanation: "Los calificadores permiten buscar con más precisión en GitHub."
    },
    {
      id: 'q6',
      question: "¿Qué vista ayuda a identificar quién modificó por última vez una línea de un archivo?",
      options: ["Blame", "Releases", "Projects", "Security overview"],
      correct: 0,
      explanation: "La vista blame asocia líneas con commits y autores."
    },
    {
      id: 'q7',
      question: "¿Qué utilidad tiene buscar commits por mensaje o autor?",
      options: ["Rastrear cambios específicos o responsables de una modificación", "Cambiar la rama por defecto", "Desactivar el repositorio", "Eliminar tags"],
      correct: 0,
      explanation: "La búsqueda en historial ayuda a localizar cambios concretos y su contexto."
    },
    {
      id: 'q8',
      question: "¿Qué muestra normalmente la pestaña \"Insights\" en un repositorio?",
      options: ["Métricas y visualizaciones sobre actividad y contribuciones", "Solo archivos ocultos", "Exclusivamente secretos detectados", "El contenido de .git local"],
      correct: 0,
      explanation: "Insights reúne gráficos y datos sobre actividad del repositorio."
    },
    {
      id: 'q9',
      question: "¿Qué ventaja tiene usar un mensaje de commit claro para búsquedas futuras?",
      options: ["Facilita localizar cambios relevantes en el historial", "Impide crear conflictos", "Aumenta permisos del autor", "Desactiva revisiones"],
      correct: 0,
      explanation: "Los mensajes descriptivos hacen más útil el historial como fuente de información."
    },
    {
      id: 'q10',
      question: "¿Qué se puede encontrar con la búsqueda de archivos en un repositorio?",
      options: ["Rutas y nombres de archivos que coinciden con una consulta", "La contraseña del owner", "Solo ramas protegidas", "Licencias externas automáticamente"],
      correct: 0,
      explanation: "La búsqueda también ayuda a localizar archivos por nombre o contenido relacionado."
    },
    {
      id: 'q11',
      question: "¿Para qué sirve filtrar pull requests por estado o autor?",
      options: ["Encontrar más rápido cambios relevantes para revisar o analizar", "Cambiar la facturación", "Desactivar commits firmados", "Borrar el historial"],
      correct: 0,
      explanation: "Los filtros reducen ruido al navegar por PRs en proyectos activos."
    },
    {
      id: 'q12',
      question: "¿Qué representa un diff en GitHub?",
      options: ["Las diferencias entre dos versiones de contenido", "La lista completa de miembros de la organización", "El tamaño total del repositorio", "La ubicación física del servidor"],
      correct: 0,
      explanation: "Un diff muestra líneas agregadas, modificadas o eliminadas."
    },
    {
      id: 'q13',
      question: "¿Qué ventaja tiene enlazar issues, PRs y commits?",
      options: ["Mejora la trazabilidad del trabajo y las decisiones", "Desactiva la búsqueda", "Reduce el número de ramas a cero", "Elimina la necesidad de comentarios"],
      correct: 0,
      explanation: "Los enlaces conectan el problema, la discusión y la implementación."
    },
    {
      id: 'q14',
      question: "¿Qué tipo de búsqueda usarías para encontrar todos los issues abiertos con una etiqueta concreta?",
      options: ["Búsqueda con calificadores de issues y labels", "Búsqueda de commits por hash", "Búsqueda de releases por tag", "Búsqueda de colaboradores por avatar"],
      correct: 0,
      explanation: "Los calificadores permiten filtrar issues por estado, etiqueta, autor y más."
    },
    {
      id: 'q15',
      question: "¿Qué aporta revisar el historial de un archivo antes de modificarlo?",
      options: ["Contexto sobre cambios previos y posibles decisiones de diseño", "Permisos de administrador temporales", "Capacidad de borrar branches protegidas", "Acceso a secretos del proyecto"],
      correct: 0,
      explanation: "El historial ayuda a entender por qué el archivo evolucionó de cierta manera."
    },
    {
      id: 'q16',
      question: "¿Qué suele indicar una búsqueda demasiado amplia sin calificadores?",
      options: ["Que probablemente devolverá mucho ruido en los resultados", "Que será siempre más precisa", "Que solo buscará en el repositorio actual", "Que ignorará el texto del código"],
      correct: 0,
      explanation: "Agregar calificadores mejora precisión y reduce resultados irrelevantes."
    },
    {
      id: 'q17',
      question: "¿Qué es útil para encontrar una línea exacta de código en GitHub?",
      options: ["Buscar una cadena distintiva del código", "Filtrar por estrellas del repositorio", "Crear un release", "Renombrar el branch principal"],
      correct: 0,
      explanation: "Buscar una cadena concreta suele ser efectivo para ubicar código específico."
    },
    {
      id: 'q18',
      question: "¿Por qué puede ser útil revisar commits relacionados con una incidencia?",
      options: ["Permite entender cuándo y cómo se introdujo o corrigió un problema", "Cambia automáticamente los permisos", "Evita usar ramas", "Convierte el issue en draft"],
      correct: 0,
      explanation: "Analizar commits relacionados ayuda a investigar causas y soluciones."
    },
    {
      id: 'q19',
      question: "¿Qué permite la página \"Compare\" entre ramas o commits?",
      options: ["Inspeccionar diferencias y potenciales cambios para un PR", "Administrar miembros de la organización", "Configurar SAML", "Subir secretos de forma segura"],
      correct: 0,
      explanation: "Compare muestra diferencias entre referencias y suele servir como base de revisión."
    },
    {
      id: 'q20',
      question: "¿Cuál es el objetivo de usar historial y búsqueda en repositorios?",
      options: ["Encontrar información, contexto y cambios de forma eficiente", "Reemplazar la necesidad de commits", "Evitar toda documentación", "Eliminar la colaboración"],
      correct: 0,
      explanation: "Historial y búsqueda permiten navegar el conocimiento técnico almacenado en GitHub."
    }
  ],
  'module-16': [
    {
      id: 'q1',
      question: "¿Qué prompt suele ayudar a Copilot a generar una función Python más útil?",
      options: ["Uno que describa objetivo, entradas, salida y restricciones", "Uno que diga solo hazlo", "Uno sin mencionar el lenguaje", "Uno compuesto solo por emojis"],
      correct: 0,
      explanation: "Cuanto más claro sea el objetivo y el contrato esperado, mejor suele ser la sugerencia."
    },
    {
      id: 'q2',
      question: "¿Cómo puede aprovecharse una docstring al trabajar con Copilot en Python?",
      options: ["Como especificación para que Copilot proponga la implementación", "Solo como comentario decorativo sin relación con el código", "Para desactivar el análisis del editor", "Para convertir el archivo en ejecutable"],
      correct: 0,
      explanation: "Una docstring bien escrita da contexto valioso para completar una función o método."
    },
    {
      id: 'q3',
      question: "¿Qué uso es apropiado de Copilot con pruebas en Python?",
      options: ["Pedir casos felices, casos límite y errores para funciones concretas", "Omitir pruebas porque Copilot ya verificó todo", "Generar tests sin mostrar la función objetivo", "Usarlo solo para cambiar nombres de archivos"],
      correct: 0,
      explanation: "Copilot puede proponer pruebas útiles si conoce el comportamiento esperado."
    },
    {
      id: 'q4',
      question: "¿Qué hace normalmente el comando /explain en Copilot Chat?",
      options: ["Solicita una explicación del código o selección actual", "Borra el historial del repositorio", "Cierra automáticamente todos los issues", "Publica el proyecto en GitHub Pages"],
      correct: 0,
      explanation: "/explain se usa para pedir una explicación de código o cambios."
    },
    {
      id: 'q5',
      question: "¿Para qué se usa típicamente /fix en Copilot Chat?",
      options: ["Para pedir propuestas de corrección sobre código o errores", "Para crear una nueva organización", "Para cambiar el plan de facturación", "Para borrar ramas remotas"],
      correct: 0,
      explanation: "/fix orienta a Copilot a sugerir soluciones para problemas detectados."
    },
    {
      id: 'q6',
      question: "¿Qué intención tiene normalmente /test en Copilot Chat?",
      options: ["Generar o sugerir pruebas para el código seleccionado", "Ejecutar automáticamente todos los secretos", "Desactivar GitHub Actions", "Convertir un issue en wiki"],
      correct: 0,
      explanation: "/test ayuda a pedir ejemplos de pruebas o suites para el código dado."
    },
    {
      id: 'q7',
      question: "¿Qué tipo de ayuda se suele solicitar con /doc?",
      options: ["Documentación, comentarios o descripciones del código", "Cambios de permisos del repositorio", "Rotación de claves SSH", "Eliminación del archivo README"],
      correct: 0,
      explanation: "/doc se orienta a redactar documentación o comentarios útiles."
    },
    {
      id: 'q8',
      question: "¿Qué hace la variable de contexto #file en Copilot Chat?",
      options: ["Incluye un archivo específico como contexto para la conversación", "Crea un archivo nuevo automáticamente", "Sube el archivo al remoto", "Convierte el archivo en secreto"],
      correct: 0,
      explanation: "#file permite referenciar contenido concreto del repositorio en el prompt."
    },
    {
      id: 'q9',
      question: "¿Qué representa #selection en Copilot Chat?",
      options: ["La porción de código actualmente seleccionada en el editor", "La lista de colaboradores del repositorio", "La rama predeterminada del proyecto", "La configuración de notificaciones"],
      correct: 0,
      explanation: "#selection permite centrar la ayuda de Copilot en el fragmento seleccionado."
    },
    {
      id: 'q10',
      question: "¿Para qué puede servir GitHub Copilot CLI?",
      options: ["Para explicar, sugerir o corregir comandos desde la terminal", "Para reemplazar Git por completo", "Para administrar facturas empresariales", "Para crear secretos automáticamente sin revisión"],
      correct: 0,
      explanation: "Copilot CLI lleva la asistencia de IA al flujo de trabajo de terminal."
    },
    {
      id: 'q11',
      question: "¿Qué práctica mejora la ayuda de Copilot cuando trabajas con Python y librerías como pandas?",
      options: ["Indicar la estructura de datos, nombres de columnas y resultado esperado", "Ocultar por completo el contexto de los datos", "Asumir que cualquier DataFrame tiene el mismo esquema", "Pedir soluciones sin mencionar la librería usada"],
      correct: 0,
      explanation: "Las librerías de datos dependen mucho del contexto real de entradas y salidas."
    },
    {
      id: 'q12',
      question: "¿Por qué conviene mencionar la versión de Python o de una librería al pedir ayuda a Copilot?",
      options: ["Porque la sintaxis y las APIs pueden variar entre versiones", "Porque así Copilot cambia el plan de GitHub", "Porque evita usar imports", "Porque habilita permisos de admin"],
      correct: 0,
      explanation: "El contexto de versión reduce sugerencias incompatibles o desactualizadas."
    },
    {
      id: 'q13',
      question: "¿Qué información suele ayudar a Copilot a depurar una excepción en Python?",
      options: ["El traceback, el comportamiento esperado y el fragmento de código relevante", "Solo el nombre del repositorio", "Solo la cantidad de commits", "La lista de seguidores del autor"],
      correct: 0,
      explanation: "Con síntomas concretos, Copilot puede sugerir causas y pasos de corrección más relevantes."
    },
    {
      id: 'q14',
      question: "¿Qué práctica de IA responsable es importante al usar Copilot?",
      options: ["No compartir secretos, tokens ni credenciales en prompts o contexto", "Pegar siempre archivos de configuración sensibles", "Asumir que todo uso de datos es seguro por defecto", "Ignorar políticas internas sobre datos"],
      correct: 0,
      explanation: "Nunca deben exponerse secretos o información sensible a herramientas de asistencia."
    },
    {
      id: 'q15',
      question: "¿Qué debe recordarse sobre entrenamiento, licencias y sugerencias de Copilot?",
      options: ["Las sugerencias deben revisarse técnicamente y según la política legal de tu organización", "Toda salida es automáticamente original y aprobada legalmente", "Copilot reemplaza cualquier revisión de cumplimiento", "Las licencias dejan de aplicar cuando interviene IA"],
      correct: 0,
      explanation: "La revisión humana sigue siendo clave en temas de calidad, licencias y cumplimiento."
    },
    {
      id: 'q16',
      question: "¿Cómo puede ayudar Copilot a modernizar código Python?",
      options: ["Sugiriendo refactors con type hints, mejor legibilidad y patrones actuales", "Eliminando automáticamente todas las dependencias", "Cambiando el lenguaje del proyecto sin pedirlo", "Desactivando las pruebas existentes"],
      correct: 0,
      explanation: "Copilot puede proponer mejoras de estilo y estructura, siempre sujetas a validación."
    },
    {
      id: 'q17',
      question: "¿Qué ventaja aportan las capacidades de workspace en Copilot?",
      options: ["Permiten razonar con más contexto del proyecto y archivos relacionados", "Impiden usar múltiples archivos abiertos", "Solo funcionan en repositorios vacíos", "Sustituyen el control de acceso del repositorio"],
      correct: 0,
      explanation: "Más contexto del workspace mejora la calidad de las respuestas y sugerencias."
    },
    {
      id: 'q18',
      question: "¿Qué función cumplen las GitHub Copilot Extensions?",
      options: ["Conectar Copilot con herramientas o fuentes externas para ampliar sus capacidades", "Reemplazar el archivo package.json", "Desactivar todos los PR de un repositorio", "Crear licencias propietarias automáticamente"],
      correct: 0,
      explanation: "Las extensiones amplían la experiencia de Copilot con integraciones adicionales."
    },
    {
      id: 'q19',
      question: "¿Qué enfoque suele dar mejores resultados al iterar con Copilot sobre una solución Python?",
      options: ["Pedir una primera versión y luego refinar con comentarios concretos", "Aceptar siempre la primera respuesta sin leerla", "Borrar el código original antes de comparar", "Mezclar preguntas de varios proyectos sin contexto"],
      correct: 0,
      explanation: "La iteración guiada con requisitos claros mejora la calidad del resultado."
    },
    {
      id: 'q20',
      question: "¿Cuál es el mejor enfoque general al usar Copilot avanzado con Python?",
      options: ["Usarlo como acelerador del trabajo, pero con revisión técnica y pruebas humanas", "Delegar decisiones críticas sin supervisión", "Asumir que ya no hacen falta tests", "Evitar proporcionar cualquier contexto útil"],
      correct: 0,
      explanation: "Copilot es más valioso como asistente, no como sustituto del criterio profesional."
    }
  ]
};
