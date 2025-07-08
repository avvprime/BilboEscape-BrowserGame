export const GameStateKeys = {
    Init: 'Init',
    Menu: 'Menu',
    Test: 'Test'
} as const;

export type GameStateKey = typeof GameStateKeys[keyof typeof GameStateKeys];