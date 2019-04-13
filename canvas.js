import Sprite from './Sprite.js';
import bird_2_black from './bird_2_black.png';
import forest_tiles from './forest_tiles.png';

const canvas = document.querySelector('#canvas');
canvas.width = 32 * 12;
canvas.height = 32 * 8;

const blackBirdImg = new Image();
blackBirdImg.src = bird_2_black;

const forestTilesImg = new Image();
forestTilesImg.src = forest_tiles;


class Tile {
    constructor(){}
}

function main() {
    
    var bird = new Sprite(blackBirdImg, 32, 32, [0, 0], 3, 8);

    bird.animate(5).fly('down', [100, 200], 5);
}

window.onload = main();