# Define los objetivos que no producen archivos para evitar conflictos con archivos del mismo nombre.
.PHONY: help up-prod up-qa up-dev down-prod down-qa down-dev logs-prod logs-qa logs-dev clean

# --- Comandos de Producción (usa .env.prod) ---
up-prod:
	@echo "Levantando contenedor de PRODUCCIÓN..."
	docker-compose --env-file .env.prod up --build -d

down-prod:
	@echo "Deteniendo contenedor de PRODUCCIÓN..."
	docker-compose --env-file .env.prod down

logs-prod:
	@echo "Mostrando logs de PRODUCCIÓN..."
	docker-compose --env-file .env.prod logs -f

# --- Comandos de QA (usa .env.qa) ---
up-qa:
	@echo "Levantando contenedor de QA..."
	docker-compose --env-file .env.qa up --build -d

down-qa:
	@echo "Deteniendo contenedor de QA..."
	docker-compose --env-file .env.qa down

logs-qa:
	@echo "Mostrando logs de QA..."
	docker-compose --env-file .env.qa logs -f

# --- Comandos de Desarrollo (usa .env.dev) ---
up-dev:
	@echo "Levantando contenedor de DESARROLLO..."
	docker-compose --env-file .env.dev up --build -d

down-dev:
	@echo "Deteniendo contenedor de DESARROLLO..."
	docker-compose --env-file .env.dev down

logs-dev:
	@echo "Mostrando logs de DESARROLLO..."
	docker-compose --env-file .env.dev logs -f

# --- Comandos Generales ---
clean:
	@echo "Limpiando entorno Docker (contenedores, redes y volúmenes)..."
	docker-compose --env-file .env.prod down -v --remove-orphans 2>/dev/null || true
	docker-compose --env-file .env.qa down -v --remove-orphans 2>/dev/null || true
	docker-compose --env-file .env.dev down -v --remove-orphans 2>/dev/null || true

# Ayuda: Muestra los comandos disponibles.
help:
	@echo "Comandos de Make disponibles:"
	@echo ""
	@echo "  up-prod    -> Levanta el contenedor de Producción."
	@echo "  up-qa      -> Levanta el contenedor de QA."
	@echo "  up-dev     -> Levanta el contenedor de Desarrollo."
	@echo ""
	@echo "  down-prod  -> Detiene el contenedor de Producción."
	@echo "  down-qa    -> Detiene el contenedor de QA."
	@echo "  down-dev   -> Detiene el contenedor de Desarrollo."
	@echo ""
	@echo "  logs-prod  -> Muestra los logs de Producción."
	@echo "  logs-qa    -> Muestra los logs de QA."
	@echo "  logs-dev   -> Muestra los logs de Desarrollo."
	@echo ""
	@echo "  clean      -> Detiene y elimina TODOS los contenedores y volúmenes de todos los entornos."

# Establece el comando por defecto para que sea 'help' si no se especifica ninguno.
.DEFAULT_GOAL := help

