import MenuScene from "./MenuScene";
import type Scene from "./Scene";
import SplashScene from "./SplashScene";
import TestScene from "./TestScene";


export const SceneKeys = {
    Splash: 'splash',
    Menu: 'menu',
    Test: 'test',
} as const;

export type SceneKey = typeof SceneKeys[keyof typeof SceneKeys];

export const Scenes: Record<SceneKey, () => Scene> = {
    [SceneKeys.Splash]: () => new SplashScene(),
    [SceneKeys.Menu]: () => new MenuScene(),
    [SceneKeys.Test]: () => new TestScene(),
}