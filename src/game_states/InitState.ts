import GameState from "./GameState";
import Clock from "../Clock";
import RendererManager from "../RendererManager";
import PhysicsManager from "../PhysicsManager";
import SceneManager from "../SceneManager";
import { SceneKeys } from "../scenes/Scenes";
import { Assets, Texture } from "pixi.js";
import { GameStateKeys } from "./GameStates";


export default class InitState extends GameState {

    listeners: Map<string, string> = new Map<string, string>();

    enter(): void {
        console.log("Game Init State: entered");
        
        Assets.load<Texture>([
            'public/character.png',
            'public/bg-image.png',
            'public/square.png'
        ])
        .then(() => {
            console.log("Asset loaded");
            
            RendererManager.instance.setup();
            PhysicsManager.instance.setup();
            SceneManager.instance.loadScene(SceneKeys.Splash);
            Clock.instance.start();

            this.stateManager.changeState(GameStateKeys.Test);

            /*
            setTimeout(() => {
                
            }, 100);
            */
        });

    }

    exit(): void {
        
        console.log("Game Init State: exited");
    }

}