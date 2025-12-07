import { State } from "./State";

export class GoldenFreezer extends State {
  constructor() {
    super();
    this.power = 5000000;
    this.energy = 30;
  }

  getName(): string {
    return "GoldenFreezer";
  }

  attack(): void {
    console.log("Golden Freezer ataca con poder dorado supremo:", this.power);
  }

  defend(value: number): void {
    this.energy -= value;
    console.log("Golden Freezer recibe daño. Energía restante:", this.energy);
  }
}
