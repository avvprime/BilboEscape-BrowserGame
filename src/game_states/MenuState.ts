import SceneManager from "../SceneManager";
import { SceneKeys } from "../scenes/Scenes";
import GameState from "./GameState";

export default class MenuState extends GameState {


    enter(): void {
        console.log("Game Menu State: entered");
        SceneManager.instance.loadScene(SceneKeys.Menu);
    }
    
    exit(): void {
        console.log("Game Menu State: exited");
    }
}