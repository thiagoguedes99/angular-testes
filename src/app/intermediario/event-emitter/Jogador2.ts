import { EventEmitter } from "@angular/core";

export class Jogador2 {
  power: number;
  powerChange = new EventEmitter<number>()

  constructor() {
    this.power = 100;
  }

  menosPower (menos: number) {
    if (menos >= this.power) {
      this.power = 0;
    } else {
      this.power -= menos;
    }

    // return this.power;
    this.powerChange.emit(this.power);
  }
}
