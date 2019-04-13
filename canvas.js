import Sprite from './Sprite.js';
import Tile from './Tile.js';
import * as Assets from './assets';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = 32 * 12;
canvas.height = 32 * 8;

const blackBirdImg = new Image();
blackBirdImg.src = Assets.blackBirdSpriteSheet;

const tileset = new Image();
tileset.src = Assets.backGroundTileSet;

var grass = new Tile(tileset, [0, 0], 32);

var bird = new Sprite(blackBirdImg, 32, 32, [0, 0], 3, 8);

let frameCount = 0;
function update() {
    //need a loop that updates animation frames, movement, & redraws background
    frameCount ++;
    if (frameCount < 15){
        window.requestAnimationFrame(update);
        return;
    }
    frameCount = 0;
    main();
   
}

function main() {
    grass.fillCanvas();
    bird.render();
    
    update();
}

window.onload = main();
