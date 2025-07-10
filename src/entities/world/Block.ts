import { Assets, NineSliceSprite } from "pixi.js";
import Entity from "../Entity";
import { Bodies } from "matter-js";

export default class Block extends Entity {
    constructor(x: number, y: number, width: number, height: number) {
        super(
            new NineSliceSprite({
                texture: Assets.cache.get('public/square.png'),
                width: width,
                height: height,
                leftWidth: 32,
                topHeight: 32,
                rightWidth: 32,
                bottomHeight: 32,
                anchor: 0.5,
                tint: 0x000000
            }),
            Bodies.rectangle(x, y, width, height, { isStatic: true, label: 'block' })
        );
    }
}