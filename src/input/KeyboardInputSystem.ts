import { InputSystem } from "./InputSystem";
import type { Input } from "./Input";

export class KeyboardInputSystem extends InputSystem{

    input: Input;

    constructor(input: Input) {
        super();
        this.input = input;

        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    onKeyDown(event: KeyboardEvent): void {
        if (event.repeat) return;
        switch (event.code) {
            case 'KeyA':
                this.input.setMoveX(-1);    
                break;
            case 'KeyD':
                this.input.setMoveX(1);
                break;
            case 'Space':
                this.input.setJump(true);
                break;
            case 'ArrowRight':
                this.input.setDragX(1);
                break;
            case 'ArrowLeft':
                this.input.setDragX(-1);
                break;
            case 'ArrowUp':
                this.input.setDragY(-1);
                break;
            case 'ArrowDown':
                this.input.setDragY(1);
                break;
            default:
                break;
        }
    }
    
    onKeyUp(event: KeyboardEvent): void {
        switch (event.code) {
            case 'KeyA':
                this.input.setMoveX(0);    
                break;
            case 'KeyD':
                this.input.setMoveX(0);
                break;
            case 'Space': 
                this.input.setJump(false);
                break;
            case 'ArrowRight':
                this.input.setDragX(0);
                break;
            case 'ArrowLeft':
                this.input.setDragX(0);
                break;
            case 'ArrowUp':
                this.input.setDragY(0);
                break;
            case 'ArrowDown':
                this.input.setDragY(0);
                break;
            default:
                break;
        }
    }

    update() {
       
    }
}