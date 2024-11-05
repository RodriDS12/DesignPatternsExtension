export function generateStrategyTypeScript(): string {
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

export function generateStrategyJavaScript(): string {
  return `// Interfaz para las estrategias (simulada con una clase base)
class Strategy {
    execute(a, b) {
        throw new Error("Este método debe ser implementado.");
    }
}

// Estrategia concreta para sumar
class AdditionStrategy extends Strategy {
    execute(a, b) {
        return a + b;
    }
}

// Estrategia concreta para restar
class SubtractionStrategy extends Strategy {
    execute(a, b) {
        return a - b;
    }
}

// Estrategia concreta para multiplicar
class MultiplicationStrategy extends Strategy {
    execute(a, b) {
        return a * b;
    }
}

// Contexto que utiliza la estrategia
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}

// Uso del patrón Strategy
const context = new Context(new AdditionStrategy());
console.log(context.executeStrategy(5, 3)); // Salida: 8

context.setStrategy(new SubtractionStrategy());
console.log(context.executeStrategy(5, 3)); // Salida: 2

context.setStrategy(new MultiplicationStrategy());
console.log(context.executeStrategy(5, 3)); // Salida: 15`;
}

export function generateStrategyPhyton(): string {
  return `# Interfaz para las estrategias (simulada con una clase base)
class Strategy:
    def execute(self, a, b):
        raise NotImplementedError("Este método debe ser implementado.")

# Estrategia concreta para sumar
class AdditionStrategy(Strategy):
    def execute(self, a, b):
        return a + b

# Estrategia concreta para restar
class SubtractionStrategy(Strategy):
    def execute(self, a, b):
        return a - b

# Estrategia concreta para multiplicar
class MultiplicationStrategy(Strategy):
    def execute(self, a, b):
        return a * b

# Contexto que utiliza la estrategia
class Context:
    def __init__(self, strategy):
        self.strategy = strategy

    def set_strategy(self, strategy):
        self.strategy = strategy

    def execute_strategy(self, a, b):
        return self.strategy.execute(a, b)

# Uso del patrón Strategy
context = Context(AdditionStrategy())
print(context.execute_strategy(5, 3))  # Salida: 8

context.set_strategy(SubtractionStrategy())
print(context.execute_strategy(5, 3))  # Salida: 2

context.set_strategy(MultiplicationStrategy())
print(context.execute_strategy(5, 3))  # Salida: 15`;
}

export function generateStrategyCsharp(): string {
  return `using System;

// Interfaz para las estrategias
public interface IStrategy
{
    int Execute(int a, int b);
}

// Estrategia concreta para sumar
public class AdditionStrategy : IStrategy
{
    public int Execute(int a, int b)
    {
        return a + b;
    }
}

// Estrategia concreta para restar
public class SubtractionStrategy : IStrategy
{
    public int Execute(int a, int b)
    {
        return a - b;
    }
}

// Estrategia concreta para multiplicar
public class MultiplicationStrategy : IStrategy
{
    public int Execute(int a, int b)
    {
        return a * b;
    }
}

// Contexto que utiliza la estrategia
public class Context
{
    private IStrategy _strategy;

    public Context(IStrategy strategy)
    {
        _strategy = strategy;
    }

    public void SetStrategy(IStrategy strategy)
    {
        _strategy = strategy;
    }

    public int ExecuteStrategy(int a, int b)
    {
        return _strategy.Execute(a, b);
    }
}

// Uso del patrón Strategy
public class Program
{
    public static void Main()
    {
        Context context = new Context(new AdditionStrategy());
        Console.WriteLine(context.ExecuteStrategy(5, 3)); // Salida: 8

        context.SetStrategy(new SubtractionStrategy());
        Console.WriteLine(context.ExecuteStrategy(5, 3)); // Salida: 2

        context.SetStrategy(new MultiplicationStrategy());
        Console.WriteLine(context.ExecuteStrategy(5, 3)); // Salida: 15
    }
}`;
}
