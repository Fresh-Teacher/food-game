import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Play from "./Play/Play.js";
import GunDot from "./GunDot/GunDot.js";
import End from "./End/End.js";
import Backdrop3 from "./Backdrop3/Backdrop3.js";
import Food from "./Food/Food.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Play: new Play({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 5,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  GunDot: new GunDot({
    x: -35,
    y: 19,
    direction: 90,
    costumeNumber: 1,
    size: 130,
    visible: false,
    layerOrder: 4
  }),
  End: new End({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Backdrop3: new Backdrop3({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Food: new Food({
    x: 98,
    y: 11,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite1: new Sprite1({
    x: -35,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 19,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite3: new Sprite3({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
