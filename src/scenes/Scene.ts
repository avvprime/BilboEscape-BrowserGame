import type Entity from "../entities/Entity";
import type UIEntity from "../entities/UIEntity";

export default abstract class Scene {
    
    worldEntities: Array<Entity> = [];
    uiEntities: Array<UIEntity> = [];

    // Will be called once when its entered scene tree
    public abstract ready(): void;

    // Will be called by SceneManager
    public update(delta: number): void {
        for (let i = 0; i < this.worldEntities.length; i++) {
            this.worldEntities[i].update(delta);
        }

        for (let i = 0; i < this.uiEntities.length; i++) {
            this.uiEntities[i].update(delta);
        }
        
    }

    // Will be called by SceneManager
    public fixedUpdate(delta: number): void {
        for (let i = 0; i < this.worldEntities.length; i++) {
            this.worldEntities[i].fixedUpdate(delta);
        }
    }

    // Will be called before destroyed
    public free(): void {

        for (let i = 0; i < this.worldEntities.length; i++) {
            this.worldEntities[i].free();
        }

        for (let i = 0; i < this.uiEntities.length; i++) {
            this.uiEntities[i].free();
        }
    }
}