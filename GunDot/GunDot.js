/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GunDot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GunDot/costumes/costume1.svg", {
        x: 18,
        y: 18
      })
    ];

    this.sounds = [
      new Sound("pop", "./GunDot/sounds/pop.wav"),
      new Sound("Gunfire1", "./GunDot/sounds/Gunfire1.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "STOP" }, this.whenIReceiveStop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.clear();
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    while (true) {
      if (this.mouse.down) {
        yield* this.startSound("Gunfire1");
        this.size = 130;
        yield* this.wait(0.1);
        this.size = 100;
      }
      yield;
    }
  }

  *startAsClone() {
    yield* this.wait(0.05);
    for (let i = 0; i < 4; i++) {
      this.effects.ghost += 25;
      yield;
    }
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveStop() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMessage2() {
    this.size = 100;
    this.visible = true;
    while (!0) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }
}
