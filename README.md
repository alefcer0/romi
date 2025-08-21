# ROMI Backend Challenge

## 🚀 Tecnologías
- Node.js
- Express.js
- MongoDB (Mongoose)

## 📂 Arquitectura
- `models/` → esquemas de MongoDB
- `controllers/` → lógica de negocio
- `routes/` → definición de endpoints
- `app.js` → configuración de middlewares y rutas
- `server.js` → conexión a base de datos y arranque del servidor

## ▶️ Cómo ejecutar
1. Clona este repositorio
2. Instala dependencias: `npm install`
3. Crea un archivo `.env` con:
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/romi
4. Inicia el servidor: `npm run dev`

## 📌 Endpoints
- `POST /api/patients` → Registrar paciente
- `GET /api/patients` → Consultar pacientes

Ejemplo POST:
```json
{
"nombre": "Ana López",
"edad": 25,
"sintomas": ["dolor de cabeza", "cansancio"]
}