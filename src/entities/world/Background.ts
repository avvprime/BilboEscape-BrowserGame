import { Assets, TilingSprite } from "pixi.js"
import Entity from "../Entity"

export default class Background extends Entity{
    constructor() {
        super(new TilingSprite({
            texture: Assets.cache.get('public/bg-tile.png'),
            width: window.innerWidth,
            height: window.innerHeight,
        }));

        window.addEventListener('resize', this.onResize.bind(this));
    }

    private onResize(): void {
        this.displayObject.width = window.innerWidth;
        this.displayObject.height = window.innerHeight;
    }

    public free(): void {
        super.free();
        window.removeEventListener('resize', this.onResize);
    }
}