import * as GUI from 'babylonjs-gui';
import {canvas, engine, scene} from './base';

const userInterface = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);

class TextObject {
    constructor() {
        this.block = new GUI.TextBlock();
    }
    initialize() {
        this.block.text = "";
        this.block.color = "white";
        this.block.fontSize = "20px";
        this.block.top = "20px";
        this.block.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
        userInterface.addControl(this.block);
    }
    edit(t) {
        this.block.text = t;
    }
}

export {userInterface, TextObject};