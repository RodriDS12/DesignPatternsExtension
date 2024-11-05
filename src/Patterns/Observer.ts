export function generateObserverTypeScript(): string {
  return `// Interfaz para el Observador
  interface Observer {
      update(message: string): void; // Método para recibir actualizaciones
  }
  
  // Clase Observada (Subject)
  class Subject {
      private observers: Observer[] = []; // Lista de observadores
  
      // Agrega un observador a la lista
      public attach(observer: Observer): void {
          this.observers.push(observer);
          console.log("Observer attached.");
      }
  
      // Remueve un observador de la lista
      public detach(observer: Observer): void {
          const observerIndex = this.observers.indexOf(observer);
          if (observerIndex !== -1) {
              this.observers.splice(observerIndex, 1);
              console.log("Observer detached.");
          }
      }
  
      // Notifica a todos los observadores de un cambio
      public notify(message: string): void {
          console.log("Notifying observers...");
          for (const observer of this.observers) {
              observer.update(message);
          }
      }
  
      // Simula un cambio de estado
      public someBusinessLogic(): void {
          console.log("Subject: Doing some important work...");
          const message = "State changed!";
          this.notify(message); // Notifica a los observadores
      }
  }
  
  // Observador concreto que implementa la interfaz Observer
  class ConcreteObserverA implements Observer {
      update(message: string): void {
          console.log("ConcreteObserverA: Received update with message: " + message);
      }
  }
  
  // Otro observador concreto
  class ConcreteObserverB implements Observer {
      update(message: string): void {
          console.log("ConcreteObserverB: Received update with message: " + message);
      }
  }
  
  // Uso del patrón Observer
  const subject = new Subject();
  
  const observerA = new ConcreteObserverA();
  const observerB = new ConcreteObserverB();
  
  subject.attach(observerA); // Agrega el primer observador
  subject.attach(observerB); // Agrega el segundo observador
  
  subject.someBusinessLogic(); // Cambia el estado y notifica a los observadores
  
  subject.detach(observerA); // Remueve un observador
  
  subject.someBusinessLogic(); // Cambia el estado y notifica a los observadores restantes`;
}

export function generateObserverJavaScript(): string {
  return `// Interfaz para el Observador (simulado)
class Observer {
    update(message) {
        throw new Error("Este método debe ser implementado.");
    }
}

// Clase Observada (Subject)
class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
        console.log("Observer attached.");
    }

    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
            console.log("Observer detached.");
        }
    }

    notify(message) {
        console.log("Notifying observers...");
        this.observers.forEach(observer => observer.update(message));
    }

    someBusinessLogic() {
        console.log("Subject: Doing some important work...");
        const message = "State changed!";
        this.notify(message);
    }
}

// Observador concreto
class ConcreteObserverA extends Observer {
    update(message) {
        console.log("ConcreteObserverA: Received update with message:", message);
    }
}

// Otro observador concreto
class ConcreteObserverB extends Observer {
    update(message) {
        console.log("ConcreteObserverB: Received update with message:", message);
    }
}

// Uso del patrón Observer
const subject = new Subject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.attach(observerA);
subject.attach(observerB);

subject.someBusinessLogic();

subject.detach(observerA);

subject.someBusinessLogic();`;
}

export function generateObserverPhyton(): string {
  return `# Interfaz para el Observador
class Observer:
    def update(self, message):
        raise NotImplementedError("Este método debe ser implementado.")

# Clase Observada (Subject)
class Subject:
    def __init__(self):
        self._observers = []

    def attach(self, observer):
        self._observers.append(observer)
        print("Observer attached.")

    def detach(self, observer):
        if observer in self._observers:
            self._observers.remove(observer)
            print("Observer detached.")

    def notify(self, message):
        print("Notifying observers...")
        for observer in self._observers:
            observer.update(message)

    def some_business_logic(self):
        print("Subject: Doing some important work...")
        message = "State changed!"
        self.notify(message)

# Observador concreto
class ConcreteObserverA(Observer):
    def update(self, message):
        print("ConcreteObserverA: Received update with message:", message)

# Otro observador concreto
class ConcreteObserverB(Observer):
    def update(self, message):
        print("ConcreteObserverB: Received update with message:", message)

# Uso del patrón Observer
subject = Subject()

observer_a = ConcreteObserverA()
observer_b = ConcreteObserverB()

subject.attach(observer_a)
subject.attach(observer_b)

subject.some_business_logic()

subject.detach(observer_a)

subject.some_business_logic()`;
}

export function generateObserverCsharp(): string {
  return `using System;
using System.Collections.Generic;

// Interfaz para el Observador
public interface IObserver
{
    void Update(string message);
}

// Clase Observada (Subject)
public class Subject
{
    private List<IObserver> observers = new List<IObserver>();

    public void Attach(IObserver observer)
    {
        observers.Add(observer);
        Console.WriteLine("Observer attached.");
    }

    public void Detach(IObserver observer)
    {
        observers.Remove(observer);
        Console.WriteLine("Observer detached.");
    }

    public void Notify(string message)
    {
        Console.WriteLine("Notifying observers...");
        foreach (var observer in observers)
        {
            observer.Update(message);
        }
    }

    public void SomeBusinessLogic()
    {
        Console.WriteLine("Subject: Doing some important work...");
        var message = "State changed!";
        Notify(message);
    }
}

// Observador concreto
public class ConcreteObserverA : IObserver
{
    public void Update(string message)
    {
        Console.WriteLine("ConcreteObserverA: Received update with message: " + message);
    }
}

// Otro observador concreto
public class ConcreteObserverB : IObserver
{
    public void Update(string message)
    {
        Console.WriteLine("ConcreteObserverB: Received update with message: " + message);
    }
}

// Uso del patrón Observer
public class Program
{
    public static void Main()
    {
        var subject = new Subject();

        var observerA = new ConcreteObserverA();
        var observerB = new ConcreteObserverB();

        subject.Attach(observerA);
        subject.Attach(observerB);

        subject.SomeBusinessLogic();

        subject.Detach(observerA);

        subject.SomeBusinessLogic();
    }
}`;
}
