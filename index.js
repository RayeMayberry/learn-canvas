
window.onload = function(){
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 32 * 12;
    canvas.height = 32 * 8;
    const blackBirdImg = new Image();
    blackBirdImg.src = './bird_2_black.png';

    class Sprite{
        constructor(src, width, height, frames){
            this.src = src;
            this. width = width;
            this.height = height;
            this.frames = frames;
            this.index = [0,0]
        }
    };

    var bird = new Sprite(blackBirdImg, 32, 32, 3);

    // cx & cy = context x & y coordinates
    var cx = canvas.width - (bird.width);
    var cy = 0;
    
    function animate(sprite, position, framerate) {
        let i = 0;
        setInterval(()=>{
            
            sprite.index[0] = i * sprite.width;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(sprite.src, sprite.index[0], sprite.index[1], sprite.width,sprite.height, position[0], position[1], sprite.width, sprite.height);
            i++;
            if(i === 3){
                i = 0;
            }
        }, 1000/framerate);
    }
    
    blackBirdImg.onload =  animate(bird, [cx, cy], 5);
    
}