window.onload = function(){
    var canvas = document.querySelector('#canvas');
    var context = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 400;
    var sprite = new Image();

    sprite.onload = function() {
        context.drawImage(sprite, 0,0);
    }

    sprite.src = './bird_2_black.png';
}