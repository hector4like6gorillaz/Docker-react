# Define los objetivos que no producen archivos para evitar conflictos con archivos del mismo nombre.
.PHONY: help up down logs clean

# Levanta los contenedores de Docker en modo detached (segundo plano) y reconstruye las imágenes si es necesario.
up:
	@echo "Levantando contenedores de Docker..."
	docker-compose up --build -d

# Detiene y elimina los contenedores definidos en docker-compose.yml.
down:
	@echo "Deteniendo contenedores de Docker..."
	docker-compose down

# Muestra los logs de los contenedores en tiempo real.
logs:
	@echo "Mostrando logs..."
	docker-compose logs -f

# Limpieza completa: detiene y elimina contenedores, redes y volúmenes huérfanos.
clean:
	@echo "Limpiando entorno Docker (contenedores, redes y volúmenes)..."
	docker-compose down -v --remove-orphans

# Ayuda: Muestra los comandos disponibles.
help:
	@echo "Comandos de Make disponibles:"
	@echo "  up         -> Levanta los contenedores (docker-compose up --build -d)"
	@echo "  down       -> Detiene los contenedores (docker-compose down)"
	@echo "  logs       -> Muestra los logs de los contenedores (docker-compose logs -f)"
	@echo "  clean      -> Detiene y elimina todo (contenedores, volúmenes, etc.)"

# Establece el comando por defecto para que sea 'help' si no se especifica ninguno.
.DEFAULT_GOAL := help
