import * as BABYLON from 'babylonjs';
import {canvas, engine, scene} from './base';

import {Size, Position} from './helpers';

export default class Resources {
    constructor() {
        this.naturalResources = new NaturalResources();
        this.manufacturedResources = new ManufacturedResources();
    }
}

class NaturalResources {
    constructor() {
        this.wood = 9;
        this.stone = 5;
    }
}

class ManufacturedResources {
    constructor() {
        this.weapons = 0;
    }
}
