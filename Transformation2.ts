import { State } from "./State";

export class Transformation2 extends State {
  constructor() {
    super();
    this.power = 850000;
    this.energy = 10;
  }

  getName(): string {
    return "Transformation2";
  }

  attack(): void {
    console.log("Transformation2 ataca con fuerza aumentada:", this.power);
  }

  defend(value: number): void {
    this.energy -= value;
    console.log("Transformation2 recibe daño. Energía restante:", this.energy);
  }
}
