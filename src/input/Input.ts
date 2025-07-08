
interface InputState{
    moveX: number;
    moveY: number;
    jump: boolean;
    dragX: number,
    dragY: number,
}

export class Input {

    private state: InputState = {
        moveX: 0,
        moveY: 0,
        jump: false,
        dragX: 0,
        dragY: 0,
    }

    private static _instance: Input;

    private constructor() {
        console.log("Input singleton instance created.");
    }

    public static get instance(): Input {
        if (!Input._instance) {
            Input._instance = new Input();
        }

        return Input._instance;
    }

    get moveX(): number { return this.state.moveX; }
    get moveY(): number { return this.state.moveY; }
    get jump(): boolean { return this.state.jump; }
    get dragX(): number { return this.state.dragX; }
    get dragY(): number { return this.state.dragY; }

    public setMoveX(value: number): void {
        this.state.moveX = value;
    }

    public setMoveY(value: number): void {
        this.state.moveY = value;
    }

    public setJump(value: boolean): void {
        if (value && this.state.jump) return;

        this.state.jump = value;
    }

    public setDragX(value: number): void {
        this.state.dragX = value;
    }

    public setDragY(value: number): void {
        this.state.dragY = value;
    }


    public update(): void{
        this.state.jump = false;
    }

}
