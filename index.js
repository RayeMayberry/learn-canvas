window.onload = function(){
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 300;
    const blackBirdImg = new Image();
    blackBirdImg.src = './bird_2_black.png';
    // cx & cy = context x & y coordinates
    var cx = 0;
    var cy = 0;
    // sx & sy = sprite x & y coordinates
    var sx = 0;
    var sy = 0;
    // sw & sh = sprite width = height;
    const width = 32;
    const height = 32;
    blackBirdImg.onload = function() {
        ctx.drawImage(blackBirdImg, sx, sy, width, height, cx, cy, 32,32);
    }
}