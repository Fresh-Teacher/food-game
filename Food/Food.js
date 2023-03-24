/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Food extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Food/costumes/costume1.svg", { x: 33, y: 33 }),
      new Costume("costume2", "./Food/costumes/costume2.svg", { x: 40, y: 28 }),
      new Costume("costume3", "./Food/costumes/costume3.svg", { x: 27, y: 51 }),
      new Costume("costume4", "./Food/costumes/costume4.svg", { x: 24, y: 47 }),
      new Costume("muffin-a", "./Food/costumes/muffin-a.svg", { x: 45, y: 35 }),
      new Costume("orange2-a", "./Food/costumes/orange2-a.svg", {
        x: 50,
        y: 24
      }),
      new Costume("costume5", "./Food/costumes/costume5.svg", { x: 31, y: 57 }),
      new Costume(
        "Explode-05-june[2",
        "./Food/costumes/Explode-05-june[2.png",
        { x: 52, y: 72 }
      ),
      new Costume(
        "Explode-05-june[3",
        "./Food/costumes/Explode-05-june[3.png",
        { x: 104, y: 124 }
      ),
      new Costume(
        "Explode-05-june[4",
        "./Food/costumes/Explode-05-june[4.png",
        { x: 144, y: 154 }
      ),
      new Costume(
        "Explode-05-june[5",
        "./Food/costumes/Explode-05-june[5.png",
        { x: 162, y: 168 }
      ),
      new Costume(
        "Explode-05-june[6",
        "./Food/costumes/Explode-05-june[6.png",
        { x: 170, y: 172 }
      ),
      new Costume(
        "Explode-05-june[7",
        "./Food/costumes/Explode-05-june[7.png",
        { x: 176, y: 168 }
      ),
      new Costume(
        "Explode-05-june[8",
        "./Food/costumes/Explode-05-june[8.png",
        { x: 168, y: 172 }
      ),
      new Costume(
        "Explode-05-june[9",
        "./Food/costumes/Explode-05-june[9.png",
        { x: 204, y: 180 }
      ),
      new Costume(
        "Explode-05-june[10",
        "./Food/costumes/Explode-05-june[10.png",
        { x: 168, y: 166 }
      ),
      new Costume(
        "Explode-05-june[11",
        "./Food/costumes/Explode-05-june[11.png",
        { x: 172, y: 186 }
      ),
      new Costume(
        "Explode-05-june[12",
        "./Food/costumes/Explode-05-june[12.png",
        { x: 176, y: 168 }
      ),
      new Costume(
        "Explode-05-june[13",
        "./Food/costumes/Explode-05-june[13.png",
        { x: 178, y: 172 }
      ),
      new Costume(
        "Explode-05-june[14",
        "./Food/costumes/Explode-05-june[14.png",
        { x: 182, y: 180 }
      ),
      new Costume(
        "Explode-05-june[15",
        "./Food/costumes/Explode-05-june[15.png",
        { x: 184, y: 180 }
      ),
      new Costume(
        "Explode-05-june[16",
        "./Food/costumes/Explode-05-june[16.png",
        { x: 184, y: 180 }
      ),
      new Costume(
        "Explode-05-june[17",
        "./Food/costumes/Explode-05-june[17.png",
        { x: 188, y: 174 }
      ),
      new Costume(
        "Explode-05-june[18",
        "./Food/costumes/Explode-05-june[18.png",
        { x: 188, y: 174 }
      ),
      new Costume(
        "Explode-05-june[19",
        "./Food/costumes/Explode-05-june[19.png",
        { x: 188, y: 176 }
      ),
      new Costume(
        "Explode-05-june[20",
        "./Food/costumes/Explode-05-june[20.png",
        { x: 188, y: 176 }
      ),
      new Costume(
        "Explode-05-june[21",
        "./Food/costumes/Explode-05-june[21.png",
        { x: 184, y: 172 }
      ),
      new Costume(
        "Explode-05-june[22",
        "./Food/costumes/Explode-05-june[22.png",
        { x: 184, y: 162 }
      ),
      new Costume(
        "Explode-05-june[23",
        "./Food/costumes/Explode-05-june[23.png",
        { x: 164, y: 160 }
      ),
      new Costume(
        "Explode-05-june[24",
        "./Food/costumes/Explode-05-june[24.png",
        { x: 140, y: 152 }
      ),
      new Costume(
        "Explode-05-june[25",
        "./Food/costumes/Explode-05-june[25.png",
        { x: 130, y: 148 }
      ),
      new Costume(
        "Explode-05-june[26",
        "./Food/costumes/Explode-05-june[26.png",
        { x: 132, y: 148 }
      ),
      new Costume(
        "Explode-05-june[27",
        "./Food/costumes/Explode-05-june[27.png",
        { x: 144, y: 142 }
      )
    ];

    this.sounds = [
      new Sound(
        "Grenade-SoundBible.com-1891951294.mp3",
        "./Food/sounds/Grenade-SoundBible.com-1891951294.mp3.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
      new Trigger(Trigger.BROADCAST, { name: "STOP" }, this.whenIReceiveStop)
    ];

    this.vars.XVelocity = 0;
    this.vars.YVelocity = -27;
    this.vars.foodt = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.bombsHit = 0;
    this.stage.vars.missed = 0;
    this.size = 100;
    this.direction = 90;
    this.stage.watchers.bombsHit.visible = false;
    this.vars.foodt = 0;
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    while (true) {
      this.createClone();
      yield* this.wait(this.random(0, 1.5));
      yield;
    }
  }

  *startAsClone() {
    this.effects.clear();
    while (!(this.mouse.down && this.touching("mouse"))) {
      yield;
    }
    if (this.costumeNumber === 7) {
      this.stage.vars.bombsHit++;
      yield* this.startSound("Grenade-SoundBible.com-1891951294.mp3");
      this.costume = "Explode-05-june[2";
      while (!(this.costumeNumber === 33)) {
        this.costumeNumber++;
        yield;
      }
    } else {
      this.stage.vars.score++;
      this.stage.vars.HighScore++;
      this.broadcast("score");
      for (let i = 0; i < 10; i++) {
        this.y += this.toNumber(this.vars.YVelocity);
        this.x += this.toNumber(this.vars.XVelocity);
        this.vars.YVelocity = this.toNumber(this.vars.YVelocity) - 1;
        this.effects.ghost += 10;
        this.effects.brightness -= 10;
        yield;
      }
      this.visible = false;
      this.deleteThisClone();
    }
  }

  *startAsClone2() {
    this.costume = this.random(1, 7);
    this.visible = true;
    this.y = -180;
    this.x = this.random(-180, 180);
    this.vars.YVelocity = this.random(16, 26);
    this.vars.XVelocity = this.random(-5, 5);
    while (!(this.compare(this.y, -180) < 0)) {
      this.direction +=
        Math.sin(this.degToRad(this.toNumber(this.vars.YVelocity))) + 5;
      this.x += this.toNumber(this.vars.XVelocity);
      this.y += this.toNumber(this.vars.YVelocity);
      this.vars.YVelocity = this.toNumber(this.vars.YVelocity) - 1;
      yield;
    }
    while (
      !(this.compare(this.y + this.toNumber(this.vars.YVelocity), -180) < 0)
    ) {
      this.direction +=
        Math.sin(this.degToRad(this.toNumber(this.vars.YVelocity))) + 5;
      this.y += this.toNumber(this.vars.YVelocity);
      yield;
    }
    if (!(this.costumeNumber === 7)) {
      this.stage.vars.missed++;
    }
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveMessage2() {}

  *whenIReceiveStop() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
