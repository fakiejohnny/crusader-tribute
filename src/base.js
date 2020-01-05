import * as BABYLON from 'babylonjs';
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

export {canvas, engine, scene};
