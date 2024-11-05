export function generateSingletonTypeScript(): string {
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

export function generateSingletonCsharp(): string {
  return `// Clase Singleton en C#
  public class Singleton
  {
      private static Singleton instance;
  
      // Constructor privado para evitar la creación de instancias desde fuera
      private Singleton()
      {
          Console.WriteLine("Instancia creada");
      }
  
      // Método estático para obtener la instancia del Singleton
      public static Singleton GetInstance()
      {
          if (instance == null)
          {
              instance = new Singleton(); // Crea la instancia si no existe
          }
          return instance; // Retorna la única instancia
      }
  
      public void SomeBusinessLogic()
      {
          Console.WriteLine("Ejecutando lógica de negocio");
      }
  }
  
  // Uso del Singleton
  public class Program
  {
      public static void Main()
      {
          Singleton instance1 = Singleton.GetInstance();
          instance1.SomeBusinessLogic(); // Salida: Ejecutando lógica de negocio
  
          Singleton instance2 = Singleton.GetInstance();
          Console.WriteLine(instance1 == instance2); // Salida: True
      }
  }`;
}

export function generateSingletonJavaScript(): string {
  return `// Clase Singleton en JavaScript
  class Singleton {
      constructor() {
          if (Singleton.instance) {
              return Singleton.instance; // Retorna la instancia existente
          }
          Singleton.instance = this; // Almacena la instancia única
          console.log('Instancia creada');
      }
  
      someBusinessLogic() {
          console.log('Ejecutando lógica de negocio');
      }
  }
  
  // Uso del Singleton
  const instance1 = new Singleton();
  instance1.someBusinessLogic(); // Salida: Ejecutando lógica de negocio
  
  const instance2 = new Singleton();
  console.log(instance1 === instance2); // Salida: true
  `;
}

export function generateSingletonPython(): string {
  return `# Clase Singleton en Python
  class Singleton:
      _instance = None
  
      def __new__(cls):
          if cls._instance is None:
              cls._instance = super(Singleton, cls).__new__(cls)
              print("Instancia creada")
          return cls._instance
  
      def some_business_logic(self):
          print("Ejecutando lógica de negocio")
  
  # Uso del Singleton
  instance1 = Singleton()
  instance1.some_business_logic()  # Salida: Ejecutando lógica de negocio
  
  instance2 = Singleton()
  print(instance1 is instance2)  # Salida: True
    `;
}
