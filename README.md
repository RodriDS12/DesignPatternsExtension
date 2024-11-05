# Generate Design Pattern

![Generate Design Pattern Logo](./src/images/logo.png)

**Generate Design Pattern** es una extensión de Visual Studio Code que facilita la creación de patrones de diseño en proyectos de desarrollo de software. Con esta herramienta, puedes generar código base para patrones de diseño como Singleton, Factory, Observer, Strategy, y más, directamente desde el editor.

## Características

- Genera código de patrones de diseño con configuraciones personalizables.
- Soporte para múltiples patrones de diseño, incluyendo:
  - **Singleton**
  - **Factory**
  - **Observer**
  - **Strategy**
- Interfaz fácil de usar a través de comandos y menús contextuales.
- Personalización del código generado para adaptarse a diferentes lenguajes y estilos de código.
- Documentación en línea para cada patrón con ejemplos de uso.

> **Nota**: Por favor, consulta la sección de "Configuración" para obtener más detalles sobre cómo personalizar los patrones generados.

## Instalación

1. Abre Visual Studio Code.
2. Ve a la pestaña **Extensiones** (o usa `Ctrl+Shift+X`).
3. Busca "**Generate Design Pattern**".
4. Haz clic en **Instalar**.
5. Una vez instalada, puedes comenzar a usar la extensión desde el menú de comandos (`Ctrl+Shift+P`) buscando "**Generate Design Pattern**".

## Uso

1. Abre el archivo o el proyecto en el que deseas implementar un patrón de diseño.
2. Abre la paleta de comandos (`Ctrl+Shift+P`).
3. Escribe `Generate Design Pattern` y selecciona el patrón que deseas generar.
4. Sigue las instrucciones para personalizar el patrón (si es aplicable).
5. El código base del patrón se generará en el archivo actual o en una nueva ubicación dentro de tu proyecto, dependiendo de la configuración seleccionada.

## Configuración

Puedes personalizar algunos aspectos de los patrones de diseño generados a través de la configuración de usuario en VS Code.

1. Ve a **Preferencias > Configuración** (`Ctrl+,`).
2. Busca `Generate Design Pattern` para ver las opciones disponibles.
   
Algunas opciones incluyen:
- **Lenguaje de Programación**: Define el lenguaje en el que se generarán los patrones.
- **Estilo de Código**: Ajusta aspectos de estilo, como el uso de `snake_case` o `camelCase`.
- **Ubicación del Código**: Determina en qué carpeta se generarán los archivos de patrones.

## Ejemplos de Uso

### Generar un Singleton

1. Abre la paleta de comandos (`Ctrl+Shift+P`).
2. Escribe `Generate Singleton Pattern` y presiona `Enter`.
3. Personaliza las opciones (nombre de clase, accesibilidad, etc.).
4. Revisa el código generado.

```typescript
// Ejemplo de código generado para el patrón Singleton en TypeScript

class Singleton {
    private static instance: Singleton;

    private constructor() {
        // Constructor privado
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
