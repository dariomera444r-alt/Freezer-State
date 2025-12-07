import { State } from "./State";

export class Transformation4 extends State {
  constructor() {
    super();
    this.power = 2000000;
    this.energy = 20;
  }

  getName(): string {
    return "Transformation4";
  }

  attack(): void {
    console.log("Transformation4 libera un rayo destructivo:", this.power);
  }

  defend(value: number): void {
    this.energy -= value;
    console.log("Transformation4 recibe daño. Energía restante:", this.energy);
  }
}
