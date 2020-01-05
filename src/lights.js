import * as BABYLON from 'babylonjs';
import {canvas, engine, scene} from './base';

export const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
