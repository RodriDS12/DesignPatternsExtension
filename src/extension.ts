import * as vscode from "vscode";
import {
  generateSingletonCsharp,
  generateSingletonJavaScript,
  generateSingletonPython,
  generateSingletonTypeScript,
} from "./Patterns/Singleton";
import { generateFactoryCsharp, generateFactoryJavaScript, generateFactoryPhyton, generateFactoryTypeScript } from "./Patterns/Factory";
import { generateStrategyCsharp, generateStrategyJavaScript, generateStrategyPhyton, generateStrategyTypeScript } from "./Patterns/Strategy";
import { generateObserverCsharp, generateObserverJavaScript, generateObserverPhyton, generateObserverTypeScript } from "./Patterns/Observer";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "designPatternGenerator.generate",
    async () => {
      const pattern = await vscode.window.showQuickPick(
        [
          {
            label: "Singleton",
            description: "Clase con una única instancia global",
          },
          {
            label: "Factory",
            description: "Crea objetos sin especificar la clase",
          },
          {
            label: "Strategy",
            description: "Define una familia de algoritmos intercambiables",
          },
          {
            label: "Observer",
            description: "Notifica cambios a múltiples objetos suscritos",
          },
        ],
        {
          placeHolder: "Select a design pattern to generate",
        }
      );

      if (pattern) {
        const language = await getLanguage();

        let code = "";
        switch (pattern.label) {
          case "Singleton":
            code = generateSingletonByLanguage(language as string);
            break;
          case "Factory":
            code = generateFactoryByLanguage(language as string);
            break;
          case "Strategy":
            code = generateStrategyByLanguage(language as string);
            break;
          case "Observer":
            code = generateObserverByLanguage(language as string);
            break;
        }

        insertCodeToEditor(code);
      }
    }
  );

  context.subscriptions.push(disposable);
}

function generateSingletonByLanguage(language: string): string {
  switch (language) {
    case "Typescript":
      return generateSingletonTypeScript();
    case "Javascript":
      return generateSingletonJavaScript();
    case "Python":
      return generateSingletonPython();
    case "Csharp":
      return generateSingletonCsharp();
    default:
      return generateSingletonTypeScript();
  }
}

function generateFactoryByLanguage(language: string): string {
  switch (language) {
    case "Typescript":
      return generateFactoryTypeScript();
    case "Javascript":
      return generateFactoryJavaScript();
    case "Python":
      return generateFactoryPhyton();
    case "Csharp":
      return generateFactoryCsharp();
    default:
      return generateFactoryTypeScript();
  }
}

function generateStrategyByLanguage(language: string): string {
  switch (language) {
    case "Typescript":
      return generateStrategyTypeScript();
    case "Javascript":
      return generateStrategyJavaScript();
    case "Python":
      return generateStrategyPhyton();
    case "Csharp":
      return generateStrategyCsharp();
    default:
      return generateStrategyTypeScript();
  }
}

function generateObserverByLanguage(language: string): string {
  switch (language) {
    case "Typescript":
      return generateObserverTypeScript();
    case "Javascript":
      return generateObserverJavaScript();
    case "Python":
      return generateObserverPhyton();
    case "Csharp":
      return generateObserverCsharp();
    default:
      return generateObserverTypeScript();
  }
}

function insertCodeToEditor(code: string) {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    editor.edit((editBuilder) => {
      editBuilder.insert(editor.selection.active, code);
    });
  }
}

async function getLanguage(): Promise<string> {
  let language = vscode.workspace.getConfiguration("patternGen").get("language") as string | undefined;

  if (!language) {
    language = await vscode.window.showQuickPick(["Typescript", "Javascript", "Python", "Csharp"], {
      placeHolder: "Select a language for the code pattern"
    });
  }
  return language ?? "Typescript";
}

export function deactivate() {}
