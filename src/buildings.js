import * as BABYLON from 'babylonjs';
import {canvas, engine, scene} from './base';

let counter = 1;

class Building {
    constructor(name) {
        this.name = name;
        this.id = counter;
        counter += 1;
        this.appearance = null;
        this.material = new BABYLON.StandardMaterial("material", scene);
        this.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        this.live = 1000;
        this.position = new BABYLON.Vector3(0, 2, this.id*6);
    }
    build() {
        console.log();
        this.appearance = BABYLON.MeshBuilder.CreateBox("myBox", {height: 3, width: 4, depth: 4}, scene);
        this.appearance.position = this.position;
        this.appearance.material = this.material;
        //console.log(this.position);
    }
}

export class House extends Building { 
    constructor(name) {
        super(name);
        this.build();
    }
}
