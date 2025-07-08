import Background from "../entities/world/Background";
import Scene from "./Scene";

export default class MenuScene extends Scene{
    
    ready(): void {
        console.log("Menu Scene: ready");

        this.worldEntities.push(new Background());
    }

    update(): void {
        
    }

}