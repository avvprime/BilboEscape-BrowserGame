import { Container, Point } from "pixi.js";
import type Entity from "./entities/Entity";
import { lerpVec2 } from "./math";

export default class Viewport extends Container {

    followTarget!: Entity | undefined;

    smoothing: number = 0.1; // duration time for lerp


    constructor() {
        super();
    }

    public update(): void {
        if (this.followTarget) {
            const targetPos = this.followTarget.displayObject.position;
            const nextPos = new Point(
                -targetPos.x * this.scale.x + window.innerWidth / 2,
                -targetPos.y * this.scale.y + window.innerHeight / 2
            );
            const smoothPos = lerpVec2(this.position, nextPos, this.smoothing);
            this.position.set(smoothPos.x, smoothPos.y);
        }
    }

    public worldToScreen(x: number, y: number): Point {
        return new Point(
            x * this.scale.x + this.position.x,
            y * this.scale.y + this.position.y
        );
    }

    public screenToWorld(x: number, y: number): Point {
        return new Point(
            (x - this.position.x) / this.scale.x,
            (y - this.position.y) / this.scale.y
        );
    }

}