import * as BABYLON from 'babylonjs';
import {canvas, engine, scene} from './base';

const avaiPos = [
    new BABYLON.Vector3(-40, 3, 0),
    new BABYLON.Vector3(40, 3, 0)
]

class Keep {
    constructor(id, color) {
        this.position = avaiPos[id-1];
        this.appearance = null;
        this.material = new BABYLON.StandardMaterial("material", scene);
        this.material.diffuseColor = color;
    }
    build() {
        this.appearance = BABYLON.MeshBuilder.CreateBox("myBox", {height: 5, width: 6, depth: 8}, scene);
        this.appearance.position = this.position;
        this.appearance.material = this.material;
        //console.log(this.position);
    }
}

export default class Player {
    constructor(id, color) {
        this.id = id;
        this.color = color;
        this.live = 5000
        this.keep = new Keep(this.id, this.color);
        this.keep.build();
        this.people = [];
        this.buildings = [];
    }
}
