/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 248,
        y: 185
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "STOP" }, this.whenIReceiveStop),
      new Trigger(Trigger.BROADCAST, { name: "321" }, this.whenIReceive321)
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    this.goto(0, 0);
    this.visible = false;
  }

  *whenIReceiveStop() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceive321() {
    this.visible = true;
    this.moveBehind(10);
    while (true) {
      if (this.mouse.down) {
        for (let i = 0; i < 3; i++) {
          this.goto(this.random(-5, 5), this.random(-5, 5));
          yield;
        }
        this.goto(0, 0);
      }
      yield;
    }
  }
}
