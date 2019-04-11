const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

var birdSpriteSheet = new Image();
birdSpriteSheet.src = "./bird_2_black.png";

function sprite(options){
    var that = {};
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;
}

var bird = sprite({
    context: context,
    width: 32,
    height: 32,
    image: birdSpriteSheet
});