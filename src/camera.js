import * as BABYLON from 'babylonjs';
import {canvas, engine, scene} from './base';

function create_camera() {
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(-8, 4, 20));
    camera.lowerBetaLimit = 0;
    camera.upperBetaLimit = Math.PI;
    camera.lowerRadiusLimit = 6;
    camera.upperRadiusLimit = 100;
    camera.attachControl(canvas, true);
    return camera;
}

export const camera = create_camera();
