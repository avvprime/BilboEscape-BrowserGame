import SceneManager from "../SceneManager";
import { SceneKeys } from "../scenes/Scenes";
import GameState from "./GameState";

export default class TestState extends GameState {
    
    enter(): void {
        console.log("Game Test State: entered");

        
        SceneManager.instance.loadScene(SceneKeys.Test);
    }

    exit(): void {
        console.log("Game Test State: exited");
    }
}