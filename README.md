# Proyecto Ecommerce Joyería [React + Vite]

Este proyecto es una aplicación ecommerce desarrollada con React y Vite. Fue creado como parte del curso de React en Coderhouse, con el objetivo educativo de explorar diversas tecnologías incluyendo Firebase y Ant Design.

## Características

- **Listado de Productos:** Muestra una lista de productos disponibles para la compra.
- **Detalle de Producto:** Ver información detallada sobre cada producto.
- **Filtrado por Categoría:** Filtrar productos según diferentes categorías.
- **Carrito de Compras:** Agregar productos a un carrito para proceder con la compra.
- **Proceso de Compra:** Finalizar las compras guardando los datos del usuario y del carrito en Firebase.
- **Integración:** Utiliza Vite para un empaquetado rápido, Firebase para servicios backend y Ant Design para componentes de interfaz de usuario.

## Tecnologías Utilizadas

- **React:** Biblioteca frontend para construir interfaces de usuario.
- **Vite:** Herramienta de construcción frontend de próxima generación que proporciona una experiencia de desarrollo rápida.
- **Firebase:** Plataforma Backend-as-a-Service utilizada para autenticación, almacenamiento de base de datos y hosting.
- **Ant Design:** Sistema de diseño con componentes React para crear interfaces pulidas y fáciles de usar.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio: `git clone <repo_url>`
2. Navega al directorio del proyecto: `cd ecommerce-react-vite`
3. Instala las dependencias: `npm install`
4. Configura Firebase:
   - Crea un proyecto Firebase en [Firebase Console](https://console.firebase.google.com/)
   - Agrega los detalles de configuración de Firebase en `src/firebase/config.js`
5. Inicia el servidor de desarrollo: `npm run dev`
6. Abre tu navegador y visita: `http://localhost:3000`

## Configuración de Firebase

Asegúrate de haber configurado Firebase correctamente proporcionando la configuración de tu proyecto Firebase en `src/firebase/config.js`. Este archivo debe exportar un objeto con los detalles de configuración de Firebase.

```javascript
// src/firebase/config.js
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

export default firebaseConfig;
```

## Uso

- Navega a través de las diferentes secciones de la aplicación utilizando la navegación en la barra lateral.
- Explora productos, agrégalos a tu carrito y procede al checkout para simular una compra.
- Experimenta la integración de Firebase para almacenar de manera segura los datos de usuario y transacciones.

## Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de abrir problemas o enviar solicitudes de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

## Reconocimientos

Este proyecto fue desarrollado como parte del curso de React en Coderhouse. Agradecemos especialmente a nuestros instructores y compañeros por su orientación y apoyo.

---

Siéntete libre de personalizar este README para adaptarlo a las especificaciones y preferencias de tu proyecto. ¡Feliz codificación! 🚀
