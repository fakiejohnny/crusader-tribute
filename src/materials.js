import * as BABYLON from 'babylonjs';
import {canvas, engine, scene} from './base';

function create_material() {
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.diffuseColor = new BABYLON.Color3(0, 1, 1);
    myMaterial.wireframe = true;
    return myMaterial;
}

export const myMaterial = create_material();

//cooler als ohne Funktion (export const myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);)
