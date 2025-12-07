import type { State } from "./State";

export class Freeza {
  private state!: State;

  constructor(initialState: State) {
    this.transitionTo(initialState);
  }

  // Cambia de estado dinámicamente
  transitionTo(state: State): void {
    console.log(`→ Freezer cambia a: ${state.getName()}`);
    this.state = state;
    this.state.setFreeza(this);
  }

  // Delegamos comportamiento al estado actual
  attack(): void {
    this.state.attack();
  }

  defend(value: number): void {
    this.state.defend(value);
  }

  // Verificación simple
  isAlive(): boolean {
    return this.state.energy > 0;
  }
}
