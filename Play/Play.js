/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Play extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Play/costumes/costume1.svg", { x: 76, y: 36 }),
      new Costume("costume2", "./Play/costumes/costume2.svg", { x: 64, y: 98 }),
      new Costume("costume3", "./Play/costumes/costume3.svg", { x: 64, y: 98 }),
      new Costume("costume4", "./Play/costumes/costume4.svg", { x: 64, y: 98 }),
      new Costume("costume5", "./Play/costumes/costume5.svg", { x: 148, y: 98 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.timer.visible = false;
    this.stage.watchers.yourScore.visible = false;
    this.stage.watchers.missed.visible = false;
    this.stage.vars.tgvfdew = 0;
    this.costume = "costume1";
    this.stage.costume = "backdrop1";
    this.size = 100;
    this.effects.clear();
    this.visible = true;
    this.goto(-10, -53);
    while (!(this.mouse.down && this.touching("mouse"))) {
      if (this.touching("mouse")) {
        for (let i = 0; i < 10; i++) {
          this.size += 1;
          this.effects.brightness += 10;
          yield;
        }
        while (!!this.touching("mouse")) {
          yield;
        }
        for (let i = 0; i < 10; i++) {
          this.size -= 1;
          this.effects.brightness -= 10;
          yield;
        }
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(0.1);
    this.effects.clear();
    this.size = 100;
    this.costume = "costume2";
    this.goto(0, 0);
    this.stage.costume = "backdrop2";
    this.broadcast("321");
    for (let i = 0; i < 3; i++) {
      for (let i = 0; i < 10; i++) {
        this.size -= 5;
        yield;
      }
      for (let i = 0; i < 4; i++) {
        this.effects.ghost += 25;
        yield;
      }
      this.size = 100;
      this.effects.clear();
      this.costumeNumber++;
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 4; i++) {
      this.effects.ghost += 25;
      yield;
    }
    this.visible = false;
    this.broadcast("message1");
  }

  *whenIReceiveMessage1() {
    for (let i = 0; i < 60; i++) {
      yield* this.wait(1);
      this.stage.vars.tgvfdew++;
      yield;
    }
    this.broadcast("STOP");
    this.stage.watchers.score.visible = false;
    this.stage.watchers.missed.visible = true;
    this.stage.vars.yourScore = this.stage.vars.score;
  }

  *whenIReceiveMessage2() {
    this.stage.vars.timer = 60;
    this.stage.watchers.timer.visible = true;
    this.visible = true;
    for (let i = 0; i < 60; i++) {
      yield* this.wait(1);
      this.stage.vars.timer--;
      yield;
    }
    this.stage.watchers.timer.visible = false;
  }
}
