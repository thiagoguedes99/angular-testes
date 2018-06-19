export class Jogador {
  power: number;

  constructor() {
    this.power = 100;
  }

  menosPower (menos: number) {
    if (menos >= this.power) {
      this.power = 0;
    } else {
      this.power -= menos;
    }

    return this.power;
  }
}
