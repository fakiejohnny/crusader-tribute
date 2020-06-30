import * as BABYLON from 'babylonjs';
import { canvas, engine, scene } from './base';
import Resources from './resources';

import { Knight } from './people';
import { House } from './buildings';
import { TextObject } from './user-interface';

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
    constructor(id, color, controls) {
        this.id = id;
        this.color = color;
        this.live = 5000
        this.keep = new Keep(this.id, this.color);
        this.ressources = new Resources();
        this.keep.build();
        this.people = [];
        this.buildings = [];
        this.controls = controls;
        this.textObjects = [
            new TextObject
        ]

        this.textObjects.forEach(element => {
            element.initialize();
        });

        scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case BABYLON.KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case this.controls.a:
                            this.people.push(new Knight("Knight"));
                        break
                        case this.controls.b:
                            this.buildBuilding();
                        break
                    }
                break;
            }
        });

    }

    buildBuilding() {
        if (this.ressources.naturalResources.wood >= 2) {
            this.ressources.naturalResources.wood -= 2;
            this.buildings.push(new House("House"));

            let number = this.ressources.naturalResources.wood
            let text = `Holz: ${number}`

            this.textObjects[0].edit(text);
        } else {
            console.log("zu wenig Holz")
        }
    }

}