import Clock from "./Clock";
import type Scene from "./scenes/Scene";
import  { Scenes, type SceneKey } from "./scenes/Scenes";

export default class SceneManager {
    
    private static _instance: SceneManager;

    private scene!: Scene;

    private constructor() {
        Clock.instance.addUpdateCallback(this.update.bind(this));
        Clock.instance.addFixedUpdateCallback(this.fixedUpdate.bind(this));
    }

    public static get instance(): SceneManager {
        if (!SceneManager._instance) {
            SceneManager._instance = new SceneManager();
        }

        return SceneManager._instance;
    }

    public update(delta: number): void {
        if (this.scene) this.scene.update(delta);
    }

    public fixedUpdate(delta: number): void {
        if (this.scene) this.scene.fixedUpdate(delta);
    }

    public loadScene(sceneKey: SceneKey): void {
        if (this.scene) this.scene.free();
        this.scene = Scenes[sceneKey]();
        this.scene.ready();
    }

}