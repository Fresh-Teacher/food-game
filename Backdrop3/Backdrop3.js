/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Backdrop3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop3", "./Backdrop3/costumes/backdrop3.svg", {
        x: 264,
        y: 196
      }),
      new Costume("costume1", "./Backdrop3/costumes/costume1.svg", {
        x: 266,
        y: 217
      })
    ];

    this.sounds = [new Sound("pop", "./Backdrop3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(0, 0);
    this.visible = false;
  }
}
