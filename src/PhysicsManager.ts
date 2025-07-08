import {
    Engine,
    Body,
    Composite,
    Constraint,
    MouseConstraint
} from 'matter-js';
import Clock from './Clock';

type MatterObject = Body | Composite | Constraint | MouseConstraint;

export default class PhysicsManager {

    private static _instance: PhysicsManager;

    private engine: Engine;

    private constructor() {
        this.engine = Engine.create({
            gravity: { scale: 0.002 }
        })
    }

    public static get instance(): PhysicsManager {
        if (!PhysicsManager._instance) {
            PhysicsManager._instance = new PhysicsManager();
        }

        return PhysicsManager._instance;
    }

    public setup(): void {
        Clock.instance.addFixedUpdateCallback(this.update.bind(this));
    }

    public update(delta: number): void {
        Engine.update(this.engine, delta);
    }

    public add(object: MatterObject | MatterObject[]): void {
        Composite.add(this.engine.world, object);
    }

    public remove(object: MatterObject | MatterObject[]): void {
        Composite.remove(this.engine.world, object);
    }

    public getBodies(): Body[] {
        return Composite.allBodies(this.engine.world);
    }
}