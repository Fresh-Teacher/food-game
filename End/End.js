/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class End extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./End/costumes/costume1.svg", { x: 276, y: 180 })
    ];

    this.sounds = [new Sound("pop", "./End/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "STOP" }, this.whenIReceiveStop),
      new Trigger(Trigger.BROADCAST, { name: "STOP" }, this.whenIReceiveStop2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.attempt2++;
    this.stage.vars.score = 0;
    this.stage.vars.attempt = 0;
    this.stage.watchers.HighScore.visible = false;
    this.goto(0, 0);
    this.visible = false;
  }

  *whenIReceiveStop() {}

  *whenIReceiveStop2() {
    this.stage.vars.yourScore =
      this.toNumber(this.stage.vars.yourScore) * 10 -
      this.toNumber(this.stage.vars.bombsHit) * 15;
    this.stage.vars.score = this.toNumber(this.stage.vars.score) * 10;
    this.stage.watchers.HighScore.visible = true;
    if (this.compare(this.stage.vars.score, this.stage.vars.HighScore) > 0) {
      this.stage.vars.HighScore = this.stage.vars.score;
    }
    this.stage.watchers.yourScore.visible = true;
    this.stage.watchers.bombsHit.visible = true;
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.moveBehind(50);
  }
}
