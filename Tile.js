const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

export default class {
    constructor(src, index, size) {
        this.src = src;
        this.index = index;
        this.size = size;
    }
    render(position) {
        ctx.drawImage(
            this.src,
            this.index[0],
            this.index[1],
            this.size,
            this.size,
            position[0],
            position[1],
            this.size,
            this.size
        )
        return this;
    }
    fillCanvas() {
        let x = 0;
        let y = 0;
        while(y < canvas.height){
            while (x < canvas.width) {
                this.render([x, y]);
                x += this.size;
            }
            x = 0;
            y += this.size;
        }
    }
}