import Player from "../entities/player/Player";
import Background from "../entities/world/Background";
import Block from "../entities/world/Block";
import RendererManager from "../RendererManager";
import Scene from "./Scene";

export default class TestScene extends Scene{
    
    public ready(): void {

        // Background
        this.worldEntities.push(new Background());
        
        // Player
        const player = new Player(350, 300);
        this.worldEntities.push(player);
        //RendererManager.instance.viewport.followTarget = player;

        // Ground - Block
        this.worldEntities.push(new Block(540, 620, 1000, 200));
        


        console.log("Test Scene: ready")
    }

}