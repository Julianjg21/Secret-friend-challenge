# Amigo Secreto (Secret-friend-challenge) 🎁

## Descripción

Esta es una aplicación sencilla para organizar un sorteo de "Amigo Secreto". Los usuarios pueden agregar nombres de amigos, hacer un sorteo aleatorio y obtener el nombre del amigo secreto.

## Tecnologías utilizadas

- **HTML5:** Estructura de la aplicación con html.
- **CSS3:** Estilo incluyendo colores personalizados y diseño responsivo con css puro.
- **JavaScript:** Lógica del sorteo y manipulación del DOM.

## Instrucciones de instalación

1. Clona este repositorio:
   ```bash
   git clone <https://github.com/Julianjg21/Secret-friend-challenge.git>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd Secret-friend-challenge
   ```
3. No se necesita configuración adicional, solo abre el archivo `index.html` en tu navegador.

## Cómo usar

1. **Agregar nombres:** Escribe el nombre de un amigo en el campo de texto y presiona el botón "Añadir".
2. **Ver lista de amigos:** Los nombres aparecerán en una lista.
3. **Sortear amigo:** Haz clic en el botón "Sortear amigo" para realizar el sorteo. Después de 5 segundos, el resultado mostrará el amigo secreto.

## Estructura del proyecto

```
├── index.html    # Archivo principal de la aplicación
├── app.js         # Lógica de la aplicación
└── style.css      # Estilos personalizados
```


## Problemas conocidos

- **Lista vacía:** Si no agregas nombres, el sorteo no muestra resultados.
- **Guardado de datos:** Los datos no se guardan si recargas la página.

## Soluciones posibles

- Para guardar datos podrías como opcion agregar `localStorage` para guardar la data en las cookies.

## Mejoras futuras

- Soporte para varios sorteos simultáneos.
- Incorporar efectos de animación al mostrar resultados.
- Compatibilidad con almacenamiento de datos.

Espero que te diviertas usándolo. ¡Feliz sorteo! 🎉
