# Portafolio de Víctor Noé Flores Toledo

Portafolio profesional bilingüe construido con Astro para presentar mi experiencia, proyectos, habilidades y formación como desarrollador Full Stack y líder técnico.

El sitio utiliza generación estática, contenido localizado por rutas y componentes interactivos aislados para ofrecer una experiencia rápida, accesible y fácil de mantener.

## Demo

[Ver el portafolio en línea](https://victornoe24.github.io/portfolio/)

## Características

- Contenido completo en español e inglés.
- Rutas localizadas y compatibles con SEO.
- Navegación por secciones con anclas específicas para cada idioma.
- Catálogo de proyectos con filtros, galería y vista detallada.
- Descarga del CV y enlaces de contacto profesional.
- Metadatos localizados, URL canónica y enlaces `hreflang`.
- Animaciones de interfaz con Framer Motion.
- Diseño responsive, accesible y optimizado para despliegue estático.
- Publicación automática en GitHub Pages mediante GitHub Actions.

## Rutas

| Página | Español | English |
| --- | --- | --- |
| Inicio | `/` | `/en/` |
| Proyectos | `/proyectos/` | `/en/projects/` |

Las secciones de cada página de inicio también usan identificadores localizados. Por ejemplo, `#sobre-mi` en español corresponde a `#about` en inglés.

## Tecnologías

- [Astro](https://astro.build/) con salida estática.
- TypeScript en modo estricto.
- React para las islas interactivas.
- Tailwind CSS para estilos.
- Framer Motion para animaciones.
- Radix UI para componentes accesibles.
- Lucide React para iconografía.
- pnpm como gestor de paquetes.

## Requisitos

- Node.js `22.12.0` o superior.
- pnpm `11.1.2` o una versión compatible.

## Desarrollo local

Clona el repositorio e instala las dependencias:

```bash
git clone git@github.com:VictorNoe24/portfolio.git
cd portfolio
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

El sitio estará disponible normalmente en `http://localhost:4321`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor local con recarga automática. |
| `pnpm build` | Genera la versión estática de producción en `dist/`. |
| `pnpm preview` | Sirve localmente el resultado del build. |
| `pnpm astro -- <comando>` | Ejecuta comandos de la CLI de Astro. |

## Estructura principal

```text
src/
├── components/
│   ├── about/
│   ├── education/
│   ├── experience/
│   ├── hero/
│   ├── layout/
│   ├── pages/
│   ├── projects/
│   ├── skills/
│   └── ui/
├── data/          # Contenido y configuración localizados
├── hooks/         # Estado y comportamiento reutilizable
├── i18n/          # Tipos y utilidades de idiomas
├── layouts/       # Estructura HTML y metadatos compartidos
├── pages/         # Entradas de rutas en español e inglés
└── styles/        # Estilos globales y configuración visual

public/
├── documents/cv/  # CV público
└── images/        # Perfil, logotipos y capturas de proyectos
```

## Arquitectura y localización

Astro se encarga de las rutas y del renderizado estático. React se utiliza únicamente en componentes que necesitan interacción o animaciones; cada isla define su estrategia de hidratación mediante directivas como `client:load` o `client:visible`.

La localización está basada en rutas reales, no en un cambio de textos exclusivamente del lado del cliente. La fuente principal de configuración es `src/data/site.ts`, donde se mantienen:

- Metadatos por idioma.
- Etiquetas de navegación y del selector de idioma.
- Identificadores localizados de las secciones.
- Rutas, enlaces alternativos y funciones auxiliares.

El contenido de cada sección se encuentra en los archivos de `src/data/`. Al modificarlo, las versiones en español e inglés deben conservar la misma estructura.

## Cómo actualizar contenido

- Perfil principal: `src/data/hero.ts`.
- Presentación personal: `src/data/about.ts`.
- Experiencia profesional: `src/data/experience.ts`.
- Proyectos: `src/data/projects.ts`.
- Habilidades: `src/data/skills.ts`.
- Formación: `src/data/education.ts`.
- Navegación, rutas y SEO: `src/data/site.ts`.
- CV: `public/documents/cv/victor-noe-flores-toledo-cv.pdf`.
- Imágenes de proyectos: `public/images/projects/`.

## Verificación antes de publicar

Genera y revisa el build de producción:

```bash
pnpm build
pnpm preview
```

Comprueba especialmente:

- Las cuatro rutas localizadas.
- Los enlaces internos y sus anclas.
- El selector de idioma mediante teclado, clic fuera y tecla `Escape`.
- Las imágenes, enlaces externos y descarga del CV.
- La navegación móvil y los estados de foco.

## Despliegue

El workflow `.github/workflows/deploy.yml` compila y publica el sitio en GitHub Pages cuando se envían cambios a la rama `production`. También puede ejecutarse manualmente desde la sección **Actions** del repositorio.

Durante el despliegue, Astro configura automáticamente `/portfolio` como ruta base. En desarrollo local utiliza `/`, por lo que los enlaces internos y recursos deben generarse con las funciones auxiliares de `src/data/site.ts`.

## Principios del proyecto

- Arquitectura orientada a componentes y responsabilidades pequeñas.
- Contenido separado de la interfaz.
- Tipado estricto y componentes reutilizables.
- HTML semántico y navegación accesible.
- Hidratación y dependencias limitadas a lo necesario.
- Rendimiento, SEO y mantenibilidad como prioridades.

## Autor

**Víctor Noé Flores Toledo** — Full Stack Developer / Technical Lead

- [GitHub](https://github.com/VictorNoe24)
- [LinkedIn](https://www.linkedin.com/in/victor-noe-flores-toledo-3a30441a5)
- [Correo electrónico](mailto:noeflo60@gmail.com)
