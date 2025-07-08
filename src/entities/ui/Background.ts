import { Graphics } from "pixi.js";
import UIEntity from "../UIEntity";
import { BACKGROUND_COLOR } from "../../Global";

export default class Background extends UIEntity {

    constructor() {
        const g = new Graphics();
        super(g);

        this.displayObject = g;

        g.rect(0, 0, window.innerWidth, window.innerHeight).fill(BACKGROUND_COLOR);
    }
}