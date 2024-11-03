import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "designPatternGenerator.generate",
    async () => {
      const pattern = await vscode.window.showQuickPick(
        ["Singleton", "Factory", "Strategy"],
        {
          placeHolder: "Select a design pattern to generate",
        }
      );

      if (pattern) {
        let code = "";
        switch (pattern) {
          case "Singleton: Clase con una única instancia global.":
            code = generateSingleton();
            break;
          case "Factory: Crea objetos sin especificar la clase.":
            code = generateFactory();
            break;
          case "Strategy: Define una familia de algoritmos intercambiables.":
            code = generateStrategy();
            break;
        }

        const editor = vscode.window.activeTextEditor;
        if (editor) {
          editor.edit((editBuilder) => {
            editBuilder.insert(editor.selection.active, code);
          });
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function generateSingleton(): string {
  return `// Clase Singleton
class Singleton {
  private static instance: Singleton; // Almacena la única instancia de la clase
  private constructor() {
    // Constructor privado para evitar la creación de instancias desde fuera
    console.log('Instancia creada');
  }

  // Método estático para obtener la instancia del Singleton
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(); // Crea la instancia si no existe
    }
    return Singleton.instance; // Retorna la única instancia
  }

  public someBusinessLogic(): void {
    console.log('Ejecutando lógica de negocio');
  }
}

// Uso del Singleton
const instance1 = Singleton.getInstance(); // Obtiene la instancia
instance1.someBusinessLogic(); // Salida: Ejecutando lógica de negocio

const instance2 = Singleton.getInstance(); // Vuelve a obtener la misma instancia
console.log(instance1 === instance2); // Salida: true
    `;
}

export function generateFactory(): string {
  return `// Interfaz para los productos
interface Product {
    name: string; // Propiedad para almacenar el nombre del producto
    use(): void;  // Método para definir cómo se usa el producto
}

// Implementación de un producto concreto A
class ConcreteProductA implements Product {
    name = "Producto A"; // Nombre específico para el Producto A

    use(): void {
        console.log("Usando el " + this.name); // Salida cuando se usa el Producto A
    }
}

// Implementación de un producto concreto B
class ConcreteProductB implements Product {
    name = "Producto B"; // Nombre específico para el Producto B

    use(): void {
        console.log("Usando el " + this.name); // Salida cuando se usa el Producto B
    }
}

// Clase Factory que crea productos
class ProductFactory {
    // Método estático para crear un producto según el tipo proporcionado
    static createProduct(type: string): Product {
        switch (type) {
            case "A":
                return new ConcreteProductA(); // Retorna una instancia del Producto A
            case "B":
                return new ConcreteProductB(); // Retorna una instancia del Producto B
            default:
                throw new Error("Tipo de producto no válido."); // Maneja tipos de producto no válidos
        }
    }
}

// Uso del Factory
const productA = ProductFactory.createProduct("A"); // Crea el Producto A
productA.use();  // Salida: Usando el Producto A

const productB = ProductFactory.createProduct("B"); // Crea el Producto B
productB.use();  // Salida: Usando el Producto B`;
}

export function generateStrategy(): string {
  return `// Interfaz para las estrategias
interface Strategy {
  execute(a: number, b: number): number; // Método que define la operación
}

// Estrategia concreta para sumar
class AdditionStrategy implements Strategy {
  execute(a: number, b: number): number {
      return a + b; // Realiza la suma
  }
}

// Estrategia concreta para restar
class SubtractionStrategy implements Strategy {
  execute(a: number, b: number): number {
      return a - b; // Realiza la resta
  }
}

// Estrategia concreta para multiplicar
class MultiplicationStrategy implements Strategy {
  execute(a: number, b: number): number {
      return a * b; // Realiza la multiplicación
  }
}

// Contexto que utiliza la estrategia
class Context {
  private strategy: Strategy; // Almacena la estrategia actual

  constructor(strategy: Strategy) {
      this.strategy = strategy; // Asigna la estrategia
  }

  setStrategy(strategy: Strategy) {
      this.strategy = strategy; // Permite cambiar la estrategia
  }

  executeStrategy(a: number, b: number): number {
      return this.strategy.execute(a, b); // Ejecuta la estrategia
  }
}

// Uso del patrón Strategy
const context = new Context(new AdditionStrategy()); // Contexto con estrategia de suma
console.log(context.executeStrategy(5, 3)); // Salida: 8

context.setStrategy(new SubtractionStrategy()); // Cambia a estrategia de resta
console.log(context.executeStrategy(5, 3)); // Salida: 2

context.setStrategy(new MultiplicationStrategy()); // Cambia a estrategia de multiplicación
console.log(context.executeStrategy(5, 3)); // Salida: 15`;
}

export function deactivate() {}