import { Text, type CanvasTextOptions } from "pixi.js";
import UIEntity from "../UIEntity";

export default class Label extends UIEntity {
    constructor(options: CanvasTextOptions) {
        super(new Text(options));
    }
}