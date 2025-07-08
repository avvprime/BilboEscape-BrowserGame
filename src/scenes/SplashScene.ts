import Scene from "./Scene";
import Label from "../entities/ui/Label";
import Clock from "../Clock";
import Background from "../entities/ui/Background";

export default class SplashScene extends Scene {

    private label!: Label;

    ready(): void {
        console.log("Splash Scene: ready");

        this.uiEntities.push(new Background());

        this.label = new Label({
            text: 'LOADING',
            style: {
            fill: '#212121',
            fontSize: 30,
            },
            anchor: 0.5
        });
        this.label.setPosition(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

        this.uiEntities.push(this.label);
    }

    update(): void {
        const time: number = Clock.instance.elapsedTime;
        this.label.setPosition(this.label.position.x, window.innerHeight / 2 + Math.sin(time * 0.003) * 10);
    }

}