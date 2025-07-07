# Obligatorio Bases de Datos II - 2025
Proyecto realizado en el marco de la materia Bases de Datos II correspondiente al quinto semestre de la carrera de Ingenieria en Informática perteneciente a la Universidad Católica del Uruguay (UCU). 
Se desarrolló un sistema de votación electrónica para la Corte Electoral de la República Oriental del Uruguay, contando con perfiles de: votante (para ingresar un voto), y administrador, para poder buscar un votante y ver el recuento de votos luego de finalizada la etapa de votación. 

## Principales tecnologías utilizadas
  - Base de datos relacional MySQL.
  - Backend Python con framework Flask. Endpoints RESTful.
  - Frontend React, Node.js.

## Para ejecutar el proyecto
### Opción 1: Manual
#### Backend
  - Asegurarse de estar dentro de la carpeta "backend" en la terminal.
  - Correr el archivo "main.py" ejecutando "python main.py" o "python3 main.py" si utilizas una mac OS y una versión de python superior a la 3.
#### Frontend
  - Asegurarse de estar dentro de la carpeta "frontend" en la terminal.
  - Ejecutar el comando "npm install", que instalará las librerías y packages que no se encuentren en la computadora previamente.
  - Para iniciar el proyecto, utilizar el comando "npm run dev".
  - Clickear sobre el enlace impreso en la consola "http://localhost:5173/" y se dirigirá a la página del proyecto.

### Opción 2: Docker 
  - Asegurarse de tener instalado Docker y Docker Compose.
  - Asegurarse de tener Docker Desktop abierto y corriendo.
  - En la raiz del proyecto, ejecutar el comando "docker-compose up --build".
