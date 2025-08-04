<p align="center">
  <img src="https://vitejs.dev/logo.svg" width="60" alt="Vite logo" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="60" alt="React logo" />
  <img src="https://redux.js.org/img/redux.svg" width="60" alt="Redux logo" />
  <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" width="70" alt="Tailwind logo" />
  <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" width="60" alt="Ant logo" />
</p>

<h1 align="center">Boilerplate React + Vite + Redux + Tailwind + Ant-design</h1>

<p align="center">
  ⚡ Plantilla base moderna para iniciar proyectos con React 19 + Vite, Redux Toolkit, Tailwind CSS, React Query, almacenamiento seguro con LocalForage + CryptoJS y más.
</p>

---

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

Creado con ❤️ por Héctor Balan — listo para ser reutilizado y adaptado a cualquier proyecto React 2025.
