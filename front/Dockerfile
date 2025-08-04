# Stage 1: Construcción de la aplicación
# USA LA MISMA VERSIÓN DE NODE QUE EN DESARROLLO. En tu caso, la 22.
FROM node:22-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Habilita Corepack para usar yarn (la forma moderna y recomendada)
RUN corepack enable

# Copia los archivos de definición de dependencias. Incluimos yarn.lock.
COPY package.json yarn.lock* ./

# Instala las dependencias usando yarn.
# --frozen-lockfile asegura que se use exactamente el yarn.lock sin modificarlo.
RUN yarn install --frozen-lockfile

# Declara los argumentos que esperamos recibir desde docker-compose.yml
ARG VITE_API_BASE_URL
ARG VITE_STORAGE_ENCRYPTION_KEY
ARG BUILD_SCRIPT=build

# Asigna los argumentos a variables de entorno para que 'yarn build' pueda usarlos
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_STORAGE_ENCRYPTION_KEY=$VITE_STORAGE_ENCRYPTION_KEY

# Copia el resto del código fuente de la aplicación al contenedor
COPY . .

# Construye la aplicación usando el script que nos pasen como argumento
RUN yarn run ${BUILD_SCRIPT}

# Stage 2: Servidor web para producción
FROM nginx:alpine

# ¡CORRECCIÓN IMPORTANTE!
# Copiamos el contenido de la carpeta "dist" (generada por Vite)
# al directorio raíz de Nginx para que pueda servir los archivos.
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiamos nuestra configuración personalizada de Nginx.
# Esto sobreescribe la configuración por defecto y maneja las rutas de la SPA.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 (puerto por defecto de Nginx)
EXPOSE 80

# Comando para iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
