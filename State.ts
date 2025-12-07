import type { Freeza } from "./Freeza";

export abstract class State {
  power!: number;
  energy!: number;

  protected freeza!: Freeza;

  setFreeza(freeza: Freeza): void {
    this.freeza = freeza;
  }

  getEnergy(): number {
    return this.energy;
  }

  // 👉 NUEVO: cada estado debe decir su nombre
  abstract getName(): string;

  abstract attack(): void;
  abstract defend(value: number): void;
}
