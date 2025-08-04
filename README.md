<p align="center">
  <img src="https://vitejs.dev/logo.svg" width="60" alt="Vite logo" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="60" alt="React logo" />
  <img src="https://redux.js.org/img/redux.svg" width="60" alt="Redux logo" />
  <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" width="70" alt="Tailwind logo" />
  <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" width="60" alt="Ant logo" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain.svg" width="60" alt="Docker logo" />
</p>

<h1 align="center">Boilerplate React + Vite + Redux + Tailwind + Ant-design + Docker</h1>

<p align="center">
  ⚡ Plantilla base moderna para iniciar proyectos con React 19 + Vite, Redux Toolkit, Tailwind CSS, React Query, almacenamiento seguro con LocalForage + CryptoJS, Docker y más.
</p>

## 📋 Tabla de Contenidos

1.  [**🚀 Cómo Empezar**](#-cómo-empezar)
    - [Usar como Plantilla (sin Docker)](#-usar-como-plantilla-sin-docker)
    - [Desarrollo Local](#-desarrollo-local)
2.  [**📝 Detalles del Proyecto**](#-detalles-del-proyecto)
    - [Tecnologías Incluidas](#-tecnologías-incluidas)
    - [Estructura Escalable](#-estructura-pensada-para-escalar)
    - [Scripts Disponibles](#-scripts-disponibles)
    - [Estructura de Carpetas](#-estructura-sugerida-del-proyecto)
    - [Testing](#-testing)
    - [Configuración de VS Code](#-configuración-de-vs-code)
3.  [**🐳 Despliegue con Docker**](#-despliegue-con-docker)
    - [¿Cuándo usar Docker?](#-cuándo-usar-docker)
    - [Configuración](#-configuración)
    - [Levantar el Contenedor](#-levantar-el-contenedor)

---

## 🚀 Cómo Empezar

### 🌱 Usar como Plantilla (sin Docker)

Si solo quieres usar el código de React como base para un nuevo proyecto y no necesitas la configuración de Docker, sigue estos pasos:

1.  **Copia la carpeta `front`**: Cópiala a la ubicación que desees y renómbrala con el nombre de tu nuevo proyecto.
2.  **Inicializa tu propio repositorio**:

- Navega a la nueva carpeta: `cd tu-nuevo-proyecto`.
- Inicializa un nuevo repositorio de Git: `git init`.

3.  **Limpia los archivos de Docker**: Puedes eliminar de forma segura el archivo `Dockerfile` que se encuentra dentro de la carpeta y el `docker-compose.yml` que estaba en la raíz del boilerplate original.
4.  **Sigue los pasos de desarrollo local**: Continúa con la sección de abajo para instalar dependencias y arrancar el proyecto.

> **Nota**: Este boilerplate tiene un único repositorio `.git` en la carpeta raíz (fuera de `front`). Al seguir estos pasos, creas un repositorio nuevo e independiente exclusivo para tu proyecto de frontend.

### 💻 Desarrollo Local

Esta es la forma recomendada para trabajar en el día a día, ya que aprovecha el servidor de desarrollo de Vite con _Hot Reloading_.

#### Requisitos de Entorno

Para el desarrollo local, debes crear un archivo `.env` en la raíz de la carpeta `front` (`/front/.env`) con las siguientes variables:

```env
VITE_API_BASE_URL=https://pokeapi.co/api/v2/
VITE_STORAGE_ENCRYPTION_KEY=tu-clave-secreta-para-desarrollo
```

#### Pasos para arrancar

1.  **Instala las dependencias**:
    ```bash
    npm install
    # o si usas yarn
    yarn
    ```
2.  **Inicia el servidor de desarrollo**:
    ```bash
    npm run dev
    # o
    yarn dev
    ```

¡Listo! La aplicación estará corriendo en `http://localhost:5173` (o el puerto que indique Vite).

---

## 📝 Detalles del Proyecto

## 📦 Tecnologías incluidas

Este boilerplate viene configurado con las siguientes librerías y herramientas:

| Tecnología                  | Descripción                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| **React 19**                | Librería principal para la construcción de interfaces modernas.      |
| **Vite**                    | Empaquetador ultra rápido para desarrollo y producción.              |
| **TypeScript**              | Tipado estático para desarrollo más seguro y escalable.              |
| **ESLint**                  | Linter para mantener código limpio y consistente.                    |
| **Redux Toolkit**           | Manejador de estado global con configuración simplificada.           |
| **Tailwind CSS**            | Utilidades CSS para estilos rápidos y personalizados.                |
| **Ant Design**              | Librería de componentes UI elegantes y profesionales.                |
| **React Query**             | Gestión de fetching de datos, cache y sincronización con el backend. |
| **React Router DOM v7**     | Enrutador oficial para SPAs en React.                                |
| **React Toastify**          | Notificaciones y toasts fáciles de usar y personalizar.              |
| **Axios**                   | Cliente HTTP para consumir APIs.                                     |
| **RxJS**                    | Librería para programación reactiva basada en streams.               |
| **localforage + crypto-js** | Almacenamiento local seguro con cifrado AES personalizado.           |
| **react-helmet-async**      | Control dinámico del título y metadatos de cada ruta.                |

---

## 🚀 Estructura pensada para escalar

Esta plantilla está preparada para:

- Consumir datos con React Query.
- Utilizar Redux como gestor de estado global.
- Tener soporte completo para Tailwind CSS desde `global.css`.
- Mostrar errores o success de forma centralizada con Toasts (`react-toastify`).
- Realizar llamadas HTTP seguras con Axios.
- Usar programación reactiva avanzada con RxJS (ideal para flujos complejos).
- Manejadores de rutas usando React Router DOM versión 7.
- Almacenar de forma local y segura con cifrado AES personalizado.
- Utilizar componentes UI elegantes con Ant Design (botones, menús, inputs, tablas, etc).
- Controlar dinámicamente los metadatos (título, descripción, Open Graph) con `react-helmet-async`.
- Desplegar fácilmente con Vite.

---

## 📁 Requisitos de entorno

Este proyecto utiliza los **modos de Vite** para gestionar diferentes configuraciones de entorno. Puedes crear archivos `.env` específicos para cada modo en la raíz de la carpeta `/front`. Vite los cargará automáticamente según el script que ejecutes.

Por ejemplo:

- `.env.local`: Para `yarn dev:local`.
- `.env.dev`: Para `yarn dev` y `yarn build:dev`.
- `.env.qa`: Para `yarn dev:qa` y `yarn build:qa`.
- `.env.prod`: Para `yarn dev:prod` y `yarn build`.

Un archivo `.env.local` podría verse así:

```env
# /front/.env.local
VITE_API_BASE_URL=http://localhost:8080/api/v2/
VITE_STORAGE_ENCRYPTION_KEY=clave-secreta-para-local
```

## 🧪 Scripts disponibles

Este boilerplate utiliza modos de Vite para gestionar diferentes configuraciones de entorno. Cada script de dev y build puede apuntar a un archivo .env específico (ej. .env.dev, .env.qa).

Desarrollo
Inician un servidor local con Hot-Reload, cada uno cargando su configuración de entorno correspondiente:

npm run dev / yarn dev: Inicia el servidor en modo dev.
npm run dev:local / yarn dev:local: Inicia el servidor en modo local.
npm run dev:qa / yarn dev:qa: Inicia el servidor en modo qa.
npm run dev:prod / yarn dev:prod: Inicia el servidor en modo prod.
Construcción (Build)
Compilan la aplicación para producción, optimizando los archivos para el despliegue:

npm run build / yarn build: Compila la aplicación para el entorno de producción (modo prod).
npm run build:dev / yarn build:dev: Compila la aplicación para el entorno de desarrollo (modo dev).
npm run build:qa / yarn build:qa: Compila la aplicación para el entorno de QA (modo qa).

## 📂 Estructura sugerida del proyecto

```
src/
├── api/                 # Servicios o configuraciones de Axios
├── assets/              # Imágenes y recursos estáticos
├── components/          # Componentes reutilizables
├── features/            # Slices de Redux organizados por dominio
├── hooks/               # Custom hooks
├── HOCs/                # Custom high order components
├── pages/               # Páginas principales de la app
├── routes/              # Definición de rutas
├── store/               # Configuración de Redux
├── styles/              # Tailwind y estilos globales
├── main.tsx             # Punto de entrada
```

Este boilerplate no incluye librerias de testeo para la decisión a futuro a utilizar por proyecto.

| Objetivo                 | Herramientas recomendadas                |
| ------------------------ | ---------------------------------------- |
| Testear componentes      | `Vitest` + `Testing Library`             |
| Simular APIs sin backend | `msw`                                    |
| Testeo E2E real          | `Playwright` (mejor que Cypress hoy día) |

Es necesaro tener instalado el pluggin de tailwind si usas vs code asi como esta configuracion para que no salten errores de intellisense.
(Esta en su documentación)

```
 "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "tailwindCSS.colorDecorators": true
```

## 🌱 Uso como plantilla (sin Docker)
Aunque este proyecto está preparado para funcionar con Docker, también puede utilizarse perfectamente como una plantilla base de React sin él.
Si prefieres no usar Docker, puedes eliminar los siguientes archivos y carpetas del directorio front/ para quedarte con una configuración más ligera:

Dockerfile: Archivo de configuración para construir la imagen Docker.
nginx/: Carpeta que contiene la configuración del servidor web Nginx para producción.
Con esos cambios tendrás una base limpia de React lista para iniciar tu propio proyecto, ya sea para desarrollo o producción.


---

## 🐳 Despliegue con Docker

Esta sección explica cómo construir y ejecutar la aplicación de frontend usando Docker para diferentes entornos (`prod`, `qa`, `dev`).

### 🤔 ¿Cuándo usar Docker?

La configuración de Docker está pensada para **crear una imagen final** de la aplicación para un entorno específico. Es ideal para:
- Desplegar el proyecto en un servidor.
- Probar el build de producción, QA o desarrollo de forma aislada en tu máquina local.

**No se recomienda usar Docker para el desarrollo diario**, ya que el servidor de desarrollo de Vite (`npm run dev`) es mucho más rápido y ofrece recarga en caliente (_Hot Reloading_).

### ⚙️ Configuración

La configuración de Docker ahora soporta múltiples entornos (`prod`, `qa`, `dev`). Cada entorno se gestiona con su propio archivo de variables, que debe estar en la **raíz del proyecto** (fuera de la carpeta `/front`).

Dependiendo del entorno que quieras levantar con `make`, necesitarás crear uno o más de los siguientes archivos:

1.  **Para Producción (`.env.prod`)**:
    ```env
    # Archivo .env.prod en la raíz del proyecto
    # Variables para el despliegue en el entorno de PRODUCCIÓN
    COMPOSE_PROJECT_NAME=mi-proyecto-prod
    CONTAINER_NAME=mi-proyecto-frontend-prod
    PORT=3000
    BUILD_SCRIPT_ARG=build
    API_BASE_URL=https://pokeapi.co/api/v2/
    STORAGE_ENCRYPTION_KEY=una-clave-muy-segura-y-diferente-a-la-de-desarrollo
    ```

2.  **Para QA (`.env.qa`)**:
    ```env
    # Archivo .env.qa en la raíz del proyecto
    # Variables para el despliegue en el entorno de QA
    COMPOSE_PROJECT_NAME=mi-proyecto-qa
    CONTAINER_NAME=mi-proyecto-frontend-qa
    PORT=3002
    BUILD_SCRIPT_ARG=build:qa
    API_BASE_URL=https://pokeapi.co/api/v2/
    STORAGE_ENCRYPTION_KEY=clave-secreta-para-el-entorno-de-qa
    ```

3.  **Para Desarrollo (`.env.dev`)**:
    ```env
    # Archivo .env.dev en la raíz del proyecto
    # Variables para el despliegue en el entorno de DESARROLLO
    COMPOSE_PROJECT_NAME=mi-proyecto-dev
    CONTAINER_NAME=mi-proyecto-frontend-dev
    PORT=3001
    BUILD_SCRIPT_ARG=build:dev
    API_BASE_URL=https://pokeapi.co/api/v2/
    STORAGE_ENCRYPTION_KEY=clave-secreta-para-el-servidor-de-desarrollo
    ```

### 🏃‍♂️ Levantar los Contenedores

Cada entorno se levanta con un comando `make` específico. Esto te permite tener contenedores aislados para `prod`, `qa` y `dev` corriendo simultáneamente si es necesario, cada uno en su propio puerto.

1.  Asegúrate de tener **Docker**, **Docker Compose** y **Make** instalados.
2.  Desde la **raíz del proyecto**, ejecuta el comando correspondiente al entorno que necesites:

    -   **Para Producción:**
        ```bash
        make up-prod
        ```
        La aplicación estará disponible en `http://localhost:3000`.

    -   **Para QA:**
        ```bash
        make up-qa
        ```
        La aplicación estará disponible en `http://localhost:3002`.

    -   **Para Desarrollo (Servidor):**
        ```bash
        make up-dev
        ```
        La aplicación estará disponible en `http://localhost:3001`.

> **Nota**: Si solo necesitas levantar un entorno para probar el build final, se recomienda usar `make up-prod` para mantener la simplicidad.

### Otros comandos útiles de Make

El `Makefile` incluye atajos para gestionar cada entorno de Docker de forma individual. Reemplaza `{env}` con `prod`, `qa` o `dev`.

| Comando | Descripción |
| :--- | :--- |
| `make up-{env}` | Construye y levanta el contenedor del entorno especificado. |
| `make down-{env}` | Detiene y elimina el contenedor del entorno especificado. |
| `make logs-{env}` | Muestra los logs del contenedor del entorno especificado en tiempo real. |
| `make clean` | **¡Cuidado!** Detiene y elimina **todos** los contenedores, redes y volúmenes del proyecto. |

---

Creado con ❤️ por Héctor Balan — listo para ser reutilizado y adaptado a cualquier proyecto React 2025.
