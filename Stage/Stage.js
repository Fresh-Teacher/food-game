/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("pop", "./Stage/sounds/pop.wav"),
      new Sound("Dubstep- Mix.mp3", "./Stage/sounds/Dubstep- Mix.mp3.wav"),
      new Sound(
        "bluegrass banjo - country banjo.mp3",
        "./Stage/sounds/bluegrass banjo - country banjo.mp3.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.score = 220;
    this.vars.yourScore = 175;
    this.vars.missed = 71;
    this.vars.tgvfdew = 60;
    this.vars.waitTime = 1.2478952130302787;
    this.vars.HighScore = 220;
    this.vars.attempt = 0;
    this.vars.attempt2 = 60;
    this.vars.bombsHit = 3;
    this.vars.timer = 0;

    this.watchers.score = new Watcher({
      label: "Score:",
      style: "normal",
      visible: false,
      value: () => this.vars.score,
      x: 247,
      y: 171
    });
    this.watchers.yourScore = new Watcher({
      label: "Your Score:",
      style: "large",
      visible: true,
      value: () => this.vars.yourScore,
      x: 384,
      y: -23
    });
    this.watchers.missed = new Watcher({
      label: "Missed",
      style: "large",
      visible: true,
      value: () => this.vars.missed,
      x: 640,
      y: -23
    });
    this.watchers.HighScore = new Watcher({
      label: "☁ High Score",
      style: "large",
      visible: true,
      value: () => this.vars.HighScore,
      x: 384,
      y: -77
    });
    this.watchers.bombsHit = new Watcher({
      label: "bombs hit",
      style: "large",
      visible: true,
      value: () => this.vars.bombsHit,
      x: 607,
      y: -77
    });
    this.watchers.timer = new Watcher({
      label: "timer",
      style: "large",
      visible: false,
      value: () => this.vars.timer,
      x: 245,
      y: 175
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("bluegrass banjo - country banjo.mp3");
      yield;
    }
  }
}
