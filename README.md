# 🤖 MiniGPT HF

MiniGPT HF es una aplicación web de chat educativo desarrollada con **Node.js**, **Express** y la **API de Hugging Face Inference**. Permite interactuar con diferentes modelos de Inteligencia Artificial, seleccionando tanto el modelo como el comportamiento del asistente mediante *System Prompts* personalizados.

---

# 📌 Características

- 💬 Chat interactivo con Inteligencia Artificial.
- 🤖 Selección dinámica de modelos de IA.
- 🧠 Selección del tipo de asistente mediante System Prompt.
- 🗑️ Opción para limpiar la conversación.
- 🌐 Backend desarrollado con Express.
- 🔒 Uso seguro del token mediante variables de entorno.
- 🎨 Interfaz moderna desarrollada con HTML, CSS y JavaScript.

---

# 🚀 Tecnologías utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Node.js
- Express
- CORS
- Dotenv

## Inteligencia Artificial

- Hugging Face Inference API

---

# 📂 Estructura del proyecto

```
minigpt-hf-ortiz/

│
├── backend/
│   ├── public/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── styles.css
│   │
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── .env
│
├── .gitignore
└── README.md
```

---

# ⚙️ Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/USUARIO/minigpt-hf-ortiz.git
```

Ingresar a la carpeta

```bash
cd minigpt-hf-ortiz/backend
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Configurar variables de entorno

Crear un archivo llamado

```
.env
```

con el siguiente contenido:

```env
HF_TOKEN=TU_TOKEN_DE_HUGGING_FACE
PORT=3000
HF_PROVIDER=auto
HF_MODEL=Qwen/Qwen3-8B
```

---

## 4. Ejecutar el servidor

```bash
npm start
```

o

```bash
node server.js
```

---

## 5. Abrir la aplicación

```
http://localhost:3000
```

---

# 🧠 Modelos compatibles

La aplicación permite seleccionar diferentes modelos de IA.

Ejemplos:

- Qwen 2.5
- Llama 3.1
- DeepSeek V3
- Gemma 3
- -DeepSeek R1


> La disponibilidad depende de la API de Hugging Face.

---

# 🎯 Modos del asistente

La aplicación permite modificar el comportamiento del modelo mediante distintos **System Prompts**.

### 👨‍💻 Profesor de Desarrollo Web

Responde preguntas relacionadas con HTML, CSS, JavaScript, Node.js y desarrollo web.

---

### 🇺🇸 Tutor de Inglés

Corrige errores gramaticales, explica vocabulario y proporciona ejemplos.

---

### 🐞 Depurador Técnico

Ayuda a identificar errores de programación y propone posibles soluciones.

---

# 📸 Funcionalidades

- Envío de mensajes.
- Recepción de respuestas mediante IA.
- Historial persistente.
- Cambio de modelo.
- Cambio del comportamiento del asistente.
- Limpieza del historial.

---

# 🔒 Variables de entorno

| Variable | Descripción |
|----------|-------------|
| HF_TOKEN | Token de Hugging Face |
| PORT | Puerto del servidor |
| HF_PROVIDER | Proveedor utilizado |
| HF_MODEL | Modelo por defecto |

---

# 📡 API

## Verificar estado del servidor

```
GET /api/health
```

Respuesta

```json
{
    "ok": true,
    "message": "Backend funcionando"
}
```

---

## Enviar mensaje al chat

```
POST /api/chat
```

Ejemplo de petición

```json
{
    "model":"Qwen/Qwen3-8B",
    "systemPrompt":"web",
    "messages":[
        {
            "role":"user",
            "content":"¿Qué es JavaScript?"
        }
    ]
}
```

Respuesta

```json
{
    "answer":"JavaScript es un lenguaje de programación..."
}
```

---

# 🎨 Interfaz

La aplicación cuenta con:

- Panel lateral de configuración.
- Selección del modelo de IA.
- Selección del tipo de asistente.
- Botón para limpiar chat.
- Diseño responsive.
- Interfaz moderna.

---

# 👨‍💻 Autor

**Gelen Ortiz**

Proyecto desarrollado con fines educativos utilizando la API de Hugging Face.

---

# 📄 Licencia

Este proyecto se distribuye únicamente con fines académicos y educativos.
