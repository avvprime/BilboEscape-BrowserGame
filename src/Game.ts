
import { GameStateManager } from './game_states/GameStateManager';
import { GameStateKeys } from './game_states/GameStates';
import { Input } from './input/Input';
import { KeyboardInputSystem } from './input/KeyboardInputSystem';

export default class Game {

    private static _instance: Game;

    private gameStateManager: GameStateManager;

    private constructor() {
        this.gameStateManager = new GameStateManager();
        new KeyboardInputSystem(Input.instance);
    }

    public static get instance(): Game {
        if (!Game._instance) {
            Game._instance = new Game();
        }

        return Game._instance;
    }

    init(): void {
        this.gameStateManager.init(GameStateKeys.Init);
    }
}

