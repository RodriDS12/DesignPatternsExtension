export function generateFactoryTypeScript(): string {
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

export function generateFactoryJavaScript(): string {
  return `// Interfaz para los productos (simulada con una clase base en JavaScript)
class Product {
    constructor(name) {
        this.name = name;
    }

    use() {
        console.log("Usando el " + this.name);
    }
}

// Implementación de un producto concreto A
class ConcreteProductA extends Product {
    constructor() {
        super("Producto A");
    }
}

// Implementación de un producto concreto B
class ConcreteProductB extends Product {
    constructor() {
        super("Producto B");
    }
}

// Clase Factory que crea productos
class ProductFactory {
    static createProduct(type) {
        switch (type) {
            case "A":
                return new ConcreteProductA();
            case "B":
                return new ConcreteProductB();
            default:
                throw new Error("Tipo de producto no válido.");
        }
    }
}

// Uso del Factory
const productA = ProductFactory.createProduct("A");
productA.use();  // Salida: Usando el Producto A

const productB = ProductFactory.createProduct("B");
productB.use();  // Salida: Usando el Producto B`;
}

export function generateFactoryPhyton(): string {
  return `# Interfaz para los productos (simulada con una clase base en Python)
class Product:
    def __init__(self, name):
        self.name = name

    def use(self):
        print("Usando el " + self.name)

# Implementación de un producto concreto A
class ConcreteProductA(Product):
    def __init__(self):
        super().__init__("Producto A")

# Implementación de un producto concreto B
class ConcreteProductB(Product):
    def __init__(self):
        super().__init__("Producto B")

# Clase Factory que crea productos
class ProductFactory:
    @staticmethod
    def create_product(type):
        if type == "A":
            return ConcreteProductA()
        elif type == "B":
            return ConcreteProductB()
        else:
            raise ValueError("Tipo de producto no válido.")

# Uso del Factory
product_a = ProductFactory.create_product("A")
product_a.use()  # Salida: Usando el Producto A

product_b = ProductFactory.create_product("B")
product_b.use()  # Salida: Usando el Producto B`;
}

export function generateFactoryCsharp(): string {
  return `using System;

// Interfaz para los productos
public interface IProduct
{
    string Name { get; }
    void Use();
}

// Implementación de un producto concreto A
public class ConcreteProductA : IProduct
{
    public string Name => "Producto A";

    public void Use()
    {
        Console.WriteLine("Usando el " + Name);
    }
}

// Implementación de un producto concreto B
public class ConcreteProductB : IProduct
{
    public string Name => "Producto B";

    public void Use()
    {
        Console.WriteLine("Usando el " + Name);
    }
}

// Clase Factory que crea productos
public static class ProductFactory
{
    public static IProduct CreateProduct(string type)
    {
        return type switch
        {
            "A" => new ConcreteProductA(),
            "B" => new ConcreteProductB(),
            _ => throw new ArgumentException("Tipo de producto no válido.")
        };
    }
}

// Uso del Factory
public class Program
{
    public static void Main()
    {
        IProduct productA = ProductFactory.CreateProduct("A");
        productA.Use();  // Salida: Usando el Producto A

        IProduct productB = ProductFactory.CreateProduct("B");
        productB.Use();  // Salida: Usando el Producto B
    }
}`;
}
