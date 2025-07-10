import { Bodies, Body } from "matter-js";
import { Assets, Sprite } from "pixi.js";
import { Input } from "../../input/Input";
import Entity from "../Entity";

const input = Input.instance;

export default class Player extends Entity{

    speed: number = 6;
    airSpeed: number = 0.05;
    jumpForce: number = 0.35;

    constructor(x?: number, y?: number) {
        const sprite = new Sprite(Assets.cache.get('public/character.png'));
        sprite.anchor.set(0.5);
        sprite.scale.set(0.3)
        super(
            sprite,
            Bodies.rectangle(x || 0, y || 0, 75, 75, {
                isStatic: false,
                label: 'player',
                /*
                collisionFilter: {
                    category: CATEGORY_PLAYER,
                    mask: CATEGORY_BLOCK
                }
                */
            })
        );

        // Disable rotation
        Body.setInertia(this.body!, Infinity);

    }

    public override update(delta: number): void {
        super.update(delta);

        if (!this.body) return;

        if (input.moveX !== 0) 
        {   
            this.displayObject.scale.x = 0.3 * input.moveX;
            Body.setVelocity(
                this.body,
                // force
                { x: this.speed * input.moveX, y: this.body.velocity.y }
            );
        }
        
        if (input.jump) {
            Body.applyForce(
                this.body,
                // positiom
                { x: this.body.position.x, y: this.body.position.y},
                // force
                { x: this.airSpeed * input.moveX, y: -this.jumpForce }
            );
        }

        /*
        if (this.body.speed > this.maxSpeed && !this.isOnGround) {
            const scale = this.maxSpeed / this.body.speed;
            Body.setVelocity(this.body, {
                x: this.body.velocity.x * scale,
                y: this.body.velocity.y
            });
        }
        */
    }
    
    public free(): void {
        super.free();

    }

}