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
    -   [Usar como Plantilla (sin Docker)](#-usar-como-plantilla-sin-docker)
    -   [Desarrollo Local](#-desarrollo-local)
2.  [**📝 Detalles del Proyecto**](#-detalles-del-proyecto)
    -   [Tecnologías Incluidas](#-tecnologías-incluidas)
    -   [Estructura Escalable](#-estructura-pensada-para-escalar)
    -   [Scripts Disponibles](#-scripts-disponibles)
    -   [Estructura de Carpetas](#-estructura-sugerida-del-proyecto)
    -   [Testing](#-testing)
    -   [Configuración de VS Code](#-configuración-de-vs-code)
3.  [**🐳 Despliegue con Docker**](#-despliegue-con-docker)
    -   [¿Cuándo usar Docker?](#-cuándo-usar-docker)
    -   [Configuración](#-configuración)
    -   [Levantar el Contenedor](#-levantar-el-contenedor)
 
---

## 🚀 Cómo Empezar

### 🌱 Usar como Plantilla (sin Docker)

Si solo quieres usar el código de React como base para un nuevo proyecto y no necesitas la configuración de Docker, sigue estos pasos:

1.  **Copia la carpeta `front`**: Cópiala a la ubicación que desees y renómbrala con el nombre de tu nuevo proyecto.
2.  **Inicializa tu propio repositorio**:
   -   Navega a la nueva carpeta: `cd tu-nuevo-proyecto`.
   -   Inicializa un nuevo repositorio de Git: `git init`.
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

Antes de iniciar, debes crear un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
VITE_APP_API=https://pokeapi.co/api/v2/
VITE_APP_LOCAL_SECRET=cambia-la-clave-de-encriptacion
```

## 🧪 Scripts disponibles

npm run dev / yarn dev → Inicia el servidor de desarrollo.

npm run build / yarn build → Compila para producción.

npm run preview / yarn preview → Visualiza el build generado localmente.

npm run lint / yarn lint → Analiza y corrige problemas de estilo y sintaxis.

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


## 🐳 Despliegue con Docker

Esta sección explica cómo construir y ejecutar la aplicación de frontend usando Docker.

### 🤔 ¿Cuándo usar Docker?

La configuración de Docker está pensada para **crear una imagen de producción** de la aplicación. Es ideal para desplegar el proyecto en un servidor o para probar el build final de forma aislada en tu máquina local.
 
**No se recomienda usar Docker para el desarrollo diario**, ya que el servidor de desarrollo de Vite (`npm run dev`) es mucho más rápido y ofrece recarga en caliente (_Hot Reloading_).
 
### ⚙️ Configuración

Antes de levantar el contenedor, necesitas configurar las variables de entorno para producción.

1.  En la **raíz del proyecto** (al mismo nivel que la carpeta `front` y el archivo `docker-compose.yml`), crea un archivo llamado `.env`.
2.  Añade las siguientes variables a ese archivo. Estas serán inyectadas en la aplicación durante el proceso de build dentro de Docker.

    ```env
    # Archivo .env en la raíz del proyecto (fuera de /front)

    # Variables para el build de producción en Docker
    VITE_API_BASE_URL=https://tu-api-de-produccion.com/api/

    # Clave secreta para cifrar los datos en producción
    VITE_STORAGE_ENCRYPTION_KEY=una-clave-muy-segura-y-diferente-a-la-de-desarrollo
    ```

### 🏃‍♂️ Levantar el Contenedor

1.  Asegúrate de tener **Docker**, **Docker Compose** y **Make** instalados.
    -   En macOS y Linux, `make` suele venir preinstalado.
    -   En Windows, puedes instalarlo usando Chocolatey (`choco install make`) o a través del Subsistema de Windows para Linux (WSL).
2.  Desde la **raíz del proyecto**, ejecuta el siguiente comando en tu terminal:

    ```bash
    make up
    ```
    Este comando utiliza el `Makefile` del proyecto para ejecutar `docker-compose up --build -d` de forma simplificada.

3.  Una vez finalizado el proceso, la aplicación de producción estará disponible en `http://localhost:3000`.

#### Otros comandos útiles de Make

El `Makefile` incluye otros atajos para gestionar el entorno de Docker:

| Comando | Descripción |
| :--- | :--- |
| `make up` | Construye y levanta los contenedores en segundo plano. |
| `make down` | Detiene y elimina los contenedores. |
| `make logs` | Muestra los logs de los contenedores en tiempo real. |
| `make clean` | Realiza una limpieza completa: detiene y elimina contenedores, redes y volúmenes. |

---

Creado con ❤️ por Héctor Balan — listo para ser reutilizado y adaptado a cualquier proyecto React 2025.
