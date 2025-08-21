# ROMI API REST

## Tecnologías
- Node.js
- Express.js
- MongoDB (Mongoose)

## Arquitectura
- `models/` → esquemas de MongoDB
- `controllers/` → lógica de negocio
- `routes/` → definición de endpoints
- `app.js` → configuración de middlewares y rutas
- `server.js` → conexión a base de datos y arranque del servidor

## Ejecución
1. Clonar repositorio
2. Instalar dependencias: `npm install`
3. Crea un archivo `.env` con variables:
    - PORT,
    - MONGO_URI
4. Iniciar el servidor: `npm run dev`

## Endpoints
- `POST /api/patients` → Registrar paciente
- `GET /api/patients` → Consultar pacientes

Ejemplo POST:
```json
{
"nombre": "Ana López",
"edad": 25,
"sintomas": ["dolor de cabeza", "cansancio"]
}