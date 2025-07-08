import { Input } from "./input/Input";

export default class Clock{

    private accumulator: number = 0;
    private lastTime: number = 0;
    private step: number = 16.660;

    private updateCallbacks: Map<string, Function> = new Map<string, Function>();
    private fixedUpdateCallbacks: Map<string, Function> = new Map<string, Function>();
    private renderCallbacks: Map<string, Function> = new Map<string, Function>();

    private static _instance: Clock;

    private constructor() { }

    public static get instance(): Clock{
        if (!Clock._instance){
            Clock._instance = new Clock();
        }

        return Clock._instance;
    }

    public get elapsedTime(): number {
        return this.lastTime;
    }

    public addUpdateCallback(callback: Function): string {
        const id: string = crypto.randomUUID(); 
        this.updateCallbacks.set(id, callback);
        return id;
    }

    public removeUpdateCallback(id: string): boolean {
        return this.updateCallbacks.delete(id);
    }

    public addFixedUpdateCallback(callback: Function): string {
        const id: string = crypto.randomUUID(); 
        this.fixedUpdateCallbacks.set(id, callback);
        return id;
    }

    public removeFixedUpdateCallback(id: string): boolean {
        return this.fixedUpdateCallbacks.delete(id);
    }

    public addRenderCallback(callback: Function): string {
        const id: string = crypto.randomUUID(); 
        this.renderCallbacks.set(id, callback);
        return id;
    }

    public removeRenderCallback(id: string): boolean {
        return this.renderCallbacks.delete(id);
    }

    public start(): void {
        requestAnimationFrame(this.callback.bind(this));
    }


    private callback(elapsedTimeInMillis: number): void {
        requestAnimationFrame(this.callback.bind(this));

        const delta: number = elapsedTimeInMillis - this.lastTime;
        this.accumulator += delta;

        this.update(delta);
        while(this.accumulator > this.step) {
            this.fixedUpdate(this.step);
            this.accumulator -= this.step;
        }
        const alpha = this.accumulator / this.step;
        this.render(alpha);

        Input.instance.update();

        this.lastTime = elapsedTimeInMillis;
    }

    private update(delta: number): void {
        for (const _callback of this.updateCallbacks.values()) {
            _callback(delta);
        }
    }

    private fixedUpdate(delta: number): void {
        for (const _callback of this.fixedUpdateCallbacks.values()) {
            _callback(delta);
        }   
    }

    private render(alpha: number): void {
        for (const callback of this.renderCallbacks.values()) {
            callback(alpha);
        }   
    }
}