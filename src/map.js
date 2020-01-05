import * as BABYLON from 'babylonjs';
import {canvas, engine, scene} from './base';

import {Size, Position} from './helpers';
import {myMaterial} from './materials';

export default class Map {
    constructor(w, h) {
        this.size = new Size(w, h);
        this.ground;
    }
    buildMap() {
        this.ground = BABYLON.MeshBuilder.CreateGround("myGround", {
            width: this.size.width, height: this.size.height, subdivisions: 8
        }, scene);
        this.ground.material = myMaterial;
    }
}
