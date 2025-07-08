import type { GameStateManager } from "./GameStateManager";

export default class GameState {

    stateManager: GameStateManager;

    constructor(manager: GameStateManager) {
        this.stateManager = manager;
    }

    enter(): void {
        
    }

    exit(): void {
        
    }
}