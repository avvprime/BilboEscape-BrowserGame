import { Container } from "pixi.js";
import RendererManager from "../RendererManager";


export default abstract class UIEntity{

    protected displayObject: Container;

    constructor(displayObject: Container) {
        this.displayObject = displayObject;
        RendererManager.instance.canvas.addChild(this.displayObject);
    }

    public update(delta: number): void {}

    public get position(): any {
        return { x: this.displayObject.position.x, y: this.displayObject.position.y };
    }

    public get rotation(): number {
        return this.displayObject.angle
    }

    public get scale(): any {
        return { x: this.displayObject.scale.x, y: this.displayObject.scale.y };
    }

    public setPosition(x: number, y: number): void {
        this.displayObject.position.set(x, y);
    }

    public setRotation(angle: number): void {
        this.displayObject.angle = angle;
    }

    public setScale(x: number, y: number): void {
        this.displayObject.scale.set(x, y);
    }

    public free(): void {
        RendererManager.instance.canvas.removeChild(this.displayObject);
    }
}