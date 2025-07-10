import { Sprite, BlurFilter, Texture } from "pixi.js";


export default class StaticBackground extends Sprite{

    private baseWidth: number;
    private baseHeight: number;

    constructor(texture: Texture) {
        super(texture);

        this.baseWidth = this.width;
        this.baseHeight = this.height;

        this.anchor.set(0.5);
    
        const ratio = Math.max(window.innerWidth / this.width, window.innerHeight / this.height);
        this.scale.set(ratio);

        this.position.set(window.innerWidth / 2, window.innerHeight / 2);

        const blurFilter = new BlurFilter();
        blurFilter.strength = 4;

        this.filters = [blurFilter];
        
        window.addEventListener('resize', () => {
            const ratio = Math.max(window.innerWidth / this.baseWidth, window.innerHeight / this.baseHeight);
            this.scale.set(ratio);

            this.position.set(window.innerWidth / 2, window.innerHeight / 2);
        });
        
    }
}