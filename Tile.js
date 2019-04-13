const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

export default class {
    constructor(src, index, size){
        this.src = src;
        this.index = index;
        this.size = size;
    }
    render(position){
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
    fillArea(area){

    }
}