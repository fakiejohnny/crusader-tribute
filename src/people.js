import * as BABYLON from 'babylonjs';
import {canvas, engine, scene} from './base';

let counter = 1;

class People {
    constructor(name) {
        this.name = name;
        this.id = counter;
        counter += 1;
        this.live = 1000;
        this.appearance = null;
        this.position = new BABYLON.Vector3(this.id, 0.5, 0);
    }
    build() {
        this.appearance = BABYLON.MeshBuilder.CreateCylinder("cone", {diameter: 0.5, height: 1}, scene);
        this.appearance.position = this.position;
    }
}

export class Knight extends People { 
    constructor(name) {
        super(name);
        this.build();
    }
}

//forEach Array iterieren