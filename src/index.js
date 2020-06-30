import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';

import {canvas, engine, scene} from './base';
import {camera} from './camera';
import {userInterface} from './user-interface';

import Map from './map';
import {myMaterial} from './materials';
import {light1} from './lights';

import Player from './player';

class Controls {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

const controls = [
    new Controls("q", "w"),
    new Controls("a", "s"),
]

class Game {
    constructor() {
        this.map = new Map(100, 100);
        this.map.buildMap();

        this.player = [];
        this.player.push(new Player( 1, new BABYLON.Color3(0, 1, 0), controls[0] ));
        this.player.push(new Player( 2, new BABYLON.Color3(0, 0, 1), controls[1] ));

    }
}

new Game();

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});

window.addEventListener("click", function () {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
});
