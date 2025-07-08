import { Point } from "pixi.js";

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

export function lerp (a: number, b: number, t: number): number {
    return a + (b - a) * t;
}

export function lerpVec2(a: Point, b: Point, t: number): Point {
    return new Point(
        lerp(a.x, b.x, t),
        lerp(a.y, b.y, t)
    );
}