# 🚀 Formulario de Registro - React & Bootstrap

Este proyecto es una aplicación de registro de usuarios desarrollada con **React** como parte del programa de formación de **Generation**. El objetivo principal es demostrar el manejo de estados (`useState`), la validación de formularios y la comunicación entre componentes mediante **props**.

## 📋 Requisitos del Proyecto
El proyecto cumple con los siguientes requerimientos técnicos:
* **Componente App**: Componente raíz encargado de orquestar el flujo de datos y mostrar el resultado de las validaciones.
* **Componente Formulario**: Gestiona el estado local de los inputs y realiza la lógica de validación.
* **Componente Alert**: Muestra mensajes dinámicos de éxito o error recibidos por props.
* **Validación de Datos**:
    * Todos los campos son obligatorios.
    * El formato del email debe ser válido (ej: `user@dominio.com`).
    * Las contraseñas ingresadas deben coincidir.
* **Estilos**: Interfaz moderna y responsiva utilizando **Bootstrap 5** y **Font Awesome**.

## ✨ Características de la Interfaz
* **Diseño Mobile First**: Optimizado para visualización en dispositivos móviles y escritorio.
* **Iconografía Social**: Incluye botones de registro rápido con iconos de Facebook, GitHub y LinkedIn.
* **Alertas Dinámicas**: Mensajes de retroalimentación visualmente diferenciados (verde para éxito, rojo para error).

## 🛠️ Tecnologías y Herramientas
* **React.js**: Biblioteca principal para la construcción de la interfaz.
* **Vite**: Herramienta de construcción (build tool) de última generación.
* **Bootstrap 5**: Framework de CSS para el diseño y componentes responsivos.
* **Font Awesome**: Librería de iconos para mejorar la experiencia de usuario (UX).

## 📂 Estructura de Componentes
La jerarquía de la aplicación es simple y eficiente:
1. **App**: Mantiene el estado `{ msg: "", color: "" }`.
2. **Formulario**: Recibe la función `setAlert` para actualizar el estado del padre tras validar los datos.
3. **Alert**: Recibe las props `mensaje` y `tipo` para renderizar el aviso correspondiente.

## 🚀 Cómo Ejecutar el Proyecto
Para ver este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [TU_URL_AQUI]

   Instalar dependencias: npm install
   Iniciar el servidor de desarrollo: npm run dev
   <!-- Probar todas las veces que se necesite, tanto como con campos Correctos, Incompletos, Incorrectos (por ejepmlo: un correo sin @ o cosas así) -->