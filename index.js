window.onload = function(){
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 300;
    const blackBirdImg = new Image();
    blackBirdImg.src = './bird_2_black.png';
    // sprite width & height can also be used to iterate thru the spritesheet
    const width = 32;
    const height = 32;
    const scale = 1.5;
    // cx & cy = context x & y coordinates
    var cx = canvas.width - (width*scale);
    var cy = 0;
    // sx & sy = sprite x & y coordinates
    var sx = 0;
    var sy = 0;
    
    
    blackBirdImg.onload = function() {
        for(i = 0; i < 3; i++){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(blackBirdImg, i * width, sy, width, height, cx, cy, width*scale,height*scale);
        }
        
    }
}