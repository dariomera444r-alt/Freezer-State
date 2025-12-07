import { State } from "./State";

export class Transformation1 extends State {
  constructor() {
    super();
    this.power = 530000;
    this.energy = 5;
  }

  // 👉 Agregado
  getName(): string {
    return "Transformation1";
  }

  attack(): void {
    console.log("Transformation1 ataca con poder básico:", this.power);
  }

  defend(value: number): void {
    this.energy -= value;
    console.log("Transformation1 recibe daño. Energía restante:", this.energy);
  }
}

