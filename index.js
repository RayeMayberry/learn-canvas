window.onload = function(){
    var canvas = document.querySelector('#canvas');
    var context = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 400;
    var sprite = new Image();
    // cx & cy = context x & y coordinates
    var cx = 0;
    var cy = 0;
    // sx & sy = sprite x & y coordinates
    var sx = 0;
    var sy = 0;
    // sw & sh = sprite width = height;
    var sw = 32;
    var sh = 32;

    sprite.onload = function() {
        context.drawImage(sprite, sx, sy, sw, sh, cx, cy, 32,32);
    }

    sprite.src = './bird_2_black.png';
}