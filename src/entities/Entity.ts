import type { Container } from "pixi.js";
import RendererManager from "../RendererManager";
import PhysicsManager from "../PhysicsManager";
import { Body } from "matter-js";

export default abstract class Entity {
    displayObject: Container;
    body?: Body;

    constructor(displayObject: Container, body?: Body) {
        this.displayObject = displayObject;
        this.body = body;

        RendererManager.instance.viewport.addChild(this.displayObject);
        if (this.body) PhysicsManager.instance.add(this.body);
    }

    public update(delta: number): void {
        
    }

    public fixedUpdate(delta: number): void {
        if (this.body) {
            this.displayObject.position.set(this.body.position.x, this.body.position.y);
            this.displayObject.rotation = this.body.angle;
        }
    }

    public free(): void {
        RendererManager.instance.viewport.removeChild(this.displayObject);
        if (this.body) PhysicsManager.instance.remove(this.body);
    }

}