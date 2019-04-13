const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = 32 * 12;
canvas.height = 32 * 8;
const blackBirdImg = new Image();
blackBirdImg.src = './bird_2_black.png';

class Sprite {
    constructor(src, width, height, position, frames, cycles) {
        this.src = src;
        this.width = width;
        this.height = height;
        this.index = [0, 0]; // x = frame, y = cycle
        this.position = position;
        this.frames = frames;
        this.cycles = cycles;
    }

    animate(framerate) {
        let i = 0;
        setInterval(() => {

            this.index[0] = i * this.width;

            ctx.clearRect(
                this.position[0], this.position[1], this.width, this.height
            );
            ctx.drawImage(
                this.src,
                this.index[0],
                this.index[1] * this.height,
                this.width, this.height,
                this.position[0],
                this.position[1],
                this.width,
                this.height);
            i++;
            if (i === 3) {
                i = 0;
            }
        }, 1000 / framerate);
        return this;
    }

    fly(direction, distance, speed) {
        if (direction === 'left') {
            this.index[1] = 0;
        }
        if (direction === 'up') {
            this.index[1] = 1;
        }
        if (direction === 'down') {
            this.index[1] = 2;
        }
        if (direction === 'right') {
            this.index[1] = 3;
        }

        setInterval(
            () => {
                if (this.position[0] < distance[0]) {
                    this.position[0]++;
                }
                if (this.position[1] < distance[1]) {
                    this.position[1]++;
                }
            }, 1000 / speed
        )
        return this;
    }
};

function main() {

    var bird = new Sprite(blackBirdImg, 32, 32, [0, 0], 3, 8);

    bird.animate(5).fly('down', [100, 200], 5);
}

window.onload = main();