import Sprite from './Sprite.js';
import Tile from './Tile.js';

import bird_2_black from './bird_2_black.png';
import tileset_c_1 from './tileset_c_1.png';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = 32 * 12;
canvas.height = 32 * 8;

const blackBirdImg = new Image();
blackBirdImg.src = bird_2_black;

const tileset = new Image();
tileset.src = tileset_c_1;

window.onload = function () {
   var grass = new Tile(tileset, [0,0],32);
    grass.fillArea([canvas.width, canvas.height]);

    var bird = new Sprite(blackBirdImg, 32, 32, [0, 0], 3, 8);

    // bird.animate(5).fly('down', [100, 200], 5);
}
