# Monorepositorio del Reto Fullstack

## 1. Introducción

Este monorepositorio del reto fullstack está realizado con **TypeScript** como lenguaje de programación principal. Cuenta con:

- Un **frontend** realizado con **Vite** y **React JS**.
- Un **backend** desarrollado con **Node.js** y **Express Framework**.

---

## 2. Pasos para ejecutar el proyecto localmente

### 2.1. Descarga el código del proyecto en GitHub

**Repositorio:** [Challenge](https://github.com/AlejandroDeveloper2/Challenge)

### 2.2. Abrir el proyecto en VS Code

Una vez descargado, ábrelo en **Visual Studio Code**.

### 2.3. Instalar dependencias

En la terminal, ejecuta el siguiente comando para instalar las dependencias necesarias:

```sh
npm install
```

### 2.4. Configurar variables de entorno

#### 2.4.1. Configurar el Backend

Dirígete a la carpeta **backend** y crea un archivo **.env** en la raíz del proyecto con el siguiente contenido:

```sh
MONGO_DB_URI=mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tienda
SERVER_PORT=3000
```

#### 2.4.2. Configurar el Frontend

Dirígete a la carpeta **frontend** y crea un archivo **.env.local** en la raíz con el siguiente contenido:

```sh
VITE_BACKEND_URL_LOCAL=http://localhost:3000
VITE_BACKEND_URL_PRODUCTION=https://challenge-production-d960.up.railway.app
```

### 2.5. Ejecutar el proyecto

Ubícate en la carpeta general del proyecto **challenge\_React\_Node** y en la terminal ejecuta el siguiente comando:

```sh
npm run dev
```

Esto iniciará tanto el **backend** como el **frontend**.

---

## 3. Justificación de elecciones técnicas

Decidí usar **TypeScript** en lugar de **JavaScript** porque ofrece:

- Mejor **control de errores**.
- Un mejor manejo de **tipos y estructura de datos** gracias a su **tipado estático**.
- Beneficios en **autocompletado** y **detección temprana de errores**.

---

## 4. Estructura del Proyecto

### 4.1. Backend

El backend está construido con una estructura que implementa dos patrones de diseño:

1. **MVC (Model-View-Controller)**
2. **Patrón Repositorio**

#### 4.1.1. Estructura de carpetas del Backend

```
backend/
│── src/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── middleware/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── utils/
```

Cada carpeta tiene una funcionalidad específica:

- **config/**: Configuración de la aplicación.
- **controllers/**: Controladores que manejan la lógica de las rutas.
- **database/**: Configuración y conexión a la base de datos.
- **middleware/**: Middlewares personalizados.
- **models/**: Definición de modelos de datos.
- **repositories/**: Capa de abstracción para la interacción con la base de datos.
- **routes/**: Definición de rutas del API.
- **services/**: Servicios con la lógica de negocio.
- **types/**: Definiciones de tipos TypeScript.
- **utils/**: Utilidades y funciones auxiliares.

### 4.2. Frontend

El frontend está construido con una estructura de carpetas que modulariza y separa componentes, páginas, hooks, rutas y utilidades, permitiendo que el código esté más ordenado.

#### 4.2.1. Estructura de carpetas del Frontend

```
frontend/
│── public/
│── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── hooks/
│   ├── layout/
│   ├── pages/
│   ├── routes/
│   ├── store/
│   ├── styles/
│   ├── types/
│   ├── utils/
```

Cada carpeta tiene su propósito:

- **public/**: Archivos estáticos.
- **api/**: Módulos para realizar peticiones a la API.
- **assets/**: Imágenes y otros recursos estáticos.
- **components/**: Componentes reutilizables.
- **config/**: Configuración general del proyecto.
- **hooks/**: Hooks personalizados.
- **layout/**: Componentes de estructura de la aplicación.
- **pages/**: Páginas principales de la aplicación.
- **routes/**: Configuración de las rutas.
- **store/**: Estado global de la aplicación.
- **styles/**: Archivos de estilos globales.
- **types/**: Definición de tipos TypeScript.
- **utils/**: Funciones de utilidad.

