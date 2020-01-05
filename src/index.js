import * as BABYLON from 'babylonjs';
import {canvas, engine, scene} from './base';
import {camera} from './camera';

import Map from './map';
import {myMaterial} from './materials';
import {light1} from './lights';

import Player from './player';

import {Knight} from './people';
import {House} from './buildings';

class Game {
    constructor() {
        this.map = new Map(100, 100);
        this.map.buildMap();

        this.player = [];
        this.player.push(new Player( 1, new BABYLON.Color3(0, 1, 0) ));
        this.player.push(new Player( 2, new BABYLON.Color3(0, 0, 1) ));

        //keyboard controlls

        scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case BABYLON.KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case "a":
                        case "A":
                            this.player[0].people.push(new Knight("Knight"));
                        break
                        case "d":
                        case "D":
                            this.player[0].buildings.push(new House("House"));
                        break
                    }
                break;
            }
        });

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
