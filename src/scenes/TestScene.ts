import Player from "../entities/player/Player";
import Block from "../entities/world/Block";
//import RendererManager from "../RendererManager";
import Scene from "./Scene";

export default class TestScene extends Scene{
    
    public ready(): void {
        
        // Player
        const player = new Player(350, 300);
        this.worldEntities.push(player);
        //RendererManager.instance.viewport.followTarget = player;

        // Ground - Block
        this.worldEntities.push(new Block(560, 670, 1200, 200));
        


        console.log("Test Scene: ready")
    }

}