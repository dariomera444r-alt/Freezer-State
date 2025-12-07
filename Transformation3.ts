import { State } from "./State";

export class Transformation3 extends State {
  constructor() {
    super();
    this.power = 1200000;
    this.energy = 15;
  }

  getName(): string {
    return "Transformation3";
  }

  attack(): void {
    console.log("Transformation3 desata un ataque poderoso:", this.power);
  }

  defend(value: number): void {
    this.energy -= value;
    console.log("Transformation3 recibe daño. Energía restante:", this.energy);
  }
}
