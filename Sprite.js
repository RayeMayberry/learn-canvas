const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

export default class {
    constructor(src, width, height, position, frames, cycles) {
        this.src = src;
        this.width = width;
        this.height = height;
        this.index = [0, 0]; // x = frame, y = cycle
        this.position = position;
        this.frames = frames;
        this.cycles = cycles;
    }

    render() {
        ctx.drawImage(
            this.src,
            this.index[0]* this.height,
            this.index[1] ,
            this.width, 
            this.height,
            this.position[0],
            this.position[1],
            this.width,
            this.height
            );
            this.index[0]++;
            if (this.index[0] >= 3) {
                this.index[0] = 0;
            }
            return this;
                                                            
    }

};
