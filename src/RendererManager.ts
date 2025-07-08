import { autoDetectRenderer, Container, type Renderer } from "pixi.js";
import Clock from "./Clock";
import Viewport from "./Viewport";


export default class RendererManager {

    public viewport: Viewport = new Viewport();
    public canvas: Container = new Container();
    
    private static _instance: RendererManager;
    private renderer!: Renderer;
    private stage: Container = new Container();

    private constructor() {
        // For in world entities
        this.stage.addChild(this.viewport);

        // For ui entities
        this.stage.addChild(this.canvas);

        window.addEventListener('resize', () => {
            this.renderer.resize(window.innerWidth, window.innerHeight);

            // Don't forget to update canvas world object positions bc you know they have relative positions
        });
    }

    private render(): void {
        /*
        // Drag camera
        if (Input.instance.dragX !== 0) {
            this.viewport.position.x -= 10 * Input.instance.dragX;
            console.log(Input.instance.dragX)
        }

        if (Input.instance.dragY !== 0) {
            this.viewport.position.y -= 10 * Input.instance.dragY;
            console.log(Input.instance.dragY)
        }
        */
        
        this.viewport.update();
        this.renderer.render(this.stage);

    }

    public static get instance(): RendererManager {

        if (!RendererManager._instance) {
            RendererManager._instance = new RendererManager();
        }

        return RendererManager._instance;
    }

    public async setup(): Promise<void> {
        this.renderer = await autoDetectRenderer({ preference: 'webgpu' });
        this.renderer.resize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container')?.appendChild(this.renderer.canvas);
        Clock.instance.addRenderCallback(this.render.bind(this));
    }

}