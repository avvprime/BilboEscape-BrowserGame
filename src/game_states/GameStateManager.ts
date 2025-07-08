import type GameState from "./GameState";
import { type GameStateKey } from "./GameStates";

import InitState from "./InitState";
import MenuState from "./MenuState";
import TestState from "./TestState";


const GameStateRecords: Record<GameStateKey, GameState> = {
    Init: undefined!,
    Menu: undefined!,
    Test: undefined!,
}

export class GameStateManager {
    
    state!: GameState;

    constructor() {
        GameStateRecords.Init = new InitState(this);
        GameStateRecords.Menu = new MenuState(this);
        GameStateRecords.Test = new TestState(this);
    }

    public init(stateKey: GameStateKey) {
        this.state = GameStateRecords[stateKey];
        this.state.enter();
    }

    public changeState(newStateKey: GameStateKey): void {
        this.state.exit();
        this.state = GameStateRecords[newStateKey];
        this.state.enter();
    }
}