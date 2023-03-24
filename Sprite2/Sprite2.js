/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 281,
        y: 2
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.BROADCAST, { name: "STOP" }, this.whenIReceiveStop)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      this.y = this.mouse.y;
      yield;
    }
  }

  *whenIReceiveStop() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
