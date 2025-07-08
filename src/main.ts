import './style.css';
import { Application } from 'pixi.js';

const game = new Application();
await game.init({
  background: 0xff0f00,
  resizeTo: window
});


document.querySelector<HTMLDivElement>('#app')!.appendChild(game.canvas);


